import React, { Component } from "react";
import Carousel from "./crousel";
import axios from "axios";

const Project = (props) => (
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div class="row">
        <div class="col-lg-10 col-md-9">
          <p>{props.project.title}</p>
          <p>{props.project.description}</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div class="row">
        <div class="col-lg-10 col-md-9">
          <p>{props.project.title}</p>
          <p>{props.project.description}</p>
        </div>
      </div>
    </div>
  </div>
);
export class projects extends Component {
  constructor(props) {
    super(props);

    this.state = { myProjects: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/projects/")
      .then((response) => {
        this.setState({ myProjects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.myProjects);
    return (
      <div>
        {
          <div className="section" id="project">
            <div className="container cc-reference">
              <div className="h4 mb-4 text-center title">Projects</div>
              <div className="card" data-aos="zoom-in">
                <div
                  className="carousel slide"
                  id="cc-Indicators"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-target="#cc-Indicators"
                      data-slide-to={0}
                    />
                    <li data-target="#cc-Indicators" data-slide-to={1} />
                    <li data-target="#cc-Indicators" data-slide-to={2} />
                    <li data-target="#cc-Indicators" data-slide-to={3} />
                    <li data-target="#cc-Indicators" data-slide-to={4} />
                    <li data-target="#cc-Indicators" data-slide-to={5} />
                  </ol>
                  {this.state.myProjects.map((project) => {
                    return <Project project={project} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default projects;
