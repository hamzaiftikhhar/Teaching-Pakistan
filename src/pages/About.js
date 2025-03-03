"use client"
import { motion } from "framer-motion"
import campusImage from "../assets/campus.jpg"

const About = () => {
  return (
    <div className="bg-white">
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
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Shaping the future of global leadership and diplomacy through excellence in education
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#1666ba] mb-6">Our History</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1999, the School of Leadership and Diplomacy has been at the forefront of developing future
                leaders and diplomats. What began as a small institution with a vision has grown into a globally
                recognized center of excellence in leadership and diplomatic studies.
              </p>
              <p className="text-gray-600">
                Over the past two decades, we have expanded our programs, built international partnerships, and
                consistently adapted our curriculum to meet the evolving challenges of global leadership.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <img src={campusImage || "/placeholder.svg"} alt="Our Campus" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#1666ba] mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower individuals with leadership skills and diplomatic acumen to foster peace and progress
                globally. We are committed to developing leaders who can navigate complex international challenges and
                promote positive change in their communities and beyond.
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
                To be a global hub for leadership and diplomatic excellence, recognized for innovative education,
                impactful research, and the development of influential leaders who shape international relations and
                drive positive global change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
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

      {/* CTA Section */}
      <section className="py-20 bg-[#1666ba] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join Our Community
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl mb-8"
          >
            Be part of a legacy of excellence in leadership and diplomacy
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1666ba] hover:bg-[#1254a1] text-white px-6 py-2 rounded-full transition-colors duration-200"
          >
            Apply Now
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default About

