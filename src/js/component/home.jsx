import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid p-0 bg-light vh-100">
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="container d-flex flex-wrap gap-2 justify-content-sm-between justify-content-center my-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
