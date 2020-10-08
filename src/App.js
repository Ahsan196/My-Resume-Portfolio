import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import About from './components/about/about'
import Education from './components/education/education'
import Experience from './components/experience/experience'
import ExtraCurricular from './components/extraCurricular/extraCurricular'
import HonorsAchievements from './components/honorsAchievements/honorsAchievements'
export default class App extends  Component{
  render(){
    return (
      <div className="App">
        <Header />
        <About />
        <Education />
        <Experience />
        <ExtraCurricular />
        <HonorsAchievements />
        
      </div>
    );
  }
  
}
