"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useAnimateOnce } from "../components/ui/animate-once"

// Import images
import cover1 from "../assets/cover1.jpg"
import cover2 from "../assets/cover2.jpg"
import cover3 from "../assets/cover3.jpg"
import cover4 from "../assets/cover4.jpg"
import char1 from "../assets/char1.jpg"
import char2 from "../assets/char2.jpg"
import char3 from "../assets/char3.jpg"
import char4 from "../assets/char4.jpg"

const CounterAnimation = ({ target }) => {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useAnimateOnce()

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)

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
  }, [isVisible, target])

  return <span ref={ref}>{count}</span>
}

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroSlides = [cover1, cover2, cover3, cover4]
  const heroAnimation = useAnimateOnce()
  const highlightsAnimation = useAnimateOnce()
  const impactAnimation = useAnimateOnce()
  const facultyAnimation = useAnimateOnce()
  const ctaAnimation = useAnimateOnce()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
        <div className="absolute inset-0 bg-[#1666ba] bg-opacity-60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1
              ref={heroAnimation.ref}
              initial={{ y: -50, opacity: 0 }}
              animate={heroAnimation.controls}
              variants={{
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Empowering Tomorrow's Leaders and Diplomats
            </motion.h1>
            <motion.p
              ref={heroAnimation.ref}
              initial={{ y: 50, opacity: 0 }}
              animate={heroAnimation.controls}
              variants={{
                visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
              }}
              className="text-xl md:text-2xl mb-8"
            >
              Discover transformative programs that shape global leaders and foster diplomacy for a connected world.
            </motion.p>
            <motion.div
              ref={heroAnimation.ref}
              initial={{ y: 50, opacity: 0 }}
              animate={heroAnimation.controls}
              variants={{
                visible: { y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.8 } },
              }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/programs"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
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

      {/* Key Highlights Section */}
      <section className="py-20 bg-gray-50" ref={highlightsAnimation.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={highlightsAnimation.controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
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
                animate={highlightsAnimation.controls}
                variants={{
                  visible: { y: 0, opacity: 1, transition: { delay: index * 0.1, duration: 0.8 } },
                }}
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

      {/* Impact Counter Section */}
      <section className="py-20 bg-[#1666ba] text-white" ref={impactAnimation.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={impactAnimation.controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Impact
          </motion.h2>
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
                animate={impactAnimation.controls}
                variants={{
                  visible: { y: 0, opacity: 1, transition: { delay: index * 0.1, duration: 0.8 } },
                }}
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

      {/* Faculty Section */}
      <section className="py-20 bg-white" ref={facultyAnimation.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={facultyAnimation.controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1666ba] mb-12"
          >
            Meet Our Experts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Dr. Sarah Khan", role: "Expert in Conflict Resolution", image: char1 },
              { name: "Mr. Adeel Ahmed", role: "Strategic Leadership Specialist", image: char2 },
              { name: "Dr. Maria Rodriguez", role: "International Relations Expert", image: char3 },
              { name: "Prof. James Wilson", role: "Policy Development Lead", image: char4 },
            ].map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={facultyAnimation.controls}
                variants={{
                  visible: { y: 0, opacity: 1, transition: { delay: index * 0.1, duration: 0.8 } },
                }}
                className="text-center"
              >
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-[#1666ba]">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1666ba] text-white" ref={ctaAnimation.ref}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={ctaAnimation.controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={ctaAnimation.controls}
            variants={{
              visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
            }}
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

