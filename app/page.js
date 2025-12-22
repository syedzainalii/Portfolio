'use client'
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Head from "next/head";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Certification from "./Components/Certification";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
    matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Skills isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode} />
    <Work isDarkMode={isDarkMode} />
    <Experience isDarkMode={isDarkMode} />
    <Certification isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
     </>
  );
}
