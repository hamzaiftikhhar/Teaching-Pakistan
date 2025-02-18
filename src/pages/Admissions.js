"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const AdmissionStep = ({ step, title, description, isActive, onClick }) => (
  <motion.div
    className={`border-l-4 pl-4 py-4 cursor-pointer ${isActive ? "border-blue-500" : "border-gray-300"}`}
    whileHover={{ x: 5 }}
    onClick={onClick}
  >
    <h3 className={`text-xl font-semibold mb-2 ${isActive ? "text-blue-500" : "text-gray-700"}`}>
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
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Join Our Global Community
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Embark on a transformative journey in leadership and diplomacy
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Bachelor's degree from an accredited institution
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Minimum GPA of 3.0 on a 4.0 scale
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Two letters of recommendation
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Statement of purpose
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  English proficiency (TOEFL/IELTS) for international students
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { term: "Fall Semester", deadline: "March 1" },
              { term: "Spring Semester", deadline: "October 1" },
              { term: "Summer Session", deadline: "February 1" },
            ].map((deadline, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-blue-700 p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{deadline.term}</h3>
                <p className="text-3xl font-bold">{deadline.deadline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Financial Aid & Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Merit-Based Scholarships</h3>
              <p className="text-gray-600 mb-4">
                We offer a range of merit-based scholarships to recognize outstanding academic achievements and
                leadership potential.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Full-tuition scholarships</li>
                <li>Partial-tuition scholarships</li>
                <li>Research fellowships</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Need-Based Financial Aid</h3>
              <p className="text-gray-600 mb-4">
                We are committed to making our programs accessible to all qualified candidates, regardless of financial
                circumstances.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Grants</li>
                <li>Work-study opportunities</li>
                <li>Low-interest loans</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Take the Next Step?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl mb-8"
          >
            Start your application today and begin your journey towards becoming a global leader
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-500 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 hover:bg-gray-100"
          >
            Apply Now
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Admissions

