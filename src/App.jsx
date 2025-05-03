//imported tools from the react-router-dom package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//imported components from the components folders
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "./components/ThemeContext";
import "./App.css";




function App() {
  return (
    
    <Router>
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <ThemeSwitcher/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact/>}/>
            
          </Routes>
        </main>
        <Footer />
      </div>
      </ThemeProvider>
    </Router>

  );
}

export default App;
