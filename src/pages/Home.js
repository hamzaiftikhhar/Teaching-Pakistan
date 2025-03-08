"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"

// Import images
import cover1 from "../assets/cover1.jpg"
import cover2 from "../assets/cover2.jpg"
import cover3 from "../assets/cover3.jpg"
import cover4 from "../assets/cover4.jpg"
import char1 from "../assets/char1.jpg"
import char2 from "../assets/char2.jpg"
import char3 from "../assets/char3.jpg"

const CounterAnimation = ({ target }) => {
  const [count, setCount] = useState(Math.floor(target * 0.1))
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = Math.floor(target * 0.1)
      const duration = 2000
      const increment = (target - start) / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, target])

  return <span ref={ref}>{count}</span>
}

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
        <div className="absolute inset-0 bg-[#1666ba] bg-opacity-70"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Empowering Tomorrow's Leaders and Diplomats
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8"
            >
              Discover transformative programs that shape global leaders and foster diplomacy for a connected world.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/programs"
                className="bg-[#1666ba] hover:bg-[#1254a1] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 border-2 border-white"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
              >
                Join Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#1666ba] mb-6">
              Welcome to the School of Leadership and Diplomacy
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Where we nurture visionary leaders and skilled diplomats prepared to navigate global challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/about"
                className="bg-[#1666ba] hover:bg-[#1254a1] text-white px-6 py-2 rounded-full text-base font-medium transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1666ba] mb-12"
          >
            Key Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-[#1666ba] mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Counter Section */}
      <section className="py-20 bg-[#1666ba] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { count: 1000, label: "Alumni Worldwide" },
              { count: 50, label: "Partner Institutions" },
              { count: 100, label: "Expert Faculty" },
              { count: 25, label: "Years of Excellence" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">
                  <CounterAnimation target={item.count} />+
                </div>
                <div className="text-xl">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1666ba] mb-12"
          >
            What Our Students Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This institution doesn't just teach diplomacy—it inspires action.",
                name: "Sarah Ahmed",
                role: "Graduate, Class of 2023",
                image: char1,
              },
              {
                quote: "The leadership skills I gained here have transformed my career trajectory.",
                name: "Michael Chen",
                role: "International Relations Specialist",
                image: char2,
              },
              {
                quote:
                  "The global perspective I developed at this school is invaluable in today's interconnected world.",
                name: "Aisha Patel",
                role: "Diplomatic Attaché",
                image: char3,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1666ba]">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1666ba] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl mb-8"
          >
            Join us in shaping the future of global leadership and diplomacy.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
          >
            Apply Now
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Home

