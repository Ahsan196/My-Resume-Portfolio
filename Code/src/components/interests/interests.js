import React from "react";

function interests() {
  return (
    <div class="section" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="h4 text-center mb-4 title">Interests</div>
            <div class="nav-align-center">
              <ul class="nav nav-pills nav-pills-primary" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" role="tablist">
                    <i
                      class="fa fa-laptop tooltipped"
                      aria-hidden="true"
                      data-position="top"
                      title="Development"
                      //   data-tooltip="Development"
                    ></i>
                  </a>
                </li>
                <li class="nav-item" title="Data Science">
                  <a class="nav-link" data-toggle="tab" role="tablist">
                    <i
                      className="fa fa-database"
                      aria-hidden="true"
                      data-position="top"
                    ></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" role="tablist">
                    <i
                      className="fa fa-chart-bar"
                      aria-hidden="true"
                      data-position="top"
                      title="Data Analytics"
                    ></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" role="tablist">
                    <i
                      class="fas fa-project-diagram"
                      aria-hidden="true"
                      data-position="top"
                      title="Project Management"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default interests;
