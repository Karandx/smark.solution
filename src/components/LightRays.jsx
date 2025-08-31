import React from 'react'
import { motion } from 'framer-motion'

const LightRays = () => {
  const rays = Array.from({ length: 5 }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {rays.map((ray, index) => (
        <motion.div
          key={ray}
          className="absolute h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: 0,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
          animate={{
            x: ['0vw', '100vw'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: index * 1.5,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Additional animated rays with different patterns */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`diagonal-${i}`}
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"
          style={{
            top: `${20 + i * 30}%`,
            left: 0,
            transform: `rotate(${-45 + i * 15}deg)`,
          }}
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default LightRays
