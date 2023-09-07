import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./seventh/Home";
import About from "./seventh/About";
import Nav from "./seventh/Nav";
import { AnimatePresence } from "framer-motion";
function Seventh() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default Seventh;
