import React from "react";
import { Link } from "react-scroll";
import Footer from "./Footer";

import Resume from "./Resume";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import Facts from "./Facts";
import Typical from 'react-typical'
// https://www.npmjs.com/package/react-type-animation
const Dashboard = () => {
  return (
    <>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img
              src="/assets/img/select1.jpeg"
              alt=""
              class="img-fluid rounded-circle"
            />
            <h1 class="text-light">
              <a href="index.html">Anwesha Chakraborty</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <a href="index.html" class="twitter">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="index.html" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="index.html" class="instagram">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="index.html" class="google-plus">
                <i class="bx bxl-skype"></i>
              </a>
              <a href="index.html" class="linkedin">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <Link to="hero" class="nav-link scrollto active">
                  <i class="bx bx-home"></i> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="about" class="nav-link scrollto">
                  <i class="bx bx-user"></i> <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="resume" class="nav-link scrollto">
                  <i class="bx bx-file-blank"></i> <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link to="portfolio" class="nav-link scrollto">
                  <i class="bx bx-book-content"></i> <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="services" class="nav-link scrollto">
                  <i class="bx bx-server"></i> <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="contact" class="nav-link scrollto">
                  <i class="bx bx-envelope"></i> <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="hero-container" data-aos="fade-in">
          <h1>Anwesha Chakraborty</h1>
          <p>
            I'm 
            <span className="primary-text">
              {" "}
              <h1 >
                <Typical
                  loop={Infinity}
                  style={{color:"blueviolet"}}
                  steps={[
                    "Software Developer 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React Js 🌐",
                    1000,
                    "AI/ML Enthusiast 📱",
                    1000,
                    "YouTube Content Creator 💻",
                    1000,
                    "Content Writer 💻",
                    1000,
                    "Motivational Video Producer 💻",
                    1000,
                  ]}
                />
              </h1>
            </span>
            {/* <span
              class="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span> */}
          </p>
        </div>
      </section>

      <main id="main">
        <section id="about" class="about">
          <About></About>
        </section>

        <section id="facts" class="facts">
          <Facts></Facts>
        </section>

        <section id="skills" class="skills section-bg">
          <Skills></Skills>
        </section>

        <section id="resume" class="resume">
          <Resume></Resume>
        </section>

        <section id="portfolio" class="portfolio section-bg">
          <Portfolio></Portfolio>
        </section>

        <section id="services" class="services">
          <Service></Service>
        </section>

        <section id="testimonials" class="testimonials section-bg">
          <Testimonial></Testimonial>
        </section>

        <section id="contact" class="contact">
          <div class="container">
            <div class="section-title">
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row" data-aos="fade-in">
              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Bengalore, Karnataka</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>divinegyan1111@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameborder="0"
                    style={{ border: 0, width: 450, height: 290 }}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action=""
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Subject</label>
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Message</label>
                    <textarea
                      class="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <Footer></Footer>
      </footer>
      <a
        href="index.html"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};
export default Dashboard;
