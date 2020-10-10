import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import About from './components/about/about'
import Education from './components/education/education'
import Experience from './components/experience/experience'
import ExtraCurricular from './components/extraCurricular/extraCurricular'
import HonorsAchievements from './components/honorsAchievements/honorsAchievements'
import Certifications from './components/certifications/certifications'
import Interests from './components/interests/interests'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
export default class App extends  Component{
  render(){
    return (
      <div className="App">
        <Header />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Interests/>
        <Certifications />     
        <HonorsAchievements />
        <ExtraCurricular />
        
      </div>
    );
  }
  
}
