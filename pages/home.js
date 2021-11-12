import { Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedLogo from 'components/core/AnimatedLogo'

const sidebar = {
  closed: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% 50%)`
  }),
  open: {
    clipPath: 'circle(0px at 50% 50%)',
    transition: {
      delay: 2.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const home = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
    }, 1000)
  }, [])

  return (
    <Fragment>
      <motion.div
        initial="closed"
        animate="open"
      >
        <motion.div className="absolute bg-gray-200 w-full h-full top-0 right-0 bottom-0 z-0" variants={sidebar} />
      </motion.div>
      <AnimatedLogo isVisible={isVisible} initial="open" />
      <div className="text-8xl">
        Bienvenido
      </div>
    </Fragment>
  )
}

export default home
