import { AnimatePresence, motion } from 'framer-motion'

const lineAnimation = {
  open: {
    width: 330
  },
  closed: {
    width: 1
  }
}

const framerAnimation = {
  open: {
    opacity: 1,
    y: 0
  },
  closed: {
    opacity: 0,
    y: -30
  }
}

const noteAnimation = {
  open: {
    opacity: 1,
    y: 0
  },
  closed: {
    opacity: 0,
    y: -30
  }
}

const logoAnimation = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
}

const AnimatedLogo = (props) => {
  const {
    isVisible,
    initial,
    animate
  } = props

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={initial}
          animate={animate}
          exit="closed"
          transition={{ duration: 1.5 }}
          variants={logoAnimation}
          className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >

          <div className="flex justify-center text-6xl items-center">
            <motion.div
              transition={{ duration: 2 }}
              className="font-semibold"
              variants={framerAnimation}
            >
              Framer
            </motion.div>
            <motion.div
              className="font-thin"
              variants={noteAnimation}
              transition={{ duration: 2 }}
            >
              note
            </motion.div>
            <motion.div
              variants={logoAnimation}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <img src="./logo.png" className="w-8 h-full" />
            </motion.div>
          </div>
          <div className="mt-2 flex justify-center">
            <motion.div
              className="bg-black h-1.5 rounded-xl w-64"
              variants={lineAnimation}
              transition={{ duration: 1, delay: 1.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnimatedLogo
