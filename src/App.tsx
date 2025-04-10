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
import Practice from "./practice/Practice";
import Practiceone from "./practice/Practiceone";
import Practicetwo from "./practice/Practicetwo";
import FaqSection from "./practice/FaqSection";
import Eventhandling from "./practice/Eventhandling";
import Usestate from "./practice/Usestate";
import Useeffect from "./practice/Useeffect ";
import RecipeSearch from "./practice/RecipeSearch";
import Design from "./practice/Design";
import Condition from "./practice/Condition";
import Form from "./practice/Form"
import ListKey from "./practice/ListKey"
import Blogspot from "./Blog/Blogspot";
import BlogonAI from "./Blog/BlogonAI";
import Blogonfreecode from "./Blog/Blogonfreecode";
import Optimization from "./practice/Optimization";
// import Reduxp from "./practice/reduxp";


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
        <Route path="/practiceotwo" element={<Practicetwo />} />
        <Route path="/faqSection" element={<FaqSection />} />
        <Route path="/eventhandling" element={<Eventhandling />} />
        <Route path="/usestate" element={<Usestate />} />
        <Route path="/useeffect" element={<Useeffect />} />
        <Route path="/recipeSearch" element={<RecipeSearch />} />
        <Route path="/design" element={<Design />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<ListKey />} />
        <Route path="/list" element={<Blog />} />
        <Route path="/blogspot" element={<Blogspot />} />
        <Route path="/blogonAI" element={<BlogonAI />} />
        <Route path="/React-Optimization" element={<Optimization />} />
        <Route path="blogonfreecode" element={<Blogonfreecode />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
