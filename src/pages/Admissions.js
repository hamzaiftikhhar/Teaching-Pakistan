"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const AdmissionStep = ({ step, title, description, isActive, onClick }) => (
  <motion.div
    className={`border-l-4 pl-4 py-4 cursor-pointer ${isActive ? "border-[#1666ba]" : "border-gray-300"}`}
    whileHover={{ x: 5 }}
    onClick={onClick}
  >
    <h3 className={`text-xl font-semibold mb-2 ${isActive ? "text-[#1666ba]" : "text-gray-700"}`}>
      Step {step}: {title}
    </h3>
    {isActive && (
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="text-gray-600"
      >
        {description}
      </motion.p>
    )}
  </motion.div>
)

const Admissions = () => {
  const [activeStep, setActiveStep] = useState(1)

  const admissionSteps = [
    {
      title: "Research Programs",
      description:
        "Explore our diverse range of programs in leadership and diplomacy to find the best fit for your career goals.",
    },
    {
      title: "Prepare Documents",
      description:
        "Gather required documents including transcripts, letters of recommendation, and a statement of purpose.",
    },
    {
      title: "Online Application",
      description:
        "Complete our comprehensive online application form, providing detailed information about your background and aspirations.",
    },
    {
      title: "Entrance Exam",
      description:
        "Take our entrance exam, which assesses your analytical skills, global awareness, and leadership potential.",
    },
    {
      title: "Interview",
      description:
        "If shortlisted, participate in an interview with our admissions committee to discuss your goals and fit for the program.",
    },
  ]

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
            Join Us and Shape the Future
          </motion.h1>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1666ba] mb-8 text-center">Admission Requirements</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Bachelor's degree</span>
                    <p className="text-gray-600">From an accredited institution with a minimum GPA of 3.0</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Letters of recommendation</span>
                    <p className="text-gray-600">Two letters from academic or professional references</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Statement of purpose</span>
                    <p className="text-gray-600">A 500-word essay outlining your goals and interest in the program</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">English proficiency</span>
                    <p className="text-gray-600">TOEFL or IELTS scores for international applicants</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1666ba] mb-8 text-center">Application Process</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {admissionSteps.map((step, index) => (
                <AdmissionStep
                  key={index}
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === index + 1}
                  onClick={() => setActiveStep(index + 1)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scholarships and Financial Aid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1666ba] mb-8 text-center">Scholarships and Financial Aid</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#1666ba] mb-4">Merit-Based Scholarships</h3>
                <p className="text-gray-600 mb-4">
                  We offer a range of merit-based scholarships to recognize outstanding academic achievements and
                  leadership potential.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Full-tuition scholarships
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Partial-tuition scholarships
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Research fellowships
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#1666ba] mb-4">Need-Based Financial Aid</h3>
                <p className="text-gray-600 mb-4">
                  We are committed to making our programs accessible to all qualified candidates, regardless of
                  financial circumstances.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Grants
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Work-study opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    Low-interest loans
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#1666ba] px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 hover:bg-gray-100"
          >
            Apply Now
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Admissions
