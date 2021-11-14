import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from 'components/controls/Button'
import Input from 'components/controls/Input'

const schema = yup.object().shape({
  username: yup.string().required('Debe ingresar un nombre de usuario'),
  password: yup.string().required('Debe ingresar una contraseña'),
  repeat: yup.string().required('Se debe repetir la contraseña')
})

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(schema)
  })

  const repeat = useWatch({
    name: 'repeat',
    control: control
  })

  const [customError, setCustomError] = useState(null)

  useEffect(() => {
    setCustomError('')
  }, [repeat])

  const onSubmit = (data) => {
    if (data.repeat !== data.password) {
      setCustomError('Las contraseñas no coinciden')
    } else {
      console.log(data)
    }
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
        <Input
          register={register}
          name="repeat"
          placeholder="Repetir contraseña"
          type="password"
          error={errors.repeat}
          customError={customError}
        />
        <Button text="Registrarse" />
      </form>
    </motion.div>
  )
}

export default SignUp
