"use client"

import { motion } from "framer-motion"

// Import faculty images (using placeholders)
const faculty1 = "/placeholder.svg?height=400&width=400"
const faculty2 = "/placeholder.svg?height=400&width=400"

const Faculty = () => {
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
            Meet Our Experts
          </motion.h1>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-6"
            >
              <img
                src={faculty1 || "/placeholder.svg"}
                alt="Dr. Sarah Khan"
                className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#1666ba] mb-2 text-center md:text-left">Dr. Sarah Khan</h2>
                <p className="text-gray-700 font-medium mb-4 text-center md:text-left">
                  Expert in Conflict Resolution and International Relations
                </p>
                <p className="text-gray-600">
                  Dr. Khan brings extensive experience in diplomatic relations and has published numerous papers on
                  conflict resolution strategies. Her work has influenced policy-making in several developing nations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-6"
            >
              <img
                src={faculty2 || "/placeholder.svg"}
                alt="Mr. Adeel Ahmed"
                className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#1666ba] mb-2 text-center md:text-left">Mr. Adeel Ahmed</h2>
                <p className="text-gray-700 font-medium mb-4 text-center md:text-left">
                  Specialist in Strategic Leadership and Policy Development
                </p>
                <p className="text-gray-600">
                  Mr. Ahmed has industry experience from Fortune 500 companies and focuses on developing future business
                  leaders. His practical approach to leadership training has been widely acclaimed by students and
                  professionals alike.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-[#1666ba] mb-12"
          >
            Research Areas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Conflict Resolution",
                description: "Exploring innovative approaches to resolving international disputes",
                icon: "🕊️",
              },
              {
                title: "Leadership Development",
                description: "Researching effective methods for cultivating global leaders",
                icon: "📈",
              },
              {
                title: "International Relations",
                description: "Analyzing emerging patterns in global diplomacy and cooperation",
                icon: "🌐",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-[#1666ba] mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faculty

