import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Hero from "../pages/Hero";
import "../styles/Home.css";
import MalePerfumes from "./MalePerfumes";

const Home = () => {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <div>
        <Hero />
        <MalePerfumes />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
