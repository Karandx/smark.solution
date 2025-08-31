import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="glass-effect p-8 rounded-lg group hover:neon-glow transition-all duration-300 cursor-pointer"
    >
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-glow transition-all duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="text-sm text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-glow transition-colors duration-300"></span>
            {feature}
          </li>
        ))}
      </ul>
      
      <motion.div
        className="mt-6 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ x: 5 }}
      >
        Learn More →
      </motion.div>
    </motion.article>
  )
}

export default ServiceCard
