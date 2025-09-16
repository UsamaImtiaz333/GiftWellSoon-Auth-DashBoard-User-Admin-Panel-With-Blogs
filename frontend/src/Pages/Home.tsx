import CareRegistrySection from "@/components/CareRegistrySection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import StepProcess from "../components/StepProcess";
import WhyGWS from "../components/WhyGws";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StepProcess />
      <WhyGWS />
      <CareRegistrySection/>
      <Footer />
    </main>
  );
}

export default Home;
