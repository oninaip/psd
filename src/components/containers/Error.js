import React from 'react';
import {Link} from 'react-router-dom';

export class Error extends React.Component{
    render(){
        return(
            <div className="history"><h3>Error!!!</h3>
               <div className="CreditData error2" >
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div className="input"><Link to="/Sliders"><input type="button" value="Back"/></Link></div>
                </div>
        
        )
    }
}


 