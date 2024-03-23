import React from 'react';
import { Link } from 'react-router-dom';

const Hakkimda = () => {
  return (
    <main id="main" data-aos="fade" data-aos-delay="500">
      <section id="about" className="about">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="../assets/img/portfolio/pp.png" className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-5 content myHover">
              <h2 className="myfont myletter">Web Developer & Jr.Mobile Developer</h2>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>5 Oct 2002</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.starkbilisim.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+90 530 185 4118</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>KOCAELİ / İZMİT</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>junior</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>suleyman.talha.duman0@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3"> Merhaba, ben Süleyman Talha Duman, 2002 Kocaeli doğumluyum. Lise eğitimimi *Sabancı Mesleki ve Teknik Anadolu Lisesi*'nde tamamladım. Önlisans eğitimimi *Sakarya Üniversitesi* *Adapazarı Meslek Yüksekokulu Web Programlama ve Tasarım bölümünde tamamladım. Şu anda aktif olarak iş arıyorum.</p>
              <Link to="/Profile.pdf" target="_blank" className="myBtn myfont myletter">CV</Link>
              <a href="mailto:suleyman.talha.duman0@gmail.com" className="myBtn myfont myletter">MAIL</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hakkimda;
