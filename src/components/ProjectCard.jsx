import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)

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
      className="relative h-80 perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden glass-effect rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="text-4xl mb-4">{project.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {project.shortDescription}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-xs text-gray-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden glass-effect rounded-lg p-6 flex flex-col justify-between neon-glow"
             style={{ transform: 'rotateY(180deg)' }}>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div className="space-y-2 mb-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex-1 px-4 py-2 bg-white text-black text-center rounded font-medium text-sm hover:bg-gray-200 transition-colors"
                aria-label={`View ${project.title} demo`}
              >
                Live Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex-1 px-4 py-2 border border-white text-white text-center rounded font-medium text-sm hover:bg-white hover:text-black transition-colors"
                aria-label={`View ${project.title} source code`}
              >
                Source
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

export default ProjectCard
