import React from 'react';
import {Link} from 'react-router-dom';
import {newState} from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class HeaderCl extends React.Component {
     constructor(props){
        super(props);
        this.state ={
            title: "Cherry ",
            ps: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            headerImg: "../img/header.jpg",
            valueSearch:"",
            onClick:false
        }
         this.searchValue=this.searchValue.bind(this);   
    }
    searchValue(e){
        
        this.setState({valueSearch:e.target.value});
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
                        <input  type="text" 
                                className="inputSearch" 
                                value={this.state.valueSearch} 
                                placeholder="Search..." 
                                onChange={this.searchValue}/>
                    <Link to="/SearchResult" >
                        <input type="button" 
                                className="button" 
                                defaultValue="&#xe986;" 
                                onClick={()=>{
                                    this.setState({valueSearch:""});
                                    this.props.newState(this.state.valueSearch)}}/>
                    </Link>
                </div>
              </div>
            
            </div>
            <div className="headerImg0">
                <div className="headerImg">
                    <div className="headerImg2">
                    </div>
                    <div className="headerAbout">
                        <div className="headerAbout1">
                            <h2>Eaten berry</h2>
                            <p className="headerGrey">and go for a walk</p>
                        </div>
                        <div className="headerAbout2">
                            <h3>Today good weather...</h3>
                            <span className="headerText">
                                Lorem ipsum dolor sit amet,  consectetur  adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </span>
                         </div>
                    </div>
                </div>
            </div>
                    
        </div>);
    }
            
}
const mapStateToProps=(state)=>{
    return {newStateR:state.reducerState}
    }
const matchDispatchToProps = (dispatch)=>{
    return { newState:bindActionCreators(newState,dispatch)}
    }
export const Header = connect(mapStateToProps,matchDispatchToProps)(HeaderCl);