import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import HackathonsCertificates from "./components/HackathonsCertificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Navbar with Top-Left Explore Button (About Me, About My Projects, Hackathons & Certificates, Skills, Contact Me) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (Text on Left, Big Glowing Hexagon Photo on Right, Removed action buttons bar) */}
        <Hero />

        {/* 3. About Me Section */}
        <About />

        {/* 4. About My Projects Section */}
        <Projects />

        {/* 5. Hackathons & Certificates Section */}
        <HackathonsCertificates />

        {/* 6. Skills Section */}
        <Skills />

        {/* 7. Contact Me Section */}
        <Contact />
      </main>

      {/* 8. Footer Section */}
      <Footer />
    </>
  );
}
