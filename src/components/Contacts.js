import React from 'react';
import katia from "../img/katia.jpg";
import katia2 from "../img/katia2.jpg";
import katia3 from "../img/katia3.jpg";
import {ContactsAbout} from './containers/ContactsAbout';
import {numbers} from './numbers';
import {seeLocation} from './store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const contacts=[
    {name:"Jekaterina",
    surname:"Mys",
    profession:"Developer",
    city:"Vilnius",
    number:"+37067844791",
    foto:katia},
    
    {name:"Igor",
    surname:"Mys",
    profession:"Developer2",
    city:"Riga",
    number:"+37060000000",
    foto:katia2},
    
    {name:"Melodija",
    surname:"Mys",
    profession:"Developer3",
    city:"Kaunas",
    number:"+37060000001",
    foto:katia3}
];
class  Contacts2 extends React.Component{
    componentWillMount(){
        this.props.seeLocation(this.props.location.pathname);
    }
    render(){
        
        return (
        <div className="content1">
                <div className="content2">
                    <div className="content_a">
                        <h2>Contacts</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in <a href="/">reprehenderit in voluptate velit esse</a> cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="content_b">
                   {contacts.map((contact,id)=>{ 
                        return(
                            <ContactsAbout items={contact}   key={id}/> 
                            
                        );
                    })}
                    
                   </div>
                    <div className="locationData">
                        <div className="location">
                                <p><b>Steve Smith</b></p>
                                <p>Hi-Tech Cherry Company</p>
                                <a href="mailto:info@cherrycompany.com">info@cherrycompany.com</a>
                                <p>5104 W. Washington Blvd</p>
                                <p>Los Angeles , CA , 90016 United States</p>
                                <a href="tel:+8002870919" className="tel">(800) 287-0919</a>
                            </div>
                        <div className="location">         
                                <ul>
                                    {numbers.map((num, id)=>{
                                        return <li key={id}><p>{num.who}<a href={'tel:+' + num.number.replace(/[^0-9]/g, "")}> {num.number}</a></p></li>
                                    })}
                                </ul>
                                <p style={{position:"relative",left:"25px"}}>Call Us Toll Free <a href="tel:+18002870919">1-800-287-0919</a></p>
                            </div>
                        </div>

                    <div className="map" style={{overflow:"hidden", height:"230px","marginTop":"100px"}}><iframe title="map" src="https://www.google.com/maps/d/u/0/embed?mid=1COBIPMuIHtWbUZwz2Zrkd5IfaZkC8B60"  style={{"width":"700px","height":"300px", top:"-50px", position:"relative"}}  frameBorder="0"  ></iframe></div>
                </div>
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
 return {seelocation:state.reducerLocation}   
}
const matchDispatchToProps = (dispatch) =>{
    return{
        seeLocation:bindActionCreators(seeLocation,dispatch)
    }
}

export const Contacts=connect(mapStateToProps,matchDispatchToProps)(Contacts2);