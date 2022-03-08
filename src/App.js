import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Work from "./Work";
import Projects from "./Projects";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />}>
              <Route index element={<Projects />} />
              <Route path="projects" element={<Projects />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
