import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import axios from "axios";

export class projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProjects: [],
      activeIndex: 0,
      animating: false,
      projectsFetched: false,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  next = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.myProjects.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.myProjects.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/projects/")
      .then((response) => {
        this.setState({ myProjects: response.data, projectsFetched: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log("projects", this.state.myProjects);

    return (
      <div>
        {this.state.projectsFetched === false ? null : (
          <div className="section" id="project">
            {console.log("inside projects", this.state.myProjects)}
            <div className="h4 text-center title">Projects</div>
            <Carousel
              className=""
              activeIndex={this.state.activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={this.state.myProjects}
                activeIndex={this.state.activeIndex}
                onClickHandler={this.goToIndex}
              />
              {/*{this.projectSlide()}*/}
              {this.state.myProjects.map((project) => {
                return (
                  <CarouselItem
                    onExiting={() => this.setState({ animating: true })}
                    onExited={() => this.setState({ animating: false })}
                    key={project.title}
                  >
                    <img
                      className=""
                      src="./images/1.jpg"
                      alt="First slide"
                    />
                    <CarouselCaption
                      // className="text-danger"
                      className="text-center"
                      captionText={project.description}
                      captionHeader={project.title}
                    />
                  </CarouselItem>
                );
              })}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>
          </div>
        )}
      </div>
    );
  }
}

export default projects;
