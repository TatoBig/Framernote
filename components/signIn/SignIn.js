import { gql, useLazyQuery } from '@apollo/client'
import { loginRedux } from 'store/login'
import { motion, useCycle } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import AnimatedLogo from 'components/animation/AnimatedLogo'
import Button from 'components/controls/Button'
import Input from 'components/controls/Input'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
// eslint-disable-next-line no-unused-vars
import firebase from 'services/Firebase'

const provider = new GoogleAuthProvider()

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 50% 50%)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const LOGIN_QUERY = gql`
  query Query($loginId: String!) {
    login(id: $loginId) {
      auth
      username
      id
    }
  }
`

const LOGIN_GOOGLE = gql`
  query Query($email: String!, $username: String!, $uid: String!) {
    loginGoogle(email: $email, username: $username, uid: $uid) {
      auth
      username
      id
    }
  }
`

const schema = yup.object().shape({
  username: yup.string().required('Debe ingresar un nombre de usuario'),
  password: yup.string().required('Debe ingresar una contraseña')
})

const SignIn = () => {
  const [login, { loading, data }] = useLazyQuery(LOGIN_QUERY)
  const [loginWithGoogle, { loading: googleLoading, data: googleData }] = useLazyQuery(LOGIN_GOOGLE)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const router = useRouter()
  const dispatch = useDispatch()
  const {
    logged
  } = useSelector(state => state.login)

  const [loginError, setLoginError] = useState('')
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (logged) {
      toggleOpen()
      setIsVisible(true)
      setTimeout(() => {
        router.push('/home')
      }, 2000)
    }
  }, [logged])

  useEffect(() => {
    if (data?.login?.auth) {
      dispatch(loginRedux({
        status: data.login.auth,
        username: data.login.username,
        id: data.login.id
      }))
    } else {
      if (data !== undefined) {
        setLoginError('Contraseña o usuario incorrecto')
      }
    }
  }, [data])

  useEffect(() => {
    if (googleData?.loginGoogle?.auth) {
      dispatch(loginRedux({
        status: googleData.loginGoogle.auth,
        username: googleData.loginGoogle.username,
        id: googleData.loginGoogle.id
      }))
    }
  }, [googleData])

  const onSubmit = (data) => {
    setLoginError('')
    const auth = getAuth()
    signInWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        login({
          variables: {
            loginId: userCredential.user.uid
          }
        })
      })
      .catch(() => {
        setLoginError('Correo o contraseña incorrecta')
      })
  }

  const googleAuth = async () => {
    try {
      const auth = getAuth()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      loginWithGoogle({
        variables: {
          email: user.email,
          username: user.displayName,
          uid: user.uid
        }
      })
      console.log(result.user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <motion.div
      className="p-8 bg-card  md:mr-8 rounded-xl mt-4 flex flex-col w-full shadow-md"
      initial={{ borderWidth: '8px', borderColor: '#EEEEEE' }}
      animate={{ borderWidth: '8px', borderColor: '#2B2B33' }}
      transition={{ duration: 1, delay: 1.1 }}
    >
      <div className="font-normal text-xl flex flex-row mb-4">
        Acceder a  <div className="font-semibold">&#160;Framer</div> note
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="username"
          placeholder="Usuario"
          error={errors.username}
        />
        <Input
          register={register}
          name="password"
          placeholder="Contraseña"
          type="password"
          error={errors.password}
        />
        <h6 className="text-xs h-2 font-semibold -mt-2 mb-4">
          {loginError}
        </h6>
        <div className="mb-4">
          <Button text="Iniciar Sesión" loading={loading} />
        </div>
      </form>
      <Button text="Iniciar Sesión con Google" type="button" onClick={() => googleAuth()} loading={googleLoading} />

      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div className="fixed bg-gray-200 w-full h-full top-0 right-0 bottom-0 z-10" variants={sidebar} />
      </motion.div>

      <AnimatedLogo isVisible={isVisible} initial="closed" animate="open" />

    </motion.div>
  )
}

export default SignIn
