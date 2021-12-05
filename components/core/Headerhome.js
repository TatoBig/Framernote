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
      className="mx-4 md:mx-0 bg-gray-200 md:p-8 pt-8 px-4 pb-4 rounded-xl flex flex-col md:flex-row md:justify-between items-center shadow-md"
      initial="inherit"
      animate="color"
      variants={colors}
      transition={{ duration: 1, delay: delay }}
    >
      <div className="md:flex hidden text-2xl md:flex-col order-2 md:order-1">
        <div className="font-semibold mr-2 md:mr-0">
          Bienvenido
        </div>
        <div className="font-thin">
          {username}
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="flex justify-center text-5xl md:text-6xl items-center">
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
        className="md:block hidden order-3 md:w-auto px-2 py-0.5 rounded-xl text-xl bg-gray-300 hover:bg-gray-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Salir
      </motion.button>
      <div className="order-1 px-2 w-full mt-2 md:hidden flex justify-between items-center">
        <motion.button
          onClick={() => logout()}
          className="order-3 md:w-auto px-2 py-0.5 rounded-xl text-xl bg-gray-300 hover:bg-gray-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Salir
        </motion.button>
        <div className="flex text-xl md:flex-col order-2 md:order-1">
          <div className="font-semibold mr-2 md:mr-0">
            Bienvenido
          </div>
          <div className="font-thin">
            {username}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Headerhome
