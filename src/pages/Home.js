
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Import images
import cover1 from "../assets/cover1.png"
import cover2 from "../assets/cover2.jpeg"
import cover3 from "../assets/cover3.jpg"
import cover4 from "../assets/cover4.png"

const CounterAnimation = ({ target }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = target / (duration / 16) // 60 FPS

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
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section with Slider */}
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
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Empowering Pakistan's Youth
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl mt-6"
            >
              Shaping the future through education and leadership
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Join Our Movement
            </motion.button>
          </div>
        </div>
      </section>

      {/* Impact Counter Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { count: 7000, label: "Students Empowered" },
              { count: 200, label: "Events Conducted" },
              { count: 70, label: "Partner Organizations" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  <CounterAnimation target={item.count} />+
                </div>
                <div className="text-xl text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12"
          >
            Upcoming Events
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Youth Summit 2025", date: "March 10, 2025", location: "Dubai, UAE", image: cover1 },
              { title: "Leadership Training", date: "April 5, 2025", location: "Lahore, Pakistan", image: cover2 },
              { title: "Tech Innovation Workshop", date: "May 15, 2025", location: "Karachi, Pakistan", image: cover3 },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700">{event.title}</h3>
                  <p className="text-gray-600 mt-2">{event.date}</p>
                  <p className="text-gray-600">{event.location}</p>
                  <button className="mt-4 text-green-500 hover:text-green-600 font-semibold transition duration-300 ease-in-out">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12"
          >
            What Our Participants Say
          </motion.h2>
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[
                  {
                    quote:
                      "An incredible experience that changed my perspective on leadership and empowered me to make a difference in my community!",
                    author: "Ayesha, Youth Leader",
                  },
                  {
                    quote:
                      "The best training program I've attended! It provided me with practical skills and a network of like-minded individuals committed to positive change.",
                    author: "Ali, Student",
                  },
                  {
                    quote:
                      "Teaching Pakistan's workshops opened my eyes to the potential we have as youth to shape our country's future. Truly inspiring!",
                    author: "Fatima, Entrepreneur",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                      <p className="text-gray-700 italic text-lg">
                        {testimonial.quote}
                      </p>
                      <h4 className="mt-4 font-semibold text-blue-600">
                        - {testimonial.author}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center mt-6">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-2 ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12"
          >
            Our Partners
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <img
                  src={`/assets/img${index}.jpeg`}
                  alt={`Partner ${index}`}
                  className="max-w-[150px] h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-xl"
          >
            Be a part of the change. Empower yourself and others through Teaching
            Pakistan.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default Home

