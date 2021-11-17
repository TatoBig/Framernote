import Loader from 'components/animation/Loader'
import { motion } from 'framer-motion'

const Button = (props) => {
  const {
    text,
    loading = false,
    onClick
  } = props

  const localClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const underline = {
    underline: {
      width: text.length * 7.50
    }
  }

  return (
    <motion.button
      className="bg-gray-200 p-2 font-semibold flex flex-col items-center w-full"
      whileHover="underline"
      onClick={() => localClick()}
    >
      <div className="flex">
        {text}
        {loading &&
          <div className="ml-4">
            <Loader />
          </div>
        }
      </div>
      <motion.div
        className="bg-black h-1 rounded-xl"
        variants={underline}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  )
}

export default Button
