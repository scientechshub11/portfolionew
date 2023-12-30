import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Portfolio = () => {
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    const getPortfolio = async () => {
      const response = await axios.get("http://localhost:8080/user/project");
      let res = response.data.project;
      setPortfolio(res);
    };
    getPortfolio();
  }, []);
  return (
    <>
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {portfolio.map((val) => {
            return (
              <>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={val.image} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={val.image} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                <a onClick={() => navigate(`/portfoliodetails/${val.uuidIdentifier}`)} title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          </>
            )})}
          {portfolio.map((val) => {
            return (
              <>
          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={val.image} class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href={val.image} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                <a onClick={() => navigate(`/portfoliodetails/${val.uuidIdentifier}`)} title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          </>
            )})}
          {portfolio.map((val) => {
            return (
              <>
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img
                      src={val.image}
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-links">
                      <a
                        href={val.image}
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="App 1"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a
                        onClick={() => navigate(`/portfoliodetails/${val.uuidIdentifier}`)}
                        title="More Details"
                      >
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>       
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
