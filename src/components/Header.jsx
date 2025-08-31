import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <nav className="container mx-auto px-6 py-6" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="relative px-4 py-2 text-base font-medium text-white hover:text-gray-300 transition-all duration-300 group"
                  aria-label={`Navigate to ${item.name}`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button - Positioned absolutely */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-6 top-6 w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
              }}
              className="block w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-colors duration-200"
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                x: isMenuOpen ? 20 : 0,
              }}
              className="block w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-colors duration-200"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
              className="block w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-colors duration-200"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-1 flex flex-col items-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="block px-6 py-3 text-lg font-medium text-white hover:text-gray-300 transition-all duration-200 text-center"
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
