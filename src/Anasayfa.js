// anasayfa.js

import React from 'react';

const Anasayfa = () => {
  return (
    <div id="large-header" className="large-header">
      <canvas id="demo-canvas"></canvas>
      <div className="mainContainer">
        <h1 className="myletter myfont myTextAlign mysecim">Web developer & Jr.Mobile developer</h1>
        <p className="myTextAlign mysecim">
          Merhaba, ben Süleyman Talha Duman, 2002 Kocaeli doğumluyum. Lise eğitimimi *Sabancı Mesleki ve Teknik Anadolu Lisesi*'nde tamamladım.
          Önlisans eğitimimi *Sakarya Üniversitesi* *Adapazarı Meslek Yüksekokulu Web Programlama ve Tasarım bölümünde tamamladım. Şu anda aktif olarak iş arıyorum.
        </p>
        <a href="contact.html" className="myBtn myfont myletter">
          İletişim kur
        </a>
      </div>
    </div>
  );
};

export default Anasayfa;
