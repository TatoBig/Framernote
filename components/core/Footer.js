import Tooltip from 'components/animation/Tooltip'
import { motion } from 'framer-motion'
import React from 'react'

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
}

const Footer = () => {
  return (
    <motion.div
      className="w-full fixed bottom-0 bg-gray-200 bg-cover h-16 z-0 flex flex-row items-center justify-center space-x-4"
      animate="show"
      initial="hidden"
      variants={container}
    >
      <motion.div
        variants={item}
      >
        <Tooltip text="React">
          <object data="/react.svg" type="image/svg+xml" className="h-12 w-12 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Redux">
          <object data="/redux.svg" type="image/svg+xml" className="h-12 w-12 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="NextJS">
          <object data="/next.svg" type="image/svg+xml" className="h-12 w-12 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Tailwind">
          <object data="/tailwind.svg" type="image/svg+xml" className="h-14 w-14  mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Framer Motion">
          <img src="./motion.png" className="w-11 h-11 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="NodeJS">
          <object data="/node.svg" type="image/svg+xml" className="h-12 w-12 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="GrapQL">
          <object data="/graphql.svg" type="image/svg+xml" className="h-12 w-12 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Apollo">
          <object data="/apollo.svg" type="image/svg+xml" className="h-12 w-12 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Firebase Auth">
          <object data="/firebase.svg" type="image/svg+xml" className="h-12 w-12 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="MongoDB">
          <object data="/mongodb.svg" type="image/svg+xml" className="h-16 w-16 -ml-4 mix-blend-luminosity" />
        </Tooltip>
      </motion.div>
    </motion.div>
  )
}

export default Footer
