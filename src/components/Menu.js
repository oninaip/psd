import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Contacts} from './Contacts';
import {About} from './About';
import {Home} from './Home';
import {ContactUs} from './ContactUs';
export class Menu extends React.Component {
    render(){
        return (   
            <Router>
                <div>
                    <div className="meniu">
                        <div className="meniu1">
                            <div className="meniu2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/Sliders">Sliders</Link></li>
                                    <li><Link to="/Portfolio">Portfolio</Link></li>
                                    <li><Link to="/Styles">Styles</Link></li>
                                    <li><Link to="/Blog">Blog</Link></li>
                                    <li><Link to="/Cherry">Cherry</Link></li>
                                    <li><Link to="/Contact">Contact</Link></li>
                                </ul>

                            </div>
                        </div>
                        <div className="meniuWhere">
                            <p><span style={{color:'#95161f'}}>Home / Another page</span> / This page</p>
                        </div>
                    </div>
                   
                    <div className="content">
                        <ContactUs/>
                        <Route exact path="/" component={Home}/> 
                    </div>
                </div>
            </Router> 
            );
         }
}


