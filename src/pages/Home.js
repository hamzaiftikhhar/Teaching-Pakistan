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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1666ba]/80 to-[#1666ba]/60"></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-6 inline-block"
            >
              <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
              <span className="text-xl uppercase tracking-wider font-light">School of Leadership and Diplomacy</span>
              <div className="h-1 w-20 bg-white mx-auto mt-6"></div>
            </motion.div>

            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
            >
              Empowering Tomorrow's Leaders and Diplomats
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light"
            >
              Discover transformative programs that shape global leaders and foster diplomacy for a connected world.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link
                to="/programs"
                className="bg-[#1666ba] border-2 border-white hover:bg-[#1254a1] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Banner */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 rounded-xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1666ba]"></div>
            <div className="absolute top-0 right-0 w-2 h-full bg-green-500"></div>

            <h2 className="text-3xl font-bold text-[#1666ba] mb-6 text-center">
              Welcome to the School of Leadership and Diplomacy
            </h2>

            <p className="text-xl text-gray-700 mb-10 text-center max-w-4xl mx-auto leading-relaxed">
              Where we nurture visionary leaders and skilled diplomats prepared to navigate global challenges.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/programs"
                className="bg-[#1666ba] hover:bg-[#1254a1] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg text-center"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg text-center"
              >
                Join Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#1666ba] font-semibold text-lg uppercase tracking-wider">What Sets Us Apart</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Key Highlights</h2>
            <div className="h-1 w-20 bg-[#1666ba] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "World-Class Faculty",
                description: "Learn from experienced professionals and academics",
                icon: "👨‍🏫",
              },
              {
                title: "International Exchange",
                description: "Gain global exposure through our partner institutions",
                icon: "🌍",
              },
              {
                title: "Real-World Cases",
                description: "Practice with simulations and case studies",
                icon: "📊",
              },
              {
                title: "Leadership Training",
                description: "Develop essential skills for global leadership",
                icon: "🎯",
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-[#1666ba]"
              >
                <div className="text-5xl mb-6 mx-auto bg-[#1666ba]/10 w-20 h-20 flex items-center justify-center rounded-full">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1666ba] mb-4">{highlight.title}</h3>
                <p className="text-gray-600 text-lg">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1666ba] p-16 rounded-xl shadow-2xl text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#1254a1] opacity-50 rounded-r-full"></div>
            <div className="relative z-10">
              <svg
                className="w-16 h-16 text-white/30 mx-auto mb-8"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-2xl md:text-3xl font-light italic mb-8 max-w-3xl mx-auto leading-relaxed">
                "This institution doesn't just teach diplomacy—it inspires action."
              </p>
              <div className="h-1 w-20 bg-white/50 mx-auto mb-6"></div>
              <p className="text-xl font-semibold">Sarah Ahmed</p>
              <p className="text-white/70">Graduate, Class of 2023</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

