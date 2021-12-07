import Tooltip from 'components/animation/Tooltip'
import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'

const transitionDuration = 0.18

const transition = {
  duration: transitionDuration
}

const stroke = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  draw: {
    opacity: 1,
    pathLength: 1,
    transition: transition
  }
}

const strokeLogo = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  draw: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3, delay: 5.5
    }
  }
}

const container = {
  draw: {
    transition: {
      staggerChildren: transitionDuration
    }
  }
}

const containerName = {
  draw: {
    transition: {
      staggerChildren: transitionDuration,
      delayChildren: 3.7
    }
  }
}

const Information = () => {
  const router = useRouter()

  return (
    <div
      className="mt-4 w-full h-full flex flex-col justify-center items-center p-2"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 573.62 81.41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        stroke="#000000"
        fill="none"
        variants={container}
        initial="hidden"
        whileInView="draw"
        viewport={{ once: true }}
        className="w-full h-auto"
      >
        <motion.path
          variants={stroke}
          d="M8.3,61.41s-16-6,3-40,29-13,29-13c-1.55.63,9,16.32-7,38C15.19,70.93,7.73,61.3,8.3,61.41Z" />
        <motion.path
          variants={stroke}
          d="M52.3,29.41l5,21s0,10,7-2S75.36,32.53,75.36,32.53" />
        <motion.path
          variants={stroke}
          d="M84.59,38.3s9,5.57,14,2.23,7-11.14,3-14.48-16,11.14-16,11.14-5.94,12,0,18.82,14-2.13,14-2.13" />
        <motion.path
          variants={stroke}
          d="M118.3,31.41s2.81-6,3.9,0-5.9,24-5.9,24,15.76-27.29,19.06-26a4.2,4.2,0,0,1,2.94,4" />
        <motion.path
          variants={stroke}
          d="M149.91,39.16s9,5.56,14,2.22,7.12-11.27,3-14.47c-5.28-4.09-17,10.57-16,11.14-.32.79-6.42,15.1,0,18.82,6.71,3.85,14.55-2.49,15.36-3.46" />
        <motion.path
          variants={stroke}
          d="M189.3,28.41s-10,20-8,24,17-14,17-14,5-3,5,1v12s3,6,9-2" />
        <motion.path
          variants={stroke}
          d="M245.3,34.41s-7,16-18,17-2-16,2-19,7-8,11-5-6,41-6,41-6,19-16,0" />
        <motion.path
          variants={stroke}
          d="M255.91,53.56s7.39-14.15,7.39-22.15" />
        <motion.path
          variants={stroke}
          d="M267.3,13.41s-3,1-1,3,5,1,3-1" />
        <motion.path
          variants={stroke}
          d="M283.3,29.41s-2.89,20.28-4,21,25.17-28,23-10c-2.05,17-4,16-2,18" />
        <motion.path
          variants={stroke}
          d="M320.3,38.41c.22-.3,9.66,5.34,15,1s5.41-13.36-2.39-12.92-15.7,13.83-15.61,18.92c.08,4.2,2.72,20.12,18,7" />
        <motion.path
          variants={stroke}
          d="M352.3,38.41s10,11,15,1,.33-12.85-2.9-12.92c-3.49-.08-19.31,11.71-15.1,27.92,3.36,12.92,17.33-2.57,17.55-.85" />
        <motion.path
          variants={stroke}
          d="M389.3,27.41c-1.47-.26-8.73,26.28-9,29-.32,3.22,9.82-23.6,24-24" />
        <motion.path
          variants={stroke}
          d="M411.3,37.41a14.81,14.81,0,0,0,18,3c10.43-5.29,4.91-11,5-11,.46.44-9.92-5.95-17,9-7.31,15.45,3,19,3,19s7,3,12-7" />
        <motion.path
          variants={stroke}
          d="M467.3,59.41s-2-6.84.86-21.56c1.65-8.47,4.93-19.55,11.14-33.44" />
        <motion.path
          variants={stroke}
          d="M469.3,38.41s-11-14-19-1-4,17-4,17,4,5,12-3S469.3,38.41,469.3,38.41Z" />
        <motion.path
          variants={stroke}
          d="M525.3,3.41s-17,41-17,51" />
        <motion.path
          variants={stroke}
          d="M504.65,56s22.68,3.72,29.17-13.91-6.52-10.64-6.52-10.64S505.4,51.5,506.85,56" />
        <motion.path
          variants={stroke}
          d="M548.14,27.41s3.16,2,3.16,5S538.94,80.67,571.62,30L550.3,79.41" />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500.44 87.01"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        stroke="#000000"
        fill="none"
        variants={containerName}
        initial="hidden"
        whileInView="draw"
        viewport={{ once: true }}
        className="w-full h-auto mb-4 px-4 flex justify-center items-center"
      >
        <motion.path
          variants={stroke}
          d="M40,24.74s24-32-16-11-8,37-5,39,20,12,2,17-19-5-19-5" />
        <motion.path
          variants={stroke}
          d="M69.42,42.24S62,28.74,54,40.74s-12,17-11,20,13,2,20-8l7-10s-6,17,6,21" />
        <motion.path
          variants={stroke}
          d="M93,36.74s-3,21-7,26,20-15,20-15,7-8,7,1,1,12,1,12,1,4,2,4" />
        <motion.path
          variants={stroke}
          d="M146,21.74s-20,37-9.48,43,11.48-3,11.48-3" />
        <motion.path
          variants={stroke}
          d="M128,37.74s26.71-2.94,27.35-2" />
        <motion.path
          variants={stroke}
          d="M166,41.74s-6.16,18-4.58,23" />
        <motion.path
          variants={stroke}
          d="M170,19.74s-1,10,2,8-1.08-8-1.08-8" />
        <motion.path
          variants={stroke}
          d="M200,45.74s-3.58-16.94-13.29-1.47S177.39,60.42,179,62.74c2.43,3.52,19.69-10,21-15.19.84-3.34,1-1.81,1-1.81s-6,11-1,16,10-1,10-1" />
        <motion.path
          variants={stroke}
          d="M240,45.74s-18,21-21,6,24-19,22-12-9,49-20,45-7-5-7-5" />
        <motion.path
          variants={stroke}
          d="M271,38.74s9,7-3,20-16,3-16,3-1-12,7-19S271,38.74,271,38.74Z" />
        <motion.path
          variants={stroke}
          d="M307,73.74s21.15-58.74,23-60c1.47-1,4.75,12,4.32,30-.42,18.15,8.68,27,8.68,27a6.83,6.83,0,0,0,4-4c1-3,19-58.48,16-64.74" />
        <motion.path
          variants={stroke}
          d="M388,43.74s-1.1-15-13.55-1.5S367,62.74,367,62.74s5.38,7.13,15.19-6.93S389,45.74,389,45.74s-5.12,14.78.42,16.39S396,60.74,396,60.74" />
        <motion.path
          variants={stroke}
          d="M405,38.74s3,24,6,23,15-15.06,17-21" />
        <motion.path
          variants={stroke}
          d="M458,47.74s.84-18-12.58-5.5S436,62.74,436,62.74s9,3,16-7l7-10s-6,13.06-2,16,9,2.39,10-1.32" />
        <motion.path
          variants={stroke}
          d="M496,43.74s8-13-5-9-9.84,15.84-9.84,15.84,11.49,16.19-.34,15.68S472,61.77,472,61.77" />
      </motion.svg>
      <div className="flex justify-center items-center w-full">
        <Tooltip text="Github">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 421.09 411.17"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={14}
            stroke="#000000"
            fill="none"
            className="w-auto h-12 cursor-pointer"
            initial="hidden"
            whileInView="draw"
            viewport={{ once: true }}
            onClick={() => router.replace('https://github.com/TatoBig')}
          >
            <motion.path
              d="M204.09,399.15c113.07,1.58,205.53-90.66,205-200-.56-113.53-101.16-201.3-211-197C89.26,6.42-1.19,99.78,2.09,206.15c2.59,84.31,63.58,161.08,152,187,0,0,6-39,3-42s-27,4-43-9-25-33.51-25-33.51-4-10.49-20-16.49-1-9,5-9,23,8,31,15,16.69,22.81,24.85,23.91,10.15,5.09,27.15-1.91c0,0,4-21,8-19s6.53-9.53,1-7c-7.44,3.4-56.37-10.74-73-48-3.29-7.36-13-34.45-4-63s18-30,18-30-11-37-1-48c0,0,37,2,54,19,0,0,42.32-17.51,88.16.74,0,0,28.42-23.54,52.13-20.64,0,0,8.29,30.06,0,47.48,1,0,34.42,29.47,24.71,72.42-9.53,42.1-30.57,53.9-32,54,0,0-16,11.07-58,16,0,0,14.16,19.42,15.58,38.2s2.42,33,2.42,44.38"
              variants={strokeLogo}
            />
          </motion.svg>
        </Tooltip>
        <Tooltip text="Linkedin">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 213.04 212"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={8}
            stroke="#000000"
            fill="none"
            initial="hidden"
            whileInView="draw"
            viewport={{ once: true }}
            className="ml-4 w-auto h-12 cursor-pointer"
            onClick={() => router.replace('https://www.linkedin.com/in/santiago-navas-682757219/')}
          >
            <motion.path
              variants={strokeLogo}
              d="M203,210H11.46S2,210,2,195V10S1,2,9,2H203.85S211,2,211,9V202.16S211,210,203,210Z"
            />
            <motion.path
              variants={strokeLogo}
              d="M48,25a23.08,23.08,0,0,1,5.21.76C58.56,27.15,66,31,66,42c0,17-18,19-18,19S28.88,58.84,29.46,43.42,43,24,48,25Z"
            />
            <motion.path
              variants={strokeLogo}
              d="M29.45,88v89.42S28,183,34,183H61a4.28,4.28,0,0,0,5-4.65C66,173,67,88,67,88s1-5-5-5H34.49A5.06,5.06,0,0,0,29.45,88Z"
            />
            <motion.path
              variants={strokeLogo}
              d="M84,87v91.16s-.1,4.9,4.45,4.87S107,183,107,183s5,0,5-5V125.32S113,111,130,111s18,14,18,14v52s-2.58,6.06,4.71,6S180,183,180,183s5,1,5-4V114.87S175.81,83,150.43,83,112,92,112,92s2-9-5-9H88.88S84,83,84,87Z"
            />
          </motion.svg>
        </Tooltip>
      </div>
    </div>
  )
}

export default Information
