import Tooltip from 'components/animation/Tooltip'
import Header from 'components/core/Header'
import SignIn from 'components/signIn/SignIn'
import SignUp from 'components/signIn/SignUp'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { Fragment } from 'react'

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

export default function Home () {
  return (
    <Fragment>
      <div className="mx-32 mt-4">
        <Head>
          <title>Framernote</title>
          <meta name="Framernote" content="A note app made with Framer" />
          <link rel="icon" href="/icon.ico" />
        </Head>

        <Header />

        <div
          className="flex flex-row mt-2 justify-around"
        >
          <div className="flex flex-col w-1/3 mt-2">
            <SignIn />
            <SignUp />
          </div>

          <img src="./notes.gif" className="rounded" />
        </div>
      </div>

      <motion.div
        className="w-full absolute bottom-0 bg-gray-200 bg-cover h-16 z-0 flex flex-row items-center justify-center space-x-4"
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
          <Tooltip text="MongoDB">
            <object data="/mongodb.svg" type="image/svg+xml" className="h-16 w-16 mix-blend-luminosity" />
          </Tooltip>
        </motion.div>
      </motion.div>

    </Fragment>
  )
}
