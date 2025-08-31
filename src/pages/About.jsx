import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.',
    },
    {
      title: 'Excellence',
      description: 'Quality is at the heart of everything we do, from code to customer service.',
    },
    {
      title: 'Growth',
      description: 'We believe in empowering our clients to achieve sustainable business growth.',
    },
    {
      title: 'Collaboration',
      description: 'Success comes from working together and understanding our clients\' unique needs.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="min-h-screen flex items-center py-20 snap-start">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-8 text-glow"
          >
            About Us
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto"
          >
            Smark Solutions is a forward-thinking startup specializing in digital marketing and 
            software development. We combine creativity with technology to help businesses 
            thrive in the digital landscape.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-lg hover:neon-glow transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 glass-effect p-8 rounded-lg max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-semibold mb-6 text-white">
              Our Mission
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To bridge the gap between innovative technology and business success by 
              delivering tailored solutions that drive growth, efficiency, and digital transformation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
