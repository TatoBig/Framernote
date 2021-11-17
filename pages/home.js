import { Fragment, useEffect, useRef, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import { useDispatch, useSelector } from 'react-redux'
import AnimatedLogo from 'components/animation/AnimatedLogo'
import Headerhome from 'components/core/Headerhome'
import { logoutRedux } from 'store/login'
import Tooltip from 'components/animation/Tooltip'
import Taskcard from 'components/core/Taskcard'
import Modal from 'components/animation/Modal'
import Createtask from 'components/core/Createtask'
import Head from 'next/head'

const sidebar = {
  closed: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% 50%)`
  }),
  open: {
    clipPath: 'circle(0px at 50% 50%)',
    transition: {
      delay: 1.0,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const GET_USER_DATA = gql`
  query GetUserData($getUserDataId: ID!) {
    getUserData(id: $getUserDataId) {
      _id
      username
      tasks {
        createdAt
        updatedAt
        done
        description
        title
      }
      
      createdAt
      updatedAt
    }
  }
`

const home = () => {
  const router = useRouter()
  const [getUserData, { data, refetch }] = useLazyQuery(GET_USER_DATA)

  const [isVisible, setIsVisible] = useState(true)
  const [tasks, setTasks] = useState([])
  const [open, setOpen] = useState(false)
  const constraintsRef = useRef(null)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (data?.getUserData) {
      setTasks(data.getUserData.tasks)
    }
  }, [data])

  const {
    logged,
    username,
    id
  } = useSelector(state => state.login)

  useEffect(() => {
    if (!logged) {
      router.push('/')
    } else {
      getUserData({
        variables: {
          getUserDataId: id
        }
      })
    }
  }, [logged])

  const logout = () => {
    dispatch(logoutRedux({
      logged: false
    }))
  }

  return (
    <Fragment>
      <Head>
        <title>Framernote</title>
        <meta name="Framernote" content="A note app made with Framer" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <motion.div
        initial="closed"
        animate="open"
      >
        <motion.div className="absolute bg-gray-200 w-full h-full top-0 right-0 bottom-0 z-10" variants={sidebar} />
      </motion.div>
      <AnimatedLogo isVisible={isVisible} initial="open" />

      <div
        className="mx-32 mt-4"
        onClick={() => setOpen(false)}
      >
        <Headerhome delay={1.6} username={username} logout={logout} />

        <div className="mt-4 w-full h-auto flex flex-wrap" ref={constraintsRef}>
          {tasks.length > 0 && tasks.map((task, index) => (
            <Taskcard key={index} task={task} refetch={refetch} id={id} index={index} dragConstraints={constraintsRef} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-16 right-16 z-0 flex flex-col justify-center" >
        {/* <AnimatePresence>
          {open && (
            <Tooltip text="Crear" to="left">
              <motion.button
                className="bg-gray-200 shadow-md w-16 h-16 rounded-full"
                animate={{ scale: 1, y: -50 }}
                initial={{ scale: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ scale: 0, y: 0 }}
              >
                Test
              </motion.button>
            </Tooltip>
          )}
        </AnimatePresence> */}

        <Tooltip text="Nueva tarea" to="left">
          <motion.button
            className=" bg-gray-200 bg-transparent flex items-center w-16 h-16 justify-center rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
            onClick={() => setOpen(!open)}
          >
            <img src="./logo.png" className="w-10 h-10 m-1" />
          </motion.button>
        </Tooltip>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {open && <Modal modalOpen={open} handleClose={() => setOpen(false)}> <Createtask id={id} refetch={refetch} handleClose={() => setOpen(false)} /> </Modal>}
      </AnimatePresence>
    </Fragment>
  )
}

export default home
