import React from 'react';
import {connect} from 'react-redux';
import {Error} from './Error';
import {Link} from 'react-router-dom';

class  History2 extends React.Component{
          
    render(){
         
         const what=this.props.user.name;
         const searchName= this.props.credit.filter(word=>word.name.includes(what));
        if(this.props.user.name=== "" || this.props.user.code === "" || !this.props.user.name || !this.props.user.code ){ 
            return <Error />
       }
        return (
        <div className="history"><h3>Your History,{this.props.user.name}!</h3>
            <div className="CreditData" >
               
                 {searchName.map((credit,id)=>{
                    return(
                        <div key={id}>
                            <div className="small"><span>{credit.date}</span> </div>
                            <p><span className="red">Loan amount:</span> {credit.money} €</p>
                            <p><span className="red">Rates:</span> {credit.rates} € </p>
                            <p><span className="red">Refund amount: </span>{credit.suma} €  </p>
                            <p><span className="red">up to </span>{credit.newDate}</p> 
                        </div>
                    )
            })}
            </div>

            <div className="input"><Link to="/Sliders"><input type="button" value="Back"/></Link></div>
        </div>
        );
    }
}
const mapStateToProps= (state) =>{
    return {
        credit: state.reducerHistory,
        user: state.reducerUser
    }
}

export const History = connect(mapStateToProps)(History2);