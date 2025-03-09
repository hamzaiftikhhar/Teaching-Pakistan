"use client"

import { motion } from "framer-motion"

const Events = () => {
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
            Stay Updated with the Latest
          </motion.h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1666ba] mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1666ba]">Annual Leadership Summit</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Upcoming</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Join global leaders for our flagship event discussing cutting-edge leadership strategies. The summit
                  will feature keynote speeches, panel discussions, and networking opportunities.
                </p>
                <div className="flex items-center text-gray-500">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>September 15-17, 2024</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1666ba]">International Relations Conference</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Upcoming</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore the latest developments in international diplomacy and global affairs. This conference brings
                  together diplomats, scholars, and policymakers to address pressing global challenges.
                </p>
                <div className="flex items-center text-gray-500">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>November 5-7, 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News and Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1666ba] mb-8 text-center">News and Achievements</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="border-l-4 border-[#1666ba] pl-4">
                <h3 className="text-xl font-bold text-[#1666ba] mb-2">
                  Faculty Publishes Groundbreaking Research in International Diplomacy
                </h3>
                <p className="text-gray-600 mb-4">
                  Our esteemed faculty member, Dr. Sarah Khan, has published a groundbreaking paper on innovative
                  approaches to conflict resolution in the digital age. This research is expected to significantly
                  impact the field of international diplomacy and has been featured in several prestigious academic
                  journals.
                </p>
                <div className="flex items-center text-gray-500">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>July 15, 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#1666ba] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Stay Informed
          </motion.h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for exclusive event announcements and the latest news
          </p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full w-full md:w-64 text-gray-800"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1666ba] px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default Events
