import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Contacts} from './Contacts';
import {Home} from './Home';
import {Sliders} from './Sliders';
import {ContactUs} from './ContactUs';
import {Portfolio} from './Portfolio';
import {BlogWrapped} from './Blog';
import {SearchResult} from './containers/SearchResult';
import {Cherry} from './Cherry';

export class Contain extends React.Component {
    render(){
         
        return (   
            
                    <div className="content">
                        <ContactUs/>
                            <Switch>
                                <Route exact path="/" component={Home}/> 
                                <Route path="/Sliders" component={Sliders}/>
                                <Route  path="/Contacts" component={Contacts}/>
                                <Route  path="/Portfolio" component={Portfolio}/>
                                <Route  path="/SearchResult" component={SearchResult} />
                                <Route  path="/Blog" component={BlogWrapped}/>
                                <Route  path="/Cherry" component={Cherry}/>
                            </Switch>
                        
                    </div>
            );
         }
}







