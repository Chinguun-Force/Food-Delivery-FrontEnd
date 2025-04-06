import React from 'react'
import { motion, useTransform } from "framer-motion"
import { useTime } from "motion/react"


const Test1 = () => {
    const page = () => {
        const time = useTime()
        const rotate = useTransform(
        time,
        [0, 4000], // For every 4 seconds...
        [0, 720], // ...rotate 360deg
        { clamp: false }
      )
      const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
  return (
    <div className="w-full h-screen bg-gray-700">
      <motion.div className="w-64 h-64 bg-red-500 rounded-2xl" style={{ rotate }}>

      </motion.div>
      {/* <motion.pointLight animate={{ x: 2 }} /> */}
    </div>
  )
}}

export default Test1