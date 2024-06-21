
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import { SelectedPage } from "./types";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.About);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.About);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <>
      <NavBar
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
      <About setSelectedPage={setSelectedPage}/>
      <Projects setSelectedPage={setSelectedPage}/>
      <Contact  setSelectedPage={setSelectedPage}/>
    </>
  )
}

export default App
