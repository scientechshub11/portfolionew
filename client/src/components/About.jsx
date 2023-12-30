import React from "react";
const About = () => {
  return (
    <>
      <div class="container">
        <div class="section-title">
          <h2>About</h2>
          <p>
              I am a Node js developer with 4.5+ years of experience in node js
              field, working on various node js project . some projects are from
              service based company. some projects are from product based
              company. Currently working on TekSystems (HP client)as a node js
              developer, my database is postgresql, other technology.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="/assets/img/sky.png" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Software Developer &amp; Web Developer.</h3>
            <p class="fst-italic">
              {/* I am a Node js developer with 4.5+ years of experience in node js
              field, working on various node js project . some projects are from
              service based company. some projects are from product based
              company. Currently working on TekSystems (HP client)as a node js
              developer, my database is postgresql, other technology. */}
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  {/* <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li> */}
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Bengalore, INDIA</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  {/* <li>
                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                    <span>30</span>
                  </li> */}
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>MCA(JUNE(2022) - JUNE(2024))</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>PhEmailone:</strong>{" "}
                    <span>divinegyan1111@gmail.com</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              
              <ul>
                <li>
                  Well-versed with AGILE Methodology, SDLC, Version control
                  system (GIT), Defect Tracking tool (Jira)
                </li>
                <li>
                  Languages: React js, Typescript, NodeJS, JavaScript,
                  Temporal.io
                </li>
                <li>Database: Postgresql, Mongodb, mysql, hasura(graphql)</li>
                <li>AI/ML: tensorflow, dunfojs, NodeJS</li>
                <li>Bootsrap5, Material UI, css</li>
                <li>Knowledge of Data structure and Algorithms</li>
                <li>Other Tools: CICD, Github, jenkins, docker, amazon(ec2)</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
