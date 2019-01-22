import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p class="App-text">
            Please add to your home screen and it will work like a native mobile app or a desktop app!
          </p>
          <p class="App-text">
            Fast, Reliable, and Engaging!
          </p>
          <a
            className="App-link"
            href="https://developers.google.com/web/progressive-web-apps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            What is PWA?
          </a>
        </header>
      </div>
    );
  }
}

export default App;
