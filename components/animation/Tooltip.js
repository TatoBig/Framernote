import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Tooltip = (props) => {
  const {
    children,
    text,
    to = 'top'
  } = props
  const [isVisible, setIsVisible] = useState()

  const getSide = (to) => {
    switch (to) {
      case 'top':
        return '-top-7'
      case 'left':
        return '-left-24 top-4'
      default:
    }
  }

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="flex flex-col-reverse items-center"
    >

      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute ${getSide(to)} bg-card px-1 rounded-t-lg`}
          >
            <h1 className="text-lg font-semibold"> {text} </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip
