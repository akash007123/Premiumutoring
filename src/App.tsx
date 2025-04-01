import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact"
import Random from "./pages/Random"
import Practice from "./practice/practice";
import Practiceone from "./practice/Practiceone";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/random" element={<Random />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practiceone" element={<Practiceone />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
