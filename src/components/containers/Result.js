import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class  Result2 extends React.Component{
   
              
    render(){
        return (
        
        <div className="history"><h3>Thank You,{this.props.user.name}!</h3>
            <div className="CreditData" >
                 <div  className="credit">
                    <p><span className="red">Loan amount:</span> {this.props.credit.money} €</p>
                    <p><span className="red">Rates:</span> {this.props.credit.rates} € </p>
                    <p><span className="red">Refund amount: </span>{this.props.credit.suma} €  </p>
                    <p><span className="red">up to </span>{this.props.credit.newDate}</p>     
                    <Link to="/Sliders/History"><input type="submit" value ="History" /></Link>
                </div>
                <div className="term"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Link to="/Sliders/Extend"><input type="button" className="extend" value ="Extend" /> </Link>
                </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps= (state) =>{
    return {
        credit: state.reducerCredit,
        user: state.reducerUser
    }
}

export const Result = connect(mapStateToProps)(Result2);