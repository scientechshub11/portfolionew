import React from "react";
import { Link } from "react-scroll";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
const PortfolioDetails = () => {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  console.log(queryParameters, "=====>queryParameters");
  const id = queryParameters.get("id");
  let ids = "a97eb1fa-4db9-433f-b4af-8bcc13b8ca03";
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    const getPortfolio = async () => {
      const response = await axios.get(
        `https://portfolio-my.onrender.com/user/project/${ids}`
      );
      let res = response.data.project;
      console.log(res);
      setPortfolio(res);
    };
    getPortfolio();
  }, []);
  return (
    <>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img
              src="/assets/img/sky.png"
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
              {/* <li>
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
              </li> */}
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Portfoio Details</h2>
              <ol>
                <li>
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li>Portfoio Details</li>
              </ol>
            </div>
          </div>
        </section>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-8">
                <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img src={portfolio.image} alt=""/>
                </div>

                <div class="swiper-slide">
                  <img src={portfolio.image} alt=""/>
                </div>

                <div class="swiper-slide">
                  <img src={portfolio.image} alt=""/>
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
                {/* <Swiper
                  style={{width:700}}
                  spaceBetween={50}
                  slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide><img src={portfolio.image}alt=""/></SwiperSlide>
                </Swiper> */}
              </div>

              <div class="col-lg-4">
                <div class="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    <li>
                      <strong>Description</strong>: {portfolio.description}
                    </li>
                    <li>
                      <strong>Project date</strong>: {portfolio.duration}
                    </li>
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href="index.html">www.example.com</a>
                    </li>
                  </ul>
                </div>
                <div class="portfolio-description">
                  <h2>{portfolio.name}</h2>
                  <p>{portfolio.projectDetails}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Portfolio Details Section --> */}
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
export default PortfolioDetails;
