import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Counter from "./test/counter";
import Image from "./images/pexels-photo.jpg";
import Home from "./pages/index";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/teams";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import "./App.css";

import Footer from './components/footer'; // Import Footer component
import FirstPage from "./test/FirstPage";
// import Example from "./test/Example";
// import File from "./test/File";

const App = () => {
  return (
    <div className="">
    <Router>
    {/* <Example /> */}
    {/* <File /> */}
      <Navbar />
      <FirstPage />

      <img src={Image} alt="" className="App-logo" />
      {/* <Counter /> */}
   
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/annual" element={<AnnualReport />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
   
    </Router>
   
    <Footer /> {/* Include Footer component */}

</div>
  );
}


export { App };
