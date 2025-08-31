import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    })
    
    setIsSubmitting(false)
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const services = [
    'Digital Marketing',
    'Software Development',
    'Cold Mailing Automation',
    'UPI Invoice & Expense Tracker',
    'Custom Solution'
  ]

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'contact@smarksolutions.com',
      href: 'mailto:contact@smarksolutions.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (555) 0123',
      href: 'tel:+15550123'
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'smarksolutions.com',
      href: 'https://smarksolutions.com'
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
    <section id="contact" className="min-h-screen py-20 snap-start flex items-center justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              Get In Touch
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-transparent focus:border-white focus:outline-none transition-colors peer"
                      placeholder="Your Name"
                    />
                    <label className="absolute left-4 -top-2.5 bg-black px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-white">
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-transparent focus:border-white focus:outline-none transition-colors peer"
                      placeholder="Email Address"
                    />
                    <label className="absolute left-4 -top-2.5 bg-black px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-white">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-transparent focus:border-white focus:outline-none transition-colors peer"
                    placeholder="Company Name"
                  />
                  <label className="absolute left-4 -top-2.5 bg-black px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-white">
                    Company Name (Optional)
                  </label>
                </div>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-gray-600 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="">Select a Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-transparent focus:border-white focus:outline-none transition-colors peer resize-none"
                    placeholder="Your Message"
                  />
                  <label className="absolute left-4 -top-2.5 bg-black px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-white">
                    Tell us about your project
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {info.icon}
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-lg">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Business Hours
                </h3>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  *Emergency support available 24/7 for existing clients
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
