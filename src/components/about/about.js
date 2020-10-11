import React from "react";

function about() {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset={10}>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About</div>
                <p>
                  Experienced Teaching Assistant with a demonstrated history of
                  working in the higher education industry. Skilled in Mobile
                  Application,ASP.NET Web, and Software Development, Data
                  Science,Software Project Management, Teamwork, and
                  Leadership.Interested in Data Science, Software Development,
                  and Project Management. Strong education professional with a
                  BS in Computer Science from the National University of
                  Computer and Emerging Sciences.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Basic Information</div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Email:</strong>
                  </div>
                  <div className="col-sm-8">ahsan.mansoor1996@gmail.com </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Phone:</strong>
                  </div>
                  <div className="col-sm-8">+92-300-6051551</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">LinkedIn: </strong>
                  </div>
                  <div className="col-sm-8">
                    <a href="https://www.linkedin.com/in/ahsan-mansoor-91a10b174/">
                      {/*<i className="fa fa-linkedin" />*/}
                      https://www.linkedin.com/in/ahsan-mansoor-91a10b174/
                    </a>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Github:</strong>
                  </div>
                  <div className="col-sm-8">
                    <a href="https://github.com/Ahsan196">
                      {/*<i className="fa fa-github" />*/}
                      https://github.com/Ahsan196
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
