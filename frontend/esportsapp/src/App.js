import "./App.css";
import Navigationbar from "./components/Navigationbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About";
import NewEventPage from './components/NewEventPage.js'
import EventInfo from './components/EventInfo.js'
import { AuthProvider } from './components/ContextAPI/authContext.js';
import toast, { Toaster } from 'react-hot-toast';


import { Container } from "react-bootstrap";
import { MyProfile } from "./components/MyProfile.js";
import { UpdateInfo } from "./components/UpdateInfo.js";
import { Footer } from "./components/Footer.js";
import { AdminPanel } from './components/AdminPanel.js'

import { PrivateRoute } from "./components/Routing/PrivateRoute.js";
import { AdminRoute } from './components/Routing/AdminRoute.js';

function App() {
  return (
    <>
        <AuthProvider >

      <Router>
          <Navigationbar />
          <Routes>


            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/event/:id" element={<EventInfo />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route element={<PrivateRoute />} >
              <Route path="/profile" element={<MyProfile/>} />
              <Route path="/update" element={<UpdateInfo/>} />
              <Route path="/event/create-new" element={<NewEventPage />} />
              <Route element = {<AdminRoute />}>
                  <Route path="/admin" element={<AdminPanel />} />
              </Route>
            </Route>
            
\          </Routes>
         
        </Router>
        
      </AuthProvider>
      <Footer/>
    </>

  );
}

export default App;
