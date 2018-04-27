import React from 'react';
import {Link} from 'react-router-dom';


export class Menu extends React.Component {
    render(){
        return (   
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
                                    <li><Link to="/Contacts">Contact</Link></li>
                                </ul>

                            </div>
                        </div>
                        <div className="meniuWhere">
                            <p><span style={{color:'#95161f'}}>Home / Another page</span> / This page</p>
                        </div>
                    </div>
                   
                 
            
            );
         }
}


