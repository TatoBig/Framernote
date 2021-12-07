import { AnimatePresence, motion } from 'framer-motion'
import Backdrop from './Backdrop'

const drop = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <AnimatePresence>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="h-auto w-64 m-auto p-8 rounded-lg flex items-center flex-col bg-white"
          variants={drop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </Backdrop>
  )
}

export default Modal
