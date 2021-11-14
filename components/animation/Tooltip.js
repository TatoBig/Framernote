import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Tooltip = (props) => {
  const {
    children,
    text
  } = props
  const [isVisible, setIsVisible] = useState()
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-7"
          >
            <h1 className="text-lg font-semibold"> {text} </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip
