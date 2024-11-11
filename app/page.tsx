import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./pages/aboutpage";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />

      <div>
      
          <AboutMe />
      </div>
    </div>
  );
};

export default Home;
