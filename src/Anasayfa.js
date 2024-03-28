// anasayfa.js

import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./assets/img/system.conf.jpg";

const Anasayfa = () => {
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

      <div id="large-header" className="large-header">
        <div className="mainContainer">
          <h1 className="myletter myfont myTextAlign mysecim">
            Web developer & Jr.Mobile developer
          </h1>
          <p className="myTextAlign mysecim">
            Merhaba, ben Süleyman Talha Duman, 2002 Kocaeli doğumluyum. Lise
            eğitimimi *Sabancı Mesleki ve Teknik Anadolu Lisesi*'nde tamamladım.
            Önlisans eğitimimi *Sakarya Üniversitesi* *Adapazarı Meslek
            Yüksekokulu Web Programlama ve Tasarım bölümünde tamamladım. Şu anda
            aktif olarak iş arıyorum.
          </p>
          <Link to="/contact" className="myBtn myfont myletter">
            Iletisime Gec
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Anasayfa;
