import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center bg-opacity-50"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
