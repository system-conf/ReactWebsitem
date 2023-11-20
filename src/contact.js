import React from 'react';

const Contact = () => {
  return (
    <main id="main" data-aos="fade" data-aos-delay="500">
    <div className="page-header d-flex align-items-center">
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="myfont myletter">Contact</h2>
          </div>
        </div>
      </div>
    </div>

    <section id="contact" className="contact">
      <div className="container">
        <div className="row gy-4 justify-content-center">
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-9">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-left">
                <button  className="myBtn myfont myletter">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}

export default Contact;
