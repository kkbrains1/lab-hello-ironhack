import React, { Component } from 'react';
//import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <Navbar></Navbar>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch, to become a Ninja Developer.
          </p>
          <button className="button">Awesome!</button>
          {/*<a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
          <Footer></Footer>
        </header>
      </div>
    );
  }
}



export default App;
