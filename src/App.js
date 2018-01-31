import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/styles.css';
import {Header} from './components/Header';

import {Footer} from './components/Footer';
import {Menu} from './components/Menu';
import {Contacts} from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
        
    );
  }
}

export default App;
