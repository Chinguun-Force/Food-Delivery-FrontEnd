'use client'
// import { motion, useTransform } from "motion/react"
import { useTime } from "motion/react"
import React from 'react'
import { motion } from "framer-motion"
import { Scene } from "./scene"
import { motion } from "framer-motion-3d"
const page = () => {
//   const time = useTime()
//   const rotate = useTransform(
//   time,
//   [0, 4000], // For every 4 seconds...
//   [0, 720], // ...rotate 360deg
//   { clamp: false }
// )
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

return (
  <motion.meshStandardMaterial
    initial="hidden"
    animate="visible"
    variants={variants}
  />
)
  // return (
  //   <div className="w-full h-screen bg-gray-700">
  //     {/* <motion.div className="w-64 h-64 bg-red-500 rounded-2xl" style={{ rotate }}>

  //     </motion.div> */}
  //     <motion.pointLight animate={{ x: 2 }} />
  //   </div>
  // )
}

export default page
