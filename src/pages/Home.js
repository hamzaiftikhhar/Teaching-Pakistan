"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// Import images
import cover1 from "../assets/cover1.jpg"
import cover2 from "../assets/cover2.jpg"
import cover3 from "../assets/cover3.jpg"
import cover4 from "../assets/cover4.jpg"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroSlides = [cover1, cover2, cover3, cover4]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="bg-white">
      {/* Hero Section with Headline and Subheadline */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slide || "/placeholder.svg"}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[#1666ba]/70"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-8"
            >
              Empowering Tomorrow's Leaders and Diplomats
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Discover transformative programs that shape global leaders and foster diplomacy for a connected world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-lg shadow-lg"
          >
            <p className="text-xl text-gray-700 mb-8 text-center">
              Welcome to the School of Leadership and Diplomacy, where we nurture visionary leaders and skilled
              diplomats prepared to navigate global challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/programs"
                className="bg-[#1666ba] hover:bg-[#1254a1] text-white px-6 py-3 rounded-full text-lg font-medium transition-colors duration-200 text-center"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors duration-200 text-center"
              >
                Join Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-[#1666ba] mb-12"
          >
            Key Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "World-Class Faculty",
                description: "Learn from experienced professionals and academics",
                icon: "👨‍🏫",
              },
              {
                title: "International Exchange Programs",
                description: "Gain global exposure through our partner institutions",
                icon: "🌍",
              },
              {
                title: "Real-World Case Studies and Simulations",
                description: "Apply knowledge through practical scenarios",
                icon: "📊",
              },
              {
                title: "Comprehensive Leadership Training",
                description: "Develop essential skills for global leadership",
                icon: "🎯",
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-[#1666ba] mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold text-[#1666ba] mb-8">Testimonials</h2>
            <p className="text-xl text-gray-700 italic mb-6">
              "This institution doesn't just teach diplomacy—it inspires action."
            </p>
            <p className="text-gray-500">- Sarah Ahmed, Graduate</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

