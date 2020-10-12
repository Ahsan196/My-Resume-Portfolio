import React, { Component } from "react";
import MyGenInfo from "./myGenInfo";
export class header extends Component {
  render() {
    return (
      <div>
        <header className="w-100">
          <div className="profile-page sidebar-collapse">
            <nav
              className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
              color-on-scroll={400}
            >
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand" href="#" rel="tooltip"></a>
                  <button
                    style={{ width: "150px", marginTop: "10px" }}
                    className="navbar-toggler navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navigation"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#education">
                        Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#experience">
                        Experience
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#skill">
                        Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smooth-scroll" href="#project">
                        Projects
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <MyGenInfo />
      </div>
    );
  }
}

export default header;
