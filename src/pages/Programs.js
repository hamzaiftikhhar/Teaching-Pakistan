"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Programs = () => {
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
            Transformative Programs for Future Leaders
          </motion.h1>
        </div>
      </section>

      {/* Main Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Leadership Development */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#1666ba] mb-4">Leadership Development</h2>
              <p className="text-gray-600 mb-6">
                Courses tailored to cultivate strategic thinking, ethical leadership, and decision-making.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Strategic Management
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Ethical Leadership
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Decision Making
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Team Building
                </li>
              </ul>
            </motion.div>

            {/* Diplomacy and International Relations */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#1666ba] mb-4">Diplomacy & International Relations</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive training in global politics, negotiation, and conflict resolution.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  International Law
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Diplomatic Protocol
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Conflict Resolution
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Global Politics
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-[#1666ba] mb-12"
          >
            Workshops and Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Crisis Management",
                description: "Learn to handle international crises and emergency situations effectively",
                duration: "4 weeks",
                icon: "🎯",
              },
              {
                title: "Public Speaking for Diplomats",
                description: "Master the art of diplomatic communication and public speaking",
                duration: "6 weeks",
                icon: "🎤",
              },
              {
                title: "Cross-Cultural Communication",
                description: "Develop skills for effective communication across cultures",
                duration: "8 weeks",
                icon: "🌍",
              },
            ].map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{workshop.icon}</div>
                <h3 className="text-xl font-semibold text-[#1666ba] mb-2">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                <p className="text-sm text-gray-500">Duration: {workshop.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1666ba] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#1666ba] px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
          >
            Learn More About Our Programs
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Programs
