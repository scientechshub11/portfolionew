import React from "react";
import Footer from "./Footer";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Innerpage = () => {
    const navigate = useNavigate();
  return (
    <>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              class="img-fluid rounded-circle"
            />
            <h1 class="text-light">
              <a href="index.html">Alex Smith</a>
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
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Inner Page</h2>
              <ol>
                <li>
                  <a a onClick={() => navigate("/home")}>Home</a>
                </li>
                <li>Inner Page</li>
              </ol>
            </div>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        <section class="inner-page">
          <div class="container">
            <p>Example inner page template</p>
          </div>
        </section>
      </main>
      <footer id="footer">
        <Footer></Footer>
      </footer>
      {/* <!-- End  Footer --> */}

      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};
export default Innerpage;
