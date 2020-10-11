import React from "react";
import Technical from "./technical";
import Soft from "./soft";
function skills() {
  // or the shorthand way
  let dict = {
    Languages: [
      "HTML/CSS",
      "JavaScript",
      "C/C++",
      "C#",
      "Python",
      "Java",
      "SQL",
    ],
    "Data Science/Analytics": [
      "SciPy",
      "Matplotlib",
      "Numpy",
      "Pandas",
      "Seaborn",
      "Scikit Learn",
      "t-SNE",
      "Pentaho Pivot4J",
      "Pentaho Data Integration (Kettle)",
      "OpenRefine",
    ],
    Databases: [
      "Oracle",
      "MongoDB",
      "SQLite Database",
      "Firebase",
      "MySQL",
      "SQL Server",
    ],
    "Libraries and Tools": [
      "Crossfilter.js",
      "D3.js",
      "DC.js",
      "NetworkX, Studio3T",
      "JSON",
      "XML",
      "Twitter API",
      "DBeaver",
      "SQLKata",
      "LINQ",
      "ReactJS",
      "Azure Devops",
      "Bitbucket",
    ],
    Frameworks: ["ASP.NET MVC"],
    "API Development": ["REST", "SOAP"],
    "Familiar With": ["Linux", "Django", "Node.js"],
    "Quality Assurance Tools": ["Postman", "Insomnia", "JDeodorant"],
  };
  return (
    <div className="section" id="skill">
      <div className="container">
        <div className="h4 text-center mb-4 title">Skills</div>
        <Technical dict={dict} />
        <Soft />
      </div>
    </div>
  );
}

export default skills;
