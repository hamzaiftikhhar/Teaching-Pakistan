"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAnimateOnce } from "../components/ui/animate-once"

// Import event images
import event1 from "../assets/event1.jpg"
import event2 from "../assets/event2.jpg"
import event3 from "../assets/event3.jpg"
import event4 from "../assets/event4.jpg"

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Leadership Summit",
    date: "September 15-17, 2024",
    image: event1,
    description: "Join global leaders for our flagship event discussing cutting-edge leadership strategies.",
    details:
      "The Annual Leadership Summit brings together influential figures from politics, business, and academia to explore innovative approaches to leadership in a rapidly changing world. Attendees will engage in workshops, panel discussions, and networking sessions designed to enhance their leadership skills and global perspective.",
  },
  {
    id: 2,
    title: "International Relations Conference",
    date: "November 5-7, 2024",
    image: event2,
    description: "Explore the latest developments in international diplomacy and global affairs.",
    details:
      "The International Relations Conference is a premier gathering of diplomats, scholars, and policymakers. This year's theme, 'Navigating Global Challenges in the 21st Century,' will address pressing issues such as climate change, cybersecurity, and economic cooperation. Participants will have the opportunity to engage in high-level discussions and contribute to shaping future international policies.",
  },
]

const pastEvents = [
  {
    id: 3,
    title: "Diplomatic Simulation Workshop",
    date: "March 10-11, 2024",
    image: event3,
    description: "A hands-on workshop simulating real-world diplomatic scenarios and negotiations.",
    details:
      "This intensive two-day workshop provided participants with practical experience in diplomatic negotiations. Through a series of simulated scenarios, attendees honed their skills in conflict resolution, strategic communication, and cross-cultural diplomacy under the guidance of experienced diplomats and negotiators.",
  },
  {
    id: 4,
    title: "Global Leadership Forum",
    date: "May 20, 2024",
    image: event4,
    description: "A one-day forum featuring keynote speeches from world-renowned leaders and thinkers.",
    details:
      "The Global Leadership Forum brought together visionary leaders from various sectors to share insights on effective leadership in a globalized world. Keynote speakers addressed topics such as ethical leadership, innovation in governance, and strategies for navigating complex global challenges. The event provided invaluable networking opportunities and inspired attendees to elevate their leadership approach.",
  },
]

const EventCard = ({ event, setSelectedEvent }) => (
  <motion.div
    layoutId={`event-${event.id}`}
    onClick={() => setSelectedEvent(event)}
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col h-full"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-[#1666ba] mb-2">{event.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{event.date}</p>
      <p className="text-sm text-gray-700 flex-grow">{event.description}</p>
      <button className="mt-4 text-blue-600 hover:text-[#1666ba] text-sm font-medium">Learn More →</button>
    </div>
  </motion.div>
)

const EventModal = ({ event, setSelectedEvent }) => (
  <motion.div
    layoutId={`event-${event.id}`}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={() => setSelectedEvent(null)}
  >
    <motion.div className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4" onClick={(e) => e.stopPropagation()}>
      <img
        src={event.image || "/placeholder.svg"}
        alt={event.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#1666ba] mb-4">{event.title}</h2>
        <p className="text-xl text-gray-600 mb-4">{event.date}</p>
        <p className="text-gray-700 mb-6">{event.details}</p>
        <div className="flex justify-between items-center">
          <button
            className="bg-[#1666ba] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
            onClick={() => {
              /* Registration logic */
            }}
          >
            {new Date(event.date.split("-")[0]) > new Date() ? "Register Now" : "View Details"}
          </button>
          <button className="text-gray-600 hover:text-gray-800" onClick={() => setSelectedEvent(null)}>
            Close
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
)

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [filter, setFilter] = useState("upcoming")

  const filteredEvents = filter === "upcoming" ? upcomingEvents : pastEvents

  const heroAnimation = useAnimateOnce()
  const newsAnimation = useAnimateOnce()
  const eventsAnimation = useAnimateOnce()
  const newsletterAnimation = useAnimateOnce()

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1666ba] text-white overflow-hidden">
        <motion.div
          ref={heroAnimation.ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={heroAnimation.controls}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Stay Updated with the Latest</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover our upcoming events and latest achievements in leadership and diplomacy
          </p>
        </motion.div>
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      </section>

      {/* News and Achievements Section */}
      <section className="py-16 bg-white" ref={newsAnimation.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={newsAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-3xl font-bold text-[#1666ba] mb-8 text-center"
          >
            News and Achievements
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={newsAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
            }}
            className="bg-blue-50 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#1666ba] mb-4">
              Faculty Publishes Groundbreaking Research in International Diplomacy
            </h3>
            <p className="text-gray-700">
              Our esteemed faculty member, Dr. Sarah Johnson, has published a groundbreaking paper on innovative
              approaches to conflict resolution in the digital age. This research is expected to significantly impact
              the field of international diplomacy and has been featured in several prestigious academic journals.
            </p>
            <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">
              Read more
            </a>
          </motion.div>
        </div>
      </section>

      {/* Event Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full ${filter === "upcoming" ? "bg-[#1666ba] text-white" : "bg-white text-[#1666ba]"}`}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming Events
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full ${filter === "past" ? "bg-[#1666ba] text-white" : "bg-white text-[#1666ba]"}`}
              onClick={() => setFilter("past")}
            >
              Past Events
            </motion.button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12" ref={eventsAnimation.ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={eventsAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} setSelectedEvent={setSelectedEvent} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && <EventModal event={selectedEvent} setSelectedEvent={setSelectedEvent} />}
      </AnimatePresence>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#1666ba] text-white" ref={newsletterAnimation.ref}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={newsletterAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Stay Informed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={newsletterAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
            }}
            className="text-xl mb-8"
          >
            Subscribe to our newsletter for exclusive event announcements and the latest news
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={newsletterAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
            }}
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
              className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600 transition-colors duration-200"
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

