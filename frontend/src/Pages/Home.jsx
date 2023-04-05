import React from "react";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Cure from "../components/Cure";
import HabitTracker from "../components/HabitTracker";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Info/>
      <Cure/>
      <HabitTracker/>
      <Footer/>
    </div>
  );
};

export default Home;
