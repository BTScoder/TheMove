import Hero from "../components/Hero";
import About from "../components/About";
import Meetings from "../components/Meetings";
import Leaders from "../components/Leaders";
import Donations from "../components/Donations";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-300">
        <About />
        <Meetings />
        <Leaders />
        <Donations />
      </div>
    </>
  );
};

export default Home;
