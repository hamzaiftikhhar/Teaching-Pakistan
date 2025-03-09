"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1666ba] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Who We Are
          </motion.h1>
        </div>
      </section>

      {/* Brief History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#1666ba] mb-4">Our History</h2>
            <p className="text-gray-600">
              Founded in 1999, the School of Leadership and Diplomacy has been at the forefront of developing future
              leaders and diplomats. What began as a small institution with a vision has grown into a globally
              recognized center of excellence in leadership and diplomatic studies. Over the past two decades, we have
              expanded our programs, built international partnerships, and consistently adapted our curriculum to meet
              the evolving challenges of global leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#1666ba] mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower individuals with leadership skills and diplomatic acumen to foster peace and progress
                globally.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#1666ba] mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be a global hub for leadership and diplomatic excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-[#1666ba] mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "Maintaining the highest standards of ethical conduct and professional excellence",
                icon: "⭐",
              },
              {
                title: "Innovation",
                description: "Embracing new ideas and approaches to address global challenges",
                icon: "💡",
              },
              {
                title: "Collaboration",
                description: "Fostering partnerships and teamwork across cultures and borders",
                icon: "🤝",
              },
              {
                title: "Global Perspective",
                description: "Understanding and respecting diverse viewpoints and cultures",
                icon: "🌍",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#1666ba] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
