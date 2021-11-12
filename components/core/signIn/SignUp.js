import { motion } from 'framer-motion'
import Button from 'components/core/Button'
import Input from 'components/core/SimpleInput'

const SignUp = () => {
  return (
    <motion.div
      className="p-8 bg-card  mr-8 rounded-xl mt-4 flex flex-col w-full"
      initial={{ borderWidth: '8px', borderColor: '#EEEEEE' }}
      animate={{ borderWidth: '8px', borderColor: '#2B2B33' }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="font-normal text-xl flex flex-row mb-4">
        Registrarse
      </div>
      {/* <Input placeholder="Usuario" />
      <Input placeholder="Contraseña" type="password" />
      <Input placeholder="Repetir contraseña" type="password" /> */}
      <Button text="Registrarse" type="submit" />
    </motion.div>
  )
}

export default SignUp
