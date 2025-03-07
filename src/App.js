import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <ProjectSection />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
