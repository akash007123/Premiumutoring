import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
    <br /><br />
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <div className="max-w-4xl text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Welcome to <span className="text-yellow-300">Premium Tutoring</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg mb-6"
        >
          Master coding with expert guidance! Our interactive online tutoring platform
          offers hands-on lessons, real-world projects, and personalized mentorship to
          help you become a proficient developer.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button className="px-6 py-3 text-lg font-semibold bg-yellow-300 text-gray-900 rounded-xl shadow-lg hover:bg-yellow-400">
            Get Started
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <div className="p-6 bg-white text-gray-900 shadow-2xl rounded-2xl w-96 text-center">
          <FaCode className="text-6xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
          <p className="text-gray-700">
            Live sessions, expert mentors, structured roadmap, and a supportive
            community to accelerate your learning.
          </p>
        </div>
      </motion.div>
    </motion.section>
    </>
  );
}
