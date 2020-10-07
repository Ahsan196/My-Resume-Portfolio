import React from "react"
//import  About from "./components/about/about"
import App from "./App"
import Home from './pages/Home/home'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"


const Routes = () => {
  return (
    <Router>
       <Route exact path="/" component={App} />
       <Route path="/about" component={About} />   
       <Route path="/experience" component={Experience} /> 
       <Route path="/education" component={Education} />   
       <Route path="/skills" component={Skills} /> 
       <Route path="/interests" component={Interests} />   
       <Route path="/projects" component={Projects} /> 
       <Route path="/certifications" component={Certifications} />   
       <Route path="/honorsAchievements" component={HonorsAchievements} /> 
       <Route path="/extracurricular" component={Extracurricular} />   
    </Router>)
}

export default Routes