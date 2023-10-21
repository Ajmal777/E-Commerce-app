import React from "react";
import '../Page Styles/home.css'
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="branding">
          <h1>Welcome to SwiftCart</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to='/shop'>
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
