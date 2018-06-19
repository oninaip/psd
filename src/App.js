import React, { Component } from 'react';
import './App.css';
import './components/styles.css';
import {Header} from './components/Header';
import {Contain} from './components/Contain';
import {Footer} from './components/Footer';
import {Menu} from './components/Menu';

import { BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  
     componentWillMount(){
        console.log(window.location);
    }
  render() {
    
    return (
    <Router>
      <div>
        <Header/>
        <Menu />
        <Contain/>
        <Footer />
      </div>
    </Router>
        
    );
  }
}

export default App;
