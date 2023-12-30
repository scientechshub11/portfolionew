import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Resume = () => {
  const [resume, setResume] = useState([]);
  const [certificate, setCertificate] = useState([]);
  useEffect(() => {
    const getResume = async () => {
      const response = await axios.get("http://localhost:8080/user");
      let res = response.data.user;
      setResume(res);
    };
    getResume();
  }, []);
  useEffect(() => {
    const getCertificate = async () => {
      const response = await axios.get(
        "http://localhost:8080/user/certificate"
      );
      let res = response.data.certificate;
      setCertificate(res);
    };
    getCertificate();
  }, []);
  return (
    <div class="container">
      <div class="section-title">
        <h2>Resume</h2>
        <p>
          I am a Node js developer with 4.5+ years of experience in node js
          field, working on various node js project . some projects are from
          service based company. some projects are from product based company.
          Currently working on TekSystems (HP client)as a node js developer, my
          database is postgresql, other technology.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>Anwesha Chakraborty</h4>
            <p>
              <em>
                A hard working, dedicated IT professional with years of
                experience In various NodeJS projects, JavaScript, PostgreSQL,
                GIT,Clean Architecture.
              </em>
            </p>
            <ul>
              <li>Bengalore, India</li>
              <li>(123) 456-7891</li>
              <li>divinegyan1111@gmail.com</li>
            </ul>
          </div>

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Master In Computer Application(MCA)</h4>
            <h5>2022 - 2024</h5>
            <p>
              <em>Chandigarh University</em>
            </p>
            <p>Persuing final year in Masters in Computer application.</p>
          </div>
          <div class="resume-item">
            <h4>DIGITAL MARKETTING COURSE</h4>
            <h5>2022</h5>
            <p>
              <em>Udemy</em>
            </p>
            <p>Completed Bachelor degree in Mathematics(HONS)</p>
          </div>
          <div class="resume-item">
            <h4>Bachelor of Mathematics</h4>
            <h5>2011 - 2014</h5>
            <p>
              <em>Bahmananda Keshab Chandra College</em>
            </p>
            <p>Completed Bachelor degree in Mathematics(HONS)</p>
          </div>

          <h3 class="resume-title">CERTIFICATES AND LICENCE</h3>
          {certificate.map((val) => {
            return (
              <div class="resume-item">
                <h4>{val.name}</h4>
                <p>
                  <em>
                    <a
                      href={val.link}
                      alt=""
                    >
                      {val.company}
                    </a>
                  </em>
                </p>
              </div>
            );
          })}
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Activities</h3>

            <>
              <div class="resume-item">
                <ul>
                  <li>Drawing(Advanced)</li>
                  <li>Classical Kathak Dancer(intermediate)</li>
                  <li>YouTube Content Creation</li>
                  <li>Classical Flute(Beginners)</li>
                  <li>Guitar Learning(Beginners)</li>
                  <li>Singing(Devotional & Contemporary-intermediate)</li>
                </ul>
              </div>
            </>
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Professional Experience</h3>
          {resume.map((val) => {
            return (
              <>
                <div class="resume-item">
                  <h4>{val.designation}</h4>
                  <h5>{val.duration}</h5>
                  <p>
                    <em>
                      {val.company}, {val.location}
                    </em>
                  </p>
                  <ul>
                    {val.companies.map((vals) => {
                      return <li>{vals.description}</li>;
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Resume;
