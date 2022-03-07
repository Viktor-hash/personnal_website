import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import NavBar from "./NavBar";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
