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
import char4 from "../assets/char4.jpg"

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
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12"
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
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Counter Section */}
      <section className="py-20 bg-blue-800 text-white">
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

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12"
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
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-blue-800">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
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
























// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"

// // Import images
// import cover1 from "../assets/cover1.jpg"
// import cover2 from "../assets/cover2.jpg"
// import cover3 from "../assets/cover3.jpg"
// import cover4 from "../assets/cover4.jpg"
// import char1 from "../assets/char1.jpg"
// import char2 from "../assets/char2.jpg"
// import char3 from "../assets/char3.jpg"
// import char4 from "../assets/char4.jpg"

// const CounterAnimation = ({ target }) => {
//   const [count, setCount] = useState(Math.floor(target * 0.1)) // Start from 10% of the target
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   useEffect(() => {
//     if (inView) {
//       let start = Math.floor(target * 0.1)
//       const duration = 2000 // 2 seconds
//       const increment = (target - start) / (duration / 16) // 60 FPS

//       const timer = setInterval(() => {
//         start += increment
//         if (start >= target) {
//           setCount(target)
//           clearInterval(timer)
//         } else {
//           setCount(Math.floor(start))
//         }
//       }, 16)

//       return () => clearInterval(timer)
//     }
//   }, [inView, target])

//   return <span ref={ref}>{count}</span>
// }

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const heroSlides = [cover1, cover2, cover3, cover4]

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [heroSlides.length])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % 3)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="bg-white text-gray-800">
//       <Navbar />

//       {/* Hero Section with Slider */}
//       <section className="relative h-screen overflow-hidden">
//         {heroSlides.map((slide, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             <img
//               src={slide || "/placeholder.svg"}
//               alt={`Hero slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         ))}
//         <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
//         <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
//           <div className="max-w-4xl mx-auto px-4">
//             <motion.h1
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-4xl md:text-6xl font-bold leading-tight"
//             >
//               Empowering Pakistan's Youth
//             </motion.h1>
//             <motion.p
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="text-xl mt-6"
//             >
//               Shaping the future through education and leadership
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
//             >
//               Join Our Movement
//             </motion.button>
//           </div>
//         </div>
//       </section>

//       {/* Impact Counter Section */}
//       <section className="py-20 bg-blue-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12">Our Impact</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { count: 7000, label: "Students Empowered" },
//               { count: 200, label: "Events Conducted" },
//               { count: 70, label: "Partner Organizations" },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="text-center"
//               >
//                 <div className="text-5xl font-bold text-blue-600 mb-2">
//                   <CounterAnimation target={item.count} />+
//                 </div>
//                 <div className="text-xl text-gray-600">{item.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Events Section */}
//       <section className="bg-blue-50 py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12"
//           >
//             Upcoming Events
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: "Youth Summit 2025", date: "March 10, 2025", location: "Dubai, UAE", image: cover1 },
//               { title: "Leadership Training", date: "April 5, 2025", location: "Lahore, Pakistan", image: cover2 },
//               { title: "Tech Innovation Workshop", date: "May 15, 2025", location: "Karachi, Pakistan", image: cover3 },
//             ].map((event, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden"
//               >
//                 <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-blue-700">{event.title}</h3>
//                   <p className="text-gray-600 mt-2">{event.date}</p>
//                   <p className="text-gray-600">{event.location}</p>
//                   <button className="mt-4 text-green-500 hover:text-green-600 font-semibold transition duration-300 ease-in-out">
//                     Learn More →
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Slider */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12"
//           >
//             What Our Participants Say
//           </motion.h2>
//           <div className="relative">
//             <div className="overflow-hidden">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {[
//                   {
//                     quote:
//                       "An incredible experience that changed my perspective on leadership and empowered me to make a difference in my community!",
//                     author: "Ayesha, Youth Leader",
//                   },
//                   {
//                     quote:
//                       "The best training program I've attended! It provided me with practical skills and a network of like-minded individuals committed to positive change.",
//                     author: "Ali, Student",
//                   },
//                   {
//                     quote:
//                       "Teaching Pakistan's workshops opened my eyes to the potential we have as youth to shape our country's future. Truly inspiring!",
//                     author: "Fatima, Entrepreneur",
//                   },
//                 ].map((testimonial, index) => (
//                   <div key={index} className="w-full flex-shrink-0 px-4">
//                     <div className="bg-blue-50 p-6 rounded-lg shadow-md">
//                       <p className="text-gray-700 italic text-lg">{testimonial.quote}</p>
//                       <h4 className="mt-4 font-semibold text-blue-600">- {testimonial.author}</h4>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//             <div className="flex justify-center mt-6">
//               {[0, 1, 2].map((index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full mx-2 ${currentSlide === index ? "bg-blue-600" : "bg-gray-300"}`}
//                   onClick={() => setCurrentSlide(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partners Section */}
//       <section className="bg-gray-50 py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12"
//           >
//             Our Partners
//           </motion.h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[char1, char2, char3, char4].map((partnerImg, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 className="flex items-center justify-center"
//               >
//                 <img
//                   src={partnerImg || "/placeholder.svg"}
//                   alt={`Partner ${index + 1}`}
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Home

