import "./App.css";
import Navigationbar from "./components/Navigationbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About";
import EventInfo from './components/EventInfo.js'

import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Routes>

          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/event/:id" element={<EventInfo />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
