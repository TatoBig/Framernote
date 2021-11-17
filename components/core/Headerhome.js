import { motion } from 'framer-motion'

const Headerhome = ({ delay = 1.1, username, logout }) => {
  const list = {
    expand: {
      width: 330
    },
    fold: {
      width: 1
    }
  }

  const colors = {
    inherit: {
      background: '#FFFFFF'
    },
    color: {
      background: '#EEEEEE'
    }
  }

  return (
    <motion.div
      className="bg-gray-200 p-8 rounded-xl flex justify-between items-center shadow-md"
      initial="inherit"
      animate="color"
      variants={colors}
      transition={{ duration: 1, delay: delay }}
    >
      <div className="text-2xl flex-col ">
        <div className="font-semibold">
          Bienvenido
        </div>
        <div className="font-thin">
          {username}
        </div>
      </div>
      <div>
        <div className="flex justify-center text-6xl items-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 2, delay: delay - 1.1 }}
            className="font-semibold"
          >
            Framer
          </motion.div>
          <motion.div
            className="font-thin"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 2, delay: delay - 1.1 }}
          >
            note
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: delay }}
          >
            <img src="./logo.png" className="w-8 h-full" />
          </motion.div>
        </div>
        <div className="mt-2 flex justify-center">
          <motion.div
            className="bg-black h-1.5 rounded-xl w-64"
            initial="fold"
            animate="expand"
            variants={list}
            transition={{ duration: 1, delay: delay }}
          />
        </div>
      </div>
      <motion.button
        onClick={() => logout()}
        className="px-2 py-0.5 rounded-xl text-xl hover:bg-gray-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Salir
      </motion.button>
    </motion.div>
  )
}

export default Headerhome
