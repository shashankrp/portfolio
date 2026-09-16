import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import AI from "@/components/AI";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="main">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <AI />
      <About />
      <Contact />
      <Blog />
      <Footer />
    </Box>
  );
}
