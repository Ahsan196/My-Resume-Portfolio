import React from "react";

function technical(props) {
  const techSkills = props.dict;
  console.log("props", props);

  //  const listItems = techSkills.map((skill) =>
  // <ListItem key={skill}
  //           value={skill} />
  // );
  return (
    <div>
      <div className="h5 text-center mb-4 title">Technical</div>
      <div className="container card pt-3">
        <div className="row col-md-12">
          <div className="col-md-3">
            <h3>Language</h3>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>HTML/CSS </li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>JavaScript</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>C/C++</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>C#</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Python</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Java</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Sql</li>
              </p>
            </ul>
          </div>
        </div>

        <div className="row col-md-12 mt-4">
          <div className="col-md-3">
            <h3>Data Science/Analytics</h3>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>SciPy</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Matplotlib</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Numpy</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Pandas</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Seaborn</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Scikit Learn</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>t-SNE</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Pentaho Pivot4J</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Kettle</li>
              </p>
            </ul>
          </div>
        </div>
        <div className="row col-md-12 mt-4">
          <div className="col-md-3">
            <h3>Databases</h3>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Oracle</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>MongoDB</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Firebase</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>MySQL</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>SQLite Database</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>SQL Server</li>
              </p>
            </ul>
          </div>
        </div>
        <div className="row col-md-12 mt-4">
          <div className="col-md-3">
            <h3>Libraries and Tools</h3>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Crossfilter.js</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>D3.js</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>DC.js</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>React.js</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Azure Devops</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>NetworkX</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Studio3T</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>JSON</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>XML</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Bitbucket</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>SQLKata</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Twitter API</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>DBeaver</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>LINQ</li>
              </p>
              <p className="text-left p-0 mt-1">
                <li>Github</li>
              </p>
            </ul>
          </div>
        </div>
        <div className="row col-md-12 mt-4">
          <div className="col-md-3">
            <h3>Frameworks</h3>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>ASP.NET MVC</li>
              </p>
            </ul>
          </div>
        </div>
        <div className="row col-md-12 mt-4">
          <div className="col-md-3">
            <h3>API Development</h3>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>REST</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>SOAP</li>
              </p>
            </ul>
          </div>
        </div>
        <div className="row col-md-12 mt-4">
          <div className="col-md-3">
            <h3>Familiar With</h3>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Linux</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Django</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Node.js</li>
              </p>
            </ul>
          </div>
        </div>
        <div className="row col-md-12 mt-4">
          <div className="col-md-3">
            <h3>Quality Assurance Tools</h3>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Postman</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>Insomnia</li>
              </p>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <p className="text-left p-0 mt-1">
                <li>JDeodorant</li>
              </p>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="card-body">
        <div className="row ">
          <div className="entry">
            <h5>
              <b>Technical</b>
            </h5>
            <div
              className="card"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="content">
                {Object.keys(techSkills).map((techSkill, index) => {
                  return (
                    <div>
                      <h3>{techSkill}</h3>
                      <ul className="skills">
                        {techSkills[techSkill].map((skill, index) => {
                          return <li key={index}>{skill}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default technical;
