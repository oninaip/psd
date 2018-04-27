import React from 'react';
import {connect} from 'react-redux';
import {addHistory, addUser} from '../store/actions';
import {bindActionCreators} from 'redux';
import {Error} from './Error';
import is from 'is_js';
import {Result} from './Result';
    
 class  DataUser2 extends React.Component{
   constructor(props){
        super(props);
        this.state={
        nameSur:"",
        email:"",
        kodas:"",
        errorName:"",
        errorEmail:"",
        errorCode:"",
        handleClick:false
    }
   this.changeName=this.changeName.bind(this);
   this.changeEmail=this.changeEmail.bind(this);
   this.changeKodas=this.changeKodas.bind(this);
   this.nameValid=this.nameValid.bind(this);
   this.emailValid=this.emailValid.bind(this);
   this.codeValid=this.codeValid.bind(this);
   this.handleClick=this.handleClick.bind(this);
   }
     changeName(event){
    this.setState({nameSur:event.target.value});
     }
     changeEmail(event){
    this.setState({email:event.target.value});
     }
     changeKodas(event){
    this.setState({kodas:event.target.value});
     }

     handleClick(e){
         const date = (new Date()).toLocaleDateString('ko-KR').slice(0,-1);
         e.preventDefault();
         if(!this.valid()){
             return;
          }else{
            this.props.addHistory(this.props.credit, this.state.nameSur,this.state.kodas, this.state.email,date );
            this.props.addUser(this.state.nameSur,this.state.kodas, this.state.email);
            this.setState({
                handleClick:true
            })}
                                                                  
     }
    
     valid(){
        return this.nameValid(this.state.nameSur) && this.emailValid(this.state.email) && this.codeValid(this.state.kodas);
    }
     nameValid(name){
        var err="";
        if(name ===""){
            err="Can't be empty";
            this.setState({errorName:err})
            return false;
        }
        this.setState({errorName:err})
        return true;
    }
     emailValid(email){
         var err="";
        if(email ===""){
            err="Can't be empty";
            this.setState({errorEmail:err})
            return false;
        }else if(!is.email(email)){
            err="Must be email";
            this.setState({errorEmail:err})
            return false;
            
        }
        this.setState({errorEmail:err})
        return true;
     }
     codeValid(code){
         var err="";
        if(code ===""){
            err="Can't be empty";
            this.setState({errorCode:err})
            return false;
        }else if(!is.number(Number(code)) || code.length!==11 ){
            err="Must be code";
            this.setState({errorCode:err})
            return false;
                 }
        this.setState({errorCode:err})
        return true;
     }


       
    render(){
       if(this.props.credit.money=== "0" || this.props.credit.days === "0" || !this.props.credit.money || !this.props.credit.days ){ 
            return <Error />
       }else if (this.state.handleClick === false){
            return (
            <div className="CreditData">
                <div  className="credit">
                    <p><span className="red">Loan amount:</span> {this.props.credit.money} €</p>
                    <p><span className="red">Rates:</span> {this.props.credit.rates} € </p>
                    <p><span className="red">Refund amount: </span>{this.props.credit.suma} €  </p>
                    <p><span className="red">up to </span>{this.props.credit.newDate}</p>     

                </div>
                <div className="adres" >           
                    <form onSubmit={this.clickGo}>
                        {(this.nameValid)?<p className="error">{this.state.errorName}</p>:null}
                        <label><input type="text" placeholder="Name Surname" value={this.state.nameSur} onChange={this.changeName}  /></label>
                        {(this.emailValid)?<p className="error">{this.state.errorEmail}</p>:null}
                        <label><input type="text" placeholder="Email" value={this.state.email} onChange={this.changeEmail} /></label>
                        {(this.codeValid)?<p className="error">{this.state.errorCode}</p>:null}
                        <label><input type="text" placeholder="Personal code" value={this.state.kodas} onChange={this.changeKodas} /></label>
                        <div className="input">
                             <input type="submit" 
                                    value ="Apply now" 
                                    onClick={this.handleClick} /> 
                            
                        </div>
                    </form>
                </div>
            </div>
            );}
           else{return (<Result />)
               
           }
    }
}
const mapStateToProps= (state) =>{
    return {
        credit: state.reducerCredit
    }
}
const matchDispatchToProps = (dispatch) => {
    return {
        addHistory: bindActionCreators(addHistory, dispatch),
        addUser: bindActionCreators(addUser, dispatch)
    }
}
export const DataUser = connect(mapStateToProps,matchDispatchToProps)(DataUser2);