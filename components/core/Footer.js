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
      className="md:w-full w-max p-2 pr-2 md:px-0 overflow-visible fixed bottom-0 bg-gray-200 bg-cover h-16 z-0 flex flex-row items-center justify-center space-x-4"
      animate="show"
      initial="hidden"
      variants={container}
      dragPropagation
      drag="x"
      dragConstraints={{ left: -140, right: 0 }}
      dragElastic={0}
    >
      <motion.div
        variants={item}
      >
        <Tooltip text="React">
          <object data="/react.svg" type="image/svg+xml" className="h-10 w-10 md:h-12 md:w-12 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Redux">
          <object data="/redux.svg" type="image/svg+xml" className="h-10 w-10 md:h-12 md:w-12 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="NextJS">
          <object data="/next.svg" type="image/svg+xml" className="h-10 w-10 md:h-12 md:w-12 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Tailwind">
          <object data="/tailwind.svg" type="image/svg+xml" className="h-10 w-10 md:h-14 md:w-14  mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Framer Motion">
          <object data="/motion.svg" className="md:w-11 md:h-11 h-9 w-9 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="NodeJS">
          <object data="/node.svg" type="image/svg+xml" className="h-10 w-10 md:h-12 md:w-12 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="GrapQL">
          <object data="/graphql.svg" type="image/svg+xml" className="h-10 w-10 md:h-12 md:w-12 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Apollo">
          <object data="/apollo.svg" type="image/svg+xml" className="h-10 w-10 md:h-12 md:w-12 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="Firebase Auth">
          <object data="/firebase.svg" type="image/svg+xml" className="h-10 w-10 md:h-12 md:w-12 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
      <motion.div
        variants={item}
      >
        <Tooltip text="MongoDB">
          <object data="/mongodb.svg" type="image/svg+xml" className="md:h-16 md:w-16 h-14 w-14 -ml-4 mix-blend-luminosity pointer-events-none" />
        </Tooltip>
      </motion.div>
    </motion.div>
  )
}

export default Footer
