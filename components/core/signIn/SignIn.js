import { motion, useCycle } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from 'components/core/Button'
import Input from 'components/core/Input'
import { useRouter } from 'next/dist/client/router'
import AnimatedLogo from '../AnimatedLogo'
import { useState } from 'react'

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

const schema = yup.object().shape({
  username: yup.string().required('Debe ingresar un nombre de usuario'),
  password: yup.string().required('Debe ingresar una contraseña')
})

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const router = useRouter()

  const [isOpen, toggleOpen] = useCycle(false, true)
  const [isVisible, setIsVisible] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    toggleOpen()
    setIsVisible(true)
    setTimeout(() => {
      router.push('/home')
    }, 2000)
  }

  return (
    <motion.div
      className="p-8 bg-card  mr-8 rounded-xl mt-4 flex flex-col w-full"
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
        <Button text="Iniciar Sesión" />
      </form>

      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div className="absolute bg-gray-200 w-full h-full top-0 right-0 bottom-0 z-10" variants={sidebar} />
      </motion.div>

      <AnimatedLogo isVisible={isVisible} initial="closed" animate="open" />

    </motion.div>
  )
}

export default SignIn
