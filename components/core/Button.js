import { motion } from 'framer-motion'

const Button = (props) => {
  const {
    text
  } = props

  const underline = {
    underline: {
      width: text.length * 7.50
    }
  }

  return (
    <motion.button
      className="bg-gray-200 p-2 font-semibold flex flex-col items-center w-full"
      whileHover="underline"
    >
      {text}
      <motion.div
        className="bg-black h-1 rounded-xl"
        variants={underline}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  )
}

export default Button
