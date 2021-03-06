import React from 'react';

import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";


import  Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/Homepage'
import Footer from './Footer/Footer';
import AboutPage from './About/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import BarChart from './BarChart/BarChart.js';

function App() {
  return (
  <Router>
    <Menu/>
    <Hero/>
    <div className="mainContainer">
   
<Switch>
<Route path="/about">
  <AboutPage></AboutPage>
</Route>
<Route path="/login">
  <LoginPage></LoginPage>
</Route>
<Route path="/">
  <HomePage></HomePage>
</Route>
</Switch>
<BarChart size={[200,200]} />

    </div>
    <Footer/>
   
  </Router>
  );
}

export default App;
