import React from "react";
import {Route, Switch} from 'react-router-dom';
import {Credit} from './containers/Credit';
import {DataUser} from './containers/DataUser';
import {Extend} from './containers/Extend';
import {History} from './containers/History';

export class Sliders extends React.Component {
    render(){
        
        return (
            <div className="content1">
                <div className="content2">
                    <div className="content_a">
                        <h2>Sliders</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in <a href="/">reprehenderit in voluptate velit esse</a> cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                   
                    <Switch>
                        <Route path="/Sliders" exact component={Credit}/>
                        <Route  path="/Sliders/DataUser"  component={DataUser}/>
                        <Route  path="/Sliders/Extend"  component={Extend}/>
                        <Route  path="/Sliders/History"  component={History}/>
                    </Switch>
                   
                </div>
            </div>
        );
    }
}


