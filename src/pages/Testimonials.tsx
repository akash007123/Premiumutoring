import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aryan Sharma",
    feedback: "Premium Tutoring transformed my coding skills. The mentors are knowledgeable and supportive!",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    rating: 5,
  },
  {
    name: "Neha Verma",
    feedback: "I loved the structured approach. The live coding sessions were a game-changer!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Rajat Gupta",
    feedback: "The best online coding tuition with real-world projects and interactive lessons!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4.5,
  },
  {
    name: "Sanya Kapoor",
    feedback: "The tutors made complex topics easy to understand. Highly recommend Premium Tutoring!",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 5,
  },
  {
    name: "Rakshansh Vedi",
    feedback: "The tutors made complex topics easy to understand. Highly recommend Premium Tutoring!",
    image: "https://randomuser.me/api/portraits/men/0.jpg",
    rating: 5,
  },
  {
    name: "Adesh Shah",
    feedback: "The tutors made complex topics easy to understand. Highly recommend Premium Tutoring!",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <> <br /><br />
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          What Our Students Say
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
            >
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2 text-center">{testimonial.feedback}</p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
