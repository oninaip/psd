import React from 'react';
import {connect} from 'react-redux';
import {addHistory} from '../store/actions';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Error} from './Error';

class  Extend2 extends React.Component{
        constructor(props){
        super(props);
        this.state={
            value3:1
        }
        this.handleChange3=this.handleChange3.bind(this);
       
    }
    handleChange3(event){
        this.setState({
            value3:event.target.value
        })    
    }
    
    render(){
        const {rates,suma,year,month,money,newDay} = this.props.credit;
        const days= this.state.value3*1 + newDay*1;
        const rates2=(rates*1+( money*1 / 25 * days) / 3.65).toFixed(2);
        const giveBack= (suma*1+rates2*1).toFixed(2);
        const newDate = (new Date(year,month,days)).toLocaleDateString('ko-KR').slice(0, -1);  
        
        const credit={
            money:money,
            days:days,
            rates: rates2,
            suma:giveBack,
            newDate:newDate,
            name:this.props.user.name,
            email:this.props.user.email,
            code:this.props.user.code,
            date:(new Date()).toLocaleDateString('ko-KR').slice(0,-1)
        }
        if(this.props.user.name=== "" || this.props.user.code === "" || !this.props.user.name || !this.props.user.code ){ 
            return <Error />
       }
        return (
            
           <div className="app2">
                <div className="date">Extend: {this.state.value3} d.</div>
                <div className="sliderDate">
                    <input type="range" min="1" max="15" className="slider" value={this.state.value3} onChange={this.handleChange3} />
                </div>
                <div className="money2"><span>1</span><span>15</span></div>
                <div className="result">
                    <p>Loan amount: {money} €</p>
                    <p>Rates: {rates2} € </p>
                    <p>Refund amount: {giveBack} € up to {newDate}</p>   
                </div>
                <div className="input">
                    <Link to="/Sliders/History">
                        <input type="submit" 
                            value="Extend" 
                            onClick={()=>{this.props.addHistory(credit)}}/>
                    </Link>
                </div>

            </div>
        
        );
    }
}
const mapStateToProps= (state) =>{
    return {
        credit: state.reducerCredit,
        user:state.reducerUser
    }
}
const matchDispatchToProps = (dispatch) => {
    return {
        addHistory : bindActionCreators(addHistory, dispatch)
    }
}

export const Extend = connect(mapStateToProps,matchDispatchToProps)(Extend2);