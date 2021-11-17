import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from 'components/controls/Button'
import Input from 'components/controls/Input'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { gql, useMutation } from '@apollo/client'
// eslint-disable-next-line no-unused-vars
import firebase from 'services/Firebase'

const schema = yup.object().shape({
  email: yup.string().required('Debe ingresar un correo electrónico'),
  password: yup.string().required('Debe ingresar una contraseña')
})

const CREATE_USER = gql`
  mutation Mutation($userInput: UserInput) {
    createUser(userInput: $userInput) {
      _id
    }
  }
`

const SignUp = () => {
  const [createUser, { loading, data }] = useMutation(CREATE_USER)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (data?.createUser?._id) {
      setLoginError('Cuenta creada correctamente')
      reset()
    }
  }, [data])

  const getMessage = (code) => {
    switch (code) {
      case 'auth/weak-password':
        return 'Contraseña debe tener mínimo 6 caracteres'
      case 'auth/email-already-in-use':
        return 'Este correo ya esta actualmente en uso'
      default:
        break
    }
  }

  const [loginError, setLoginError] = useState('')

  const onSubmit = (data) => {
    setLoginError('')
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        createUser({
          variables: {
            userInput: {
              email: user.email,
              id: user.uid
            }
          }
        })
      })
      .catch((error) => {
        const errorCode = error.code
        setLoginError(getMessage(errorCode))
      })
  }

  return (
    <motion.div
      className="p-8 bg-card  mr-8 rounded-xl mt-4 flex flex-col w-full"
      initial={{ borderWidth: '8px', borderColor: '#EEEEEE' }}
      animate={{ borderWidth: '8px', borderColor: '#2B2B33' }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="font-normal text-xl flex flex-row">
        Registrarse
      </div>
      <h6 className="text-xs h-2 font-semibold mb-4">
        No utilice credenciales reales
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="email"
          type="email"
          placeholder="Correo"
          error={errors.email}
        />
        <Input
          register={register}
          name="password"
          placeholder="Contraseña"
          error={errors.password}
          type="password"
        />
        <h6 className="text-xs h-2 font-semibold -mt-4 mb-4">
          {loginError}
        </h6>
        <Button text="Registrarse" loading={loading} />
      </form>
    </motion.div>
  )
}

export default SignUp
