import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that drive traffic, engagement, and conversions across all platforms.',
      features: [
        'Social Media Marketing',
        'SEO Optimization',
        'Content Strategy',
        'PPC Advertising',
        'Analytics & Reporting'
      ]
    },
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies to streamline your business operations.',
      features: [
        'Web Applications',
        'Mobile App Development',
        'API Development',
        'Database Design',
        'Cloud Integration'
      ]
    },
    {
      icon: '📧',
      title: 'Cold Mailing Automation',
      description: 'Intelligent cold email campaigns that generate leads and build meaningful business relationships.',
      features: [
        'Email Sequence Automation',
        'Lead Generation',
        'Personalization Engine',
        'Performance Analytics',
        'CRM Integration'
      ]
    },
    {
      icon: '💰',
      title: 'UPI Invoice & Expense Tracker',
      description: 'Smart financial management tools that simplify invoicing and expense tracking for businesses.',
      features: [
        'UPI Payment Integration',
        'Automated Invoicing',
        'Expense Categorization',
        'Financial Reporting',
        'Tax Compliance'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const titleVariants = {
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
    <section id="services" className="min-h-screen py-20 snap-start flex items-center justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.div variants={titleVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to accelerate your business growth and digital transformation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full"
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
              />
            ))}
          </motion.div>

          <motion.div
            variants={titleVariants}
            className="mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 text-lg"
            >
              Get Custom Quote
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
