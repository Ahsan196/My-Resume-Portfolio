import React from "react";

function experience() {
  return (
    <div className="section" id="experience">
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        <div className="card">
          <div className="row">
            <div
              className="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body cc-experience-header">
                <p>August 2020 - Present</p>
                <div className="h5">Liquid Technologies</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <div className="h5">React Developer Intern</div>
                <p>
                  ■ Perform tasks assigned by the management as per the work
                  flow of their ongoing development projects.
                </p>
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
              <div className="card-body cc-experience-header">
                <p>February 2020 - July 2020</p>
                <div className="h5">FAST-NUCES</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <div className="h5">Teaching Assistant</div>
                <p>■ Helped course lecturer with grading of course work.</p>
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
              <div className="card-body cc-experience-header">
                <p>July 2019 - August 2019</p>
                <div className="h5">Virtual Reality Centre, NED-UET</div>
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-offset={50}
              data-aos-duration={500}
            >
              <div className="card-body">
                <div className="h5">Software Engineering Intern</div>
                <p>
                  ■ Designed and developed drone simulator consisting of four
                  modes: -City, Village, Green Land and Practice for training,
                  in Unity 3d using C#.
                </p>
                <p>
                  ■ Designed and developed energy dashboard web page using
                  D3.js, DC.JS,Crossfilter.js,HTML,CSS,Javascript
                  ES6,Bootstrap,jQuery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default experience;
