import React from 'react';
import headerImg from '../img/header.jpg';
export class Header extends React.Component {
     constructor(props){
        super(props);
        this.state ={
            title: "Cherry ",
            ps: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            headerImg: "../img/header.jpg",
            valueSearch:"Search..."
        }
    }
    render(){
        return (
        <div className="header">
           <div className="header1">
            <div className="header2">
                <div className="header3">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.ps}</p>
                    
                </div>
                <div className="search">
                        <input type="text" className="inputSearch" placeholder={this.state.valueSearch}/>
                        <input type="button" className="button" defaultValue="&#xe986;"/>
                </div>
              </div>
            
            </div>
            <div className="headerImg">
                <div className="headerImg2">
                    <img src={headerImg} />
                </div>
                <div className="headerAbout">
                    <div className="headerAbout1">
                        <h2>Eaten berry</h2>
                        <p className="headerGrey">and go for a walk</p>
                    </div>
                    <div className="headerAbout2">
                        <h3>Today good weather...</h3>
                        <span className="headerText">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                            <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                            <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p> 
                            <p>consequat.</p>
                        </span>
                     </div>
                </div>
            </div>
        </div>);
    }
}
         
     