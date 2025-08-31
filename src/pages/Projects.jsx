import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      icon: '📧',
      title: 'ColdMail Pro',
      shortDescription: 'AI-powered cold email automation platform',
      fullDescription: 'A comprehensive cold email automation tool that uses AI to personalize messages, track engagement, and optimize send times for maximum response rates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Redis'],
      features: [
        'AI-powered personalization',
        'Advanced analytics dashboard',
        'CRM integration',
        'A/B testing capabilities'
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      icon: '💰',
      title: 'InvoiceTracker UPI',
      shortDescription: 'Smart invoicing with UPI integration',
      fullDescription: 'Modern invoicing solution with seamless UPI payment integration, expense tracking, and automated financial reporting for small businesses.',
      technologies: ['React Native', 'Firebase', 'UPI SDK', 'Chart.js'],
      features: [
        'UPI payment gateway',
        'Automated invoice generation',
        'Expense categorization',
        'Tax compliance reports'
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      icon: '🛍️',
      title: 'E-Commerce Analytics',
      shortDescription: 'Advanced analytics for online stores',
      fullDescription: 'Comprehensive analytics platform for e-commerce businesses to track sales, customer behavior, and marketing performance across multiple channels.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js', 'Docker'],
      features: [
        'Real-time sales tracking',
        'Customer behavior analysis',
        'Inventory management',
        'Marketing ROI calculator'
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      icon: '🎯',
      title: 'Lead Generation Bot',
      shortDescription: 'Automated lead qualification system',
      fullDescription: 'Intelligent chatbot that qualifies leads, schedules meetings, and integrates with CRM systems to streamline the sales process.',
      technologies: ['Node.js', 'TensorFlow', 'MySQL', 'Webhooks API'],
      features: [
        'Natural language processing',
        'Lead scoring algorithm',
        'Calendar integration',
        'Multi-platform deployment'
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      icon: '📊',
      title: 'Social Media Dashboard',
      shortDescription: 'Unified social media management',
      fullDescription: 'All-in-one dashboard for managing multiple social media accounts, scheduling posts, and analyzing engagement metrics.',
      technologies: ['Angular', 'Express.js', 'Redis', 'Social APIs'],
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Engagement analytics',
        'Competitor analysis'
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      icon: '🤖',
      title: 'AI Content Generator',
      shortDescription: 'AI-powered content creation tool',
      fullDescription: 'Advanced content generation platform that creates SEO-optimized blog posts, social media content, and marketing copy using artificial intelligence.',
      technologies: ['React', 'OpenAI GPT', 'AWS Lambda', 'Stripe'],
      features: [
        'SEO-optimized content',
        'Multiple content types',
        'Plagiarism detection',
        'Brand voice training'
      ],
      demoUrl: '#',
      githubUrl: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="min-h-screen py-20 snap-start flex items-center justify-center">
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
              Our Projects
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions we've built to solve real-world business challenges and drive digital transformation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
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
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-lg"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
