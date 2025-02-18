"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAnimateOnce } from "../components/ui/animate-once"

// Import faculty images
import faculty1 from "../assets/char1.jpg"
import faculty2 from "../assets/char2.jpg"
import faculty3 from "../assets/char3.jpg"
import faculty4 from "../assets/char4.jpg"

const facultyMembers = [
  {
    name: "Dr. Sarah Khan",
    role: "Professor of International Relations",
    expertise: "Conflict Resolution, Middle Eastern Politics",
    image: faculty1,
    bio: "Dr. Khan has over 15 years of experience in diplomatic relations and has published numerous papers on conflict resolution strategies.",
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of Leadership Studies",
    expertise: "Organizational Behavior, Strategic Management",
    image: faculty2,
    bio: "Prof. Chen brings industry experience from Fortune 500 companies and focuses on developing future business leaders.",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Associate Professor of Public Policy",
    expertise: "Environmental Policy, Sustainable Development",
    image: faculty3,
    bio: "Dr. Patel's research on sustainable urban development has influenced policy-making in several developing nations.",
  },
  {
    name: "Prof. James Wilson",
    role: "Distinguished Fellow, Diplomacy Program",
    expertise: "International Law, Diplomatic History",
    image: faculty4,
    bio: "With a background in international law, Prof. Wilson has served as an advisor to multiple UN committees.",
  },
]

const FacultyCard = ({ member, isSelected, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${isSelected ? "col-span-2 row-span-2" : ""}`}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{member.name}</h3>
        <p className="text-gray-300 text-sm">{member.role}</p>
      </div>
    </div>
    <AnimatePresence>
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4"
        >
          <p className="text-blue-800 font-semibold mb-2">Expertise: {member.expertise}</p>
          <p className="text-gray-600">{member.bio}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

const Faculty = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const heroAnimation = useAnimateOnce()
  const facultyGridAnimation = useAnimateOnce()
  const researchHighlightsAnimation = useAnimateOnce()
  const ctaAnimation = useAnimateOnce()

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            ref={heroAnimation.ref}
            initial={{ y: -20, opacity: 0 }}
            animate={heroAnimation.controls}
            variants={{
              visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Our Distinguished Faculty
          </motion.h1>
          <motion.p
            ref={heroAnimation.ref}
            initial={{ y: 20, opacity: 0 }}
            animate={heroAnimation.controls}
            variants={{
              visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
            }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Learn from world-renowned experts in leadership and diplomacy
          </motion.p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20" ref={facultyGridAnimation.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={facultyGridAnimation.controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1 } },
                }}
              >
                <FacultyCard
                  member={member}
                  isSelected={selectedMember === index}
                  onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-blue-800 text-white" ref={researchHighlightsAnimation.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={researchHighlightsAnimation.controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
            className="text-3xl font-bold text-center mb-12"
          >
            Research Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Diplomacy",
                description: "Exploring eco-friendly approaches to international relations",
                icon: "🌿",
              },
              {
                title: "AI in Governance",
                description: "Analyzing the impact of artificial intelligence on policy-making",
                icon: "🤖",
              },
              {
                title: "Global Leadership Trends",
                description: "Identifying emerging patterns in international leadership",
                icon: "📈",
              },
            ].map((research, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={researchHighlightsAnimation.controls}
                variants={{
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: index * 0.2 } },
                }}
                className="bg-blue-700 p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{research.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{research.title}</h3>
                <p className="text-blue-100">{research.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-green-500 text-white" ref={ctaAnimation.ref}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={ctaAnimation.controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join Our Distinguished Faculty
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={ctaAnimation.controls}
            variants={{
              visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
            }}
            className="text-xl mb-8"
          >
            We're always looking for passionate educators and researchers to join our team
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-500 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 hover:bg-gray-100"
          >
            View Open Positions
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Faculty

