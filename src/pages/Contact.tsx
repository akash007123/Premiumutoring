import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <br /><br /><br />
    <section className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">We'd love to hear from you! Fill out the form below or reach out via our contact details.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        <div className="space-y-6 text-gray-300">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-500" size={24} />
            <span>akashraikwar763@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-blue-500" size={24} />
            <span>+91-9999999999</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-500" size={24} />
            <span>Ujjain, MP, INDIA</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} 
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} 
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={4} 
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all">Send Message</button>
        </form>
      </div>
      
      <div className="mt-5"><br />
        <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      </div>
    </section>
    
    </>
  );
}
