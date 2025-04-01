import { useState } from 'react';
import { GraduationCap, Menu, X} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
      <>
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Premium Tutoring</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
              <a href="/service" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blogs</a>
              <a href="/testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="/contact"><button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button></a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Programs</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Tutors</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="/contact"><button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full">
                  Contact Us
                </button></a>
              </div>
            </div>
          )}
        </nav>
      </header>      
      </>

     
  );
}



export default App;