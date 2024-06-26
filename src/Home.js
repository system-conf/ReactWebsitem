// Anasayfa.js
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./assets/img/system.conf.jpg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          opacity: "40%",
        }}
      ></div>

      <div className="mainContainer">
        <h1 className="myletter myfont myTextAlign mysecim">
          Web developer & Jr.Mobile developer{" "}
        </h1>
        <p className="myTextAlign mysecim">
          Hello, I am Süleyman Talha Duman, I was born in 2002 in Kocaeli. I
          completed my high school education at *Sabancı Vocational and
          Technical Anatolian High School*. I completed my associate degree
          education at *Sakarya University* *Adapazarı Vocational School Web
          Programming and Design I am currently actively looking for a job.
        </p>
        {/* Link ile "contact" sayfasına yönlendirme */}
        <Link to="/contact" className="myBtn myfont myletter">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Home;
