import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';

class Menu2 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            onClick:true
        }
    }
    burgerClick(){
        this.setState({
            onClick:!this.state.onClick
        });
        if(this.state.onClick === true){
            $(".meniuBurger").css("display","block");
            $(".burger").children().attr("class","open");
        }else{
            $(".meniuBurger").css("display","none");
            $(".burger").children().attr("class","closeBurger");
        }
        
    }
    render(){
        
        return (   
                <div className="meniu">
                        <div className="meniu1">
                            <nav className="meniu2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/Sliders">Sliders</Link></li>
                                    <li><Link to="/Portfolio">Portfolio</Link></li>
                                    <li><Link to="/Styles">Styles</Link></li>
                                    <li><Link to="/Blog">Blog</Link></li>
                                    <li><Link to="/Cherry">Cherry</Link></li>
                                    <li><Link to="/Contacts">Contact</Link></li>
                                </ul>
                            </nav>
                            <div className="burger" onClick={this.burgerClick.bind(this)}><span className="closeBurger"></span></div>
                            <div  className="meniuBurger"  onClick={this.burgerClick.bind(this)}>
                                <nav>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/Sliders">Sliders</Link></li>
                                        <li><Link to="/Portfolio">Portfolio</Link></li>
                                        <li><Link to="/Styles">Styles</Link></li>
                                        <li><Link to="/Blog">Blog</Link></li>
                                        <li><Link to="/Cherry">Cherry</Link></li>
                                        <li><Link to="/Contacts">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="meniuWhere">
                            <p><span style={{color:'#95161f'}}>{this.props.seelocation}/</span> </p>
                        </div>
                    </div>
            );
         }
}


const mapStateToProps= (state) =>{
    return {
        seelocation: state.reducerLocation,
        
    }
}
export const Menu = connect(mapStateToProps)(Menu2);