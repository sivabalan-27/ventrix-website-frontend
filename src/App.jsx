
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <Careers />
      <Contact />
      <Footer />

      <Chatbot />
    </>
  );
}

export default App;
