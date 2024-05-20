import "./App.css";
import Navigationbar from "./components/Navigationbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About";
import EventInfo from './components/EventInfo.js'
import { AuthProvider } from './components/ContextAPI/authContext.js';

import { Container } from "react-bootstrap";
import { MyProfile } from "./components/MyProfile.js";
import { UpdateInfo } from "./components/UpdateInfo.js";
function App() {
  return (
    <>
        <AuthProvider>

      <Router>
        <Navigationbar />
        <Routes>

          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/event/:id" element={<EventInfo />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/profile" element={<MyProfile/>} />
          <Route path="/update" element={<UpdateInfo/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
        </AuthProvider>
    </>
  );
}

export default App;
