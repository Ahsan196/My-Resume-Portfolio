import React from "react";

function honorsAchievements() {
  return (
    <div className="section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="h4 text-center mb-4 title">
              Honors &amp; Achievements
            </div>
          </div>
          <div className="tab-pane active" id="web-development">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a href="#web-development">
                      <figure className="cc-effect">
                        <img src="images/ep.jpeg" alt="Image" />
                        <figcaption></figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a href="#web-development">
                      <figure className="cc-effect">
                        <img src="images/deputy.jpeg" alt="Image" />
                        <figcaption></figcaption>
                      </figure>
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

export default honorsAchievements;
