import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

import {
  FaCode,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaProjectDiagram,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-500" />,
    title: "Live Coding Sessions",
    description:
      "Interactive live coding sessions with expert tutors to enhance your coding skills.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-green-500" />,
    title: "Personalized Mentorship",
    description:
      "One-on-one mentorship to guide you through your coding journey effectively.",
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-purple-500" />,
    title: "Project-Based Learning",
    description:
      "Hands-on projects to help you apply concepts in real-world scenarios.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-yellow-500" />,
    title: "Career Guidance",
    description:
      "Professional guidance and portfolio building to land your dream job.",
  },
];

const ServicesSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    city: "",
    state: "New Mexico",
    zip: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {" "}
      <br />
      <br />
      <br />
      <section className="py-16 bg-gray-100 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-400 mt-2 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="max-w-7xl mx-auto mt-5 p-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <motion.div
              className="one"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                className="w-auto rounded-3xl"
                src="https://media.istockphoto.com/id/187244393/photo/we-will-get-to-the-right-answer-eventually.jpg?s=612x612&w=0&k=20&c=sv85YclfSvJwBzxHipFN5YSNIDSU6YXe8skqZb6QVjw="
                alt=""
              />
            </motion.div>
            <motion.div
              className="two"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <h2 className="text-gray-900 font-black text-2xl mb-5">
                Expert Tutor
              </h2>
              <p className="text-gray-600 text-lg mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur ducimus sunt porro eum harum perferendis debitis
                minima iure quos impedit. Voluptatem ea animi soluta quo omnis!
                Minima vel architecto laboriosam. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur ducimus sunt porro eum harum perferendis debitis
                minima iure quos impedit. Voluptatem ea animi soluta quo omnis!
                Minima vel architecto laboriosam. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                illo veritatis, placeat deserunt eveniet tempora dolores.
              </p>

              <motion.button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                React More <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>


      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Information</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="Akash"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="Raikwar"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile</label>
            <input
              type="number"
              name="phone"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="+91-91xxxxxx91"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="Ujjain"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
              >
                <option>MP</option>
                <option>UP</option>
                <option>CG</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Zip</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="456010"
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      </div>
      {/* Address Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Our Address</h2>
        <p className="text-gray-700 mb-2">Ujjain, MP, INDIA</p>
        <p className="text-gray-700 mb-2">456010</p>
        <p className="text-gray-700">Phone: +91-9685533878</p>
      </div>
    </div>
    </>
  );
};

export default ServicesSection;
