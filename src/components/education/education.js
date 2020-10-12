import React from "react";

function education() {
  return (
    <div className="section" id="education">
      <div className="container cc-education">
        <div className="h4 text-center mb-4 title">Education</div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body cc-education-header">
                <p>2016 - 2020</p>
                <div className="h5">Bachelor's Degree</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <div className="h5">Bachelor of Computer Science</div>
                <p className="category">
                  FAST - National University of Computer and Emerging
                  Sciences,Karachi Campus
                </p>
                <h6>Major CS Electives</h6>
                <ol>
                  ● Design Defects and Restructuring / Design Patterns ● Data
                  Science ● Data Warehousing ● Information Processing Techniques
                  (C#) ● International Software Project Management
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body cc-education-header">
                <p>2014 - 2016</p>
                <div className="h5">College</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <div className="h5">HSSC</div>
                <p className="category">Bahria College Karsaz,Karachi</p>
                <h6>Core Subjects</h6>
                <ol>● Chemistry ● Mathematics ● Physics</ol>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body cc-education-header">
                <p>2011 - 2013</p>
                <div className="h5">School</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <div className="h5">SSC</div>
                <p className="category">
                  Dar ul Hijra National School, Medina Munawwarah, KSA
                </p>
                <h6>Core Subjects</h6>
                <ol>● Biology ● Chemistry ● Mathematics ● Physics</ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default education;
