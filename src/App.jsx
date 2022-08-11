import React from "react";
// import Navbar from "./components/Navbar/Navbar.component";
import { Route,Routes } from "react-router-dom";
import HomeLayout from "./Layout/Home.Layout";
import EventPage from "./page/Event.page";
import AboutPage from "./page/About.page";
import ContactPage from "./page/Contact.page";
import CourseLayout from "./Layout/Course.Layout";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomeLayout />}/>
        <Route path="/event" exact element={<EventPage />}/>
        <Route path="/about" exact element={<AboutPage />}/>
        <Route path="/course" exact element={<CourseLayout />}/>
        <Route path="/contact" exact element={<ContactPage />}/>
      </Routes>
    </div>
  );
}

export default App;
