import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("navigating the user");
    navigate("/ProductList");
  };
  return (
    <center>
      Home
      <div>
        <button onClick={() => handleSubmit()}> Shop Now</button>
      </div>
    </center>
  );
};

export default Home;
Home;
