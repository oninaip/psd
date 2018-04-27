import React from 'react';
import {Link} from 'react-router-dom';
import {newCredit} from '../store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Credit2 extends React.Component {
    
constructor(props){
        super(props);
        this.state={
        value:0,
        value2:0,
        nameSur:"Vardas Pavarde",
        email:"e-mail",
        kodas:"asmens kodas"
    }
this.handleChange=this.handleChange.bind(this); 
this.handleChange2=this.handleChange2.bind(this);
}         
handleChange(event){
    this.setState({
        value:event.target.value
                  })   
}
handleChange2(event){
    this.setState({
        value2:event.target.value
    })    
}
    

  render() {
    
    const money=this.state.value;
    const days= this.state.value2;
    const rates = ((money / 10 * days) / 3.65).toFixed(2);
    const suma = (money*1 + rates*1 ).toFixed(2);
    const year =  (new Date()).getYear() +1900;
    const newDay = (new Date().getDate()) *1  + days*1;
    const month = (new Date()).getMonth();
    const newDate = (new Date(year,month,newDay)).toLocaleDateString('ko-KR').slice(0, -1);  

    return (
           
                    <div className="app2">  
                        <div className="money">Loan amount: {this.state.value} €</div>
                        <div className="sliderMoney">
                             <input type="range" min="0" max="400" className="slider" value={this.state.value} onChange={this.handleChange}/>
                        </div>
                        <div className="money2"><span>0</span><span>400</span></div>
                        <div className="date">Deadline: {this.state.value2} d.</div>
                        <div className="sliderDate">
                            <input type="range" min="0" max="30" className="slider"  value={this.state.value2} onChange={this.handleChange2} />
                        </div>
                        <div className="money2"><span>0</span><span>30</span></div>
                        <div className="result">
                            <p>Loan amount: {this.state.value} €</p>
                            <p>Rates: {rates} € </p>
                            <p>Refund amount: {suma} € up to {newDate}</p>   
                        </div>
                        <div className="input">
        
        <Link to="/Sliders/DataUser"><input type="submit" value="Apply now" onClick={()=>{this.props.newCredit(money, days,rates,suma,newDate,newDay,year,month)}}/></Link></div>
                    </div>
                
        );
    }
}

const mapStateToProps= (state) =>{
    return {
        credit: state.reducerCredit
    }
}
const matchDispatchToProps = (dispatch) => {
    return {
        newCredit : bindActionCreators(newCredit, dispatch)
    }
}
export const Credit = connect(mapStateToProps,matchDispatchToProps)(Credit2);