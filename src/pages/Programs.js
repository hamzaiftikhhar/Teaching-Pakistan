"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const ProgramTab = ({ id, title, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`px-4 py-2 text-lg font-medium rounded-t-lg transition-colors duration-200 ${
      isActive ? "bg-[#1666ba] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {title}
  </button>
)

const Programs = () => {
  const [activeTab, setActiveTab] = useState("undergraduate")

  const programCategories = {
    undergraduate: [
      {
        title: "Bachelor of Arts in International Relations",
        duration: "4 years",
        description: "A comprehensive program covering global politics, international law, and diplomatic history.",
        highlights: [
          "International Political Systems",
          "Diplomatic History",
          "Foreign Policy Analysis",
          "International Law",
        ],
      },
      {
        title: "Bachelor of Science in Global Leadership",
        duration: "4 years",
        description:
          "Focused on developing leadership skills in an international context with emphasis on cross-cultural management.",
        highlights: [
          "Strategic Leadership",
          "Cross-Cultural Communication",
          "Global Business Environment",
          "Organizational Behavior",
        ],
      },
    ],
    graduate: [
      {
        title: "Master of Diplomacy",
        duration: "2 years",
        description: "Advanced study of diplomatic practice, international negotiation, and conflict resolution.",
        highlights: [
          "Advanced Diplomatic Theory",
          "International Negotiation",
          "Conflict Resolution",
          "Diplomatic Protocol",
        ],
      },
      {
        title: "Master of Global Leadership",
        duration: "2 years",
        description:
          "Designed for professionals seeking to enhance their leadership capabilities in global organizations.",
        highlights: [
          "Global Strategic Management",
          "Leadership in Crisis",
          "International Project Management",
          "Ethical Leadership",
        ],
      },
      {
        title: "PhD in International Relations",
        duration: "3-5 years",
        description: "Research-focused program for those pursuing academic or high-level policy careers.",
        highlights: [
          "Advanced Research Methods",
          "Contemporary Global Issues",
          "Specialized Research Focus",
          "Teaching Practicum",
        ],
      },
    ],
    executive: [
      {
        title: "Executive Certificate in Diplomatic Leadership",
        duration: "6 months",
        description: "Intensive program for working professionals seeking to enhance their diplomatic skills.",
        highlights: [
          "Weekend Intensive Format",
          "Practical Diplomatic Exercises",
          "Networking with Global Leaders",
          "Capstone Project",
        ],
      },
      {
        title: "Executive Master of International Relations",
        duration: "1 year",
        description: "Accelerated master's program designed for mid-career professionals.",
        highlights: [
          "Flexible Schedule",
          "Applied Learning Approach",
          "Executive Mentorship",
          "Global Field Experience",
        ],
      },
    ],
  }

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
            Academic Programs
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Comprehensive education programs designed to develop the next generation of global leaders
          </motion.p>
        </div>
      </section>

      {/* Programs Tabs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-2 mb-8">
            <ProgramTab
              id="undergraduate"
              title="Undergraduate Programs"
              isActive={activeTab === "undergraduate"}
              onClick={setActiveTab}
            />
            <ProgramTab
              id="graduate"
              title="Graduate Programs"
              isActive={activeTab === "graduate"}
              onClick={setActiveTab}
            />
            <ProgramTab
              id="executive"
              title="Executive Education"
              isActive={activeTab === "executive"}
              onClick={setActiveTab}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {programCategories[activeTab].map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-[#1666ba]">{program.title}</h3>
                      <span className="bg-[#1666ba] text-white px-3 py-1 rounded-full text-sm">{program.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Courses:</h4>
                    <ul className="space-y-1 mb-6">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-block bg-[#1666ba] text-white px-4 py-2 rounded-md hover:bg-[#1254a1] transition-colors duration-200"
                    >
                      Request Information
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-[#1666ba] mb-12"
          >
            Our Learning Approach
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experiential Learning",
                description: "Learn through simulations, case studies, and real-world diplomatic exercises",
                icon: "🔍",
              },
              {
                title: "Global Perspective",
                description: "Gain insights from international faculty and diverse student body",
                icon: "🌎",
              },
              {
                title: "Professional Development",
                description: "Build practical skills through internships and field experiences",
                icon: "📈",
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-semibold text-[#1666ba] mb-2">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-[#1666ba] mb-12"
          >
            International Opportunities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1666ba] mb-4">Exchange Programs</h3>
              <p className="text-gray-600 mb-4">
                Study abroad at one of our partner institutions across six continents. Immerse yourself in different
                cultures and educational systems while earning credits toward your degree.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Semester and year-long exchanges
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Summer intensive programs
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Language immersion options
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1666ba] mb-4">International Internships</h3>
              <p className="text-gray-600 mb-4">
                Gain practical experience through internships with international organizations, diplomatic missions, and
                global corporations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  United Nations agencies
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  Foreign embassies and consulates
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span>
                  International NGOs
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-[#1666ba] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl mb-8"
          >
            Applications are now open for our upcoming programs
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-[#1666ba] px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-2 border-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs

