import {  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

function Footer() {
 
  return (
    <>
        <footer className="bg-gray-900 text-white">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-4">
                <img src="https://cdn-icons-png.flaticon.com/512/5953/5953443.png" className='w-32' alt="" />
                  <span className="ml-2 text-xl font-bold">Premium Tutoring</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Empowering students to achieve academic excellence through personalized tutoring services.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Programs</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Meet Our Tutors</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Success Stories</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>+91-9999999999</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>akashraikwar763@gmail.com</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Ujjain, MP, INDIA</span>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <LinkedIn className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="border-t border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                <p>© 2025 Premium Tutoring Services. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}



export default Footer;

