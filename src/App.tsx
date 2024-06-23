import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <NavBar />
      <main className="pt-24 md:pt-36">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
