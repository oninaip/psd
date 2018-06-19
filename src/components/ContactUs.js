import React from 'react';
import is from 'is_js';
import Inputmask from "inputmask";


export class ContactUs extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nameValue:"",
            numberValue:"",
            emailValue: "",
            cityValue :"",
            selectValue:"",
            selectValue2:"",
            emailError:"",
            nameError:"",
            numberError:"",
            clickButton:false
        }
        this.nameInput=this.nameInput.bind(this);
        this.numberInput=this.numberInput.bind(this);
        this.emailInput=this.emailInput.bind(this);
        this.cityInput=this.cityInput.bind(this);
        this.selectOption=this.selectOption.bind(this);
        this.selectOption2=this.selectOption2.bind(this);
        this.onClickButton=this.onClickButton.bind(this);
        this.emailValid=this.emailValid.bind(this);
        this.nameValid=this.nameValid.bind(this);
        this.formValid=this.formValid.bind(this);
        this.numberValid=this.numberValid.bind(this);
        
    }
    nameInput(e){
        this.setState({nameValue:e.target.value});
    }
    numberInput(e){
         this.setState({numberValue:e.target.value})
    }
    emailInput(e){
         this.setState({emailValue:e.target.value})
    }
    
    cityInput(e){
         this.setState({cityValue:e.target.value})
    }
    selectOption(e){
        this.setState({selectValue:e.target.value})
    }
    selectOption2(e){
        this.setState({selectValue2:e.target.value})
    }
    onClickButton(e){
        e.preventDefault();
        if (!this.formValid()){return}
        else{
             this.setState({clickButton:!this.state.clickButton});
        };
        
    }
    formValid(){
        return  this.nameValid(this.state.nameValue) && 
            this.numberValid(this.state.numberValue) && this.emailValid(this.state.emailValue);
    }
   
    nameValid(name){
        var nameError="";
        if(name === ''){
           nameError='Can not be empty';
            this.setState({nameError:nameError});
            return false;
           }else if(name.length<3){
                   nameError='Must be more 3 letters';
                    this.setState({nameError:nameError});
                    return false;
               }else if(name === "Name"){
                    nameError='Must be your name';
                    this.setState({nameError:nameError});
                    return false;
               }else{
                   this.setState({nameError:nameError});
                   return true;
               }
               
           }
   

    emailValid(email){
        var emailError="";
        if(email === ''){
           emailError='Can not be empty';
            this.setState({emailError:emailError});
            return false;
           }else if(!is.email(email)){
                   emailError='Must be email';
                    this.setState({emailError:emailError});
               return false;
               }else{
                   this.setState({emailError:emailError});
                   return true;
               }
               
           }
     numberValid(number){
        var numberError="";
        if(number === ''){
           numberError='Can not be empty';
            this.setState({numberError:numberError});
            return false;
           }else{
                   this.setState({numberError:numberError});
                   return true;
               } 
           }
    
    
    render(){
        Inputmask({"mask": "(+9{1,3}) 999 9{4,6}"}).mask(".numberInput");
        if(this.state.clickButton === false ){
        return (
            <div className="contactUs">
                <div className="contactUs1">
                    <h3>Contact Us</h3>
            
                    <form>
                        
                        {this.nameValid? <span className="error">{this.state.nameError}</span> :  null  }
                        <input type="text" placeholder="Your Name" value={this.state.nameValue} onChange={this.nameInput} />
                        {this.numberValid? <span className="error">{this.state.numberError}</span> :  null  }
            
                        <input type="text" className="numberInput" placeholder="Daytime Number" value={this.state.numberValue} onChange={this.numberInput}/>
                        {this.emailValid ?   <span className="error">{this.state.emailError}</span>:   null }
            
                        <input type="text" placeholder="Email Address" value={this.state.emailValue} onChange={this.emailInput} />
                        
                        <input type="text" placeholder="City" value={this.state.cityValue} onChange={this.cityInput} />
            
                        <select placeholder="Problem With" value={this.state.selectValue} onChange={this.selectOption} required={true}>
                             <option value="Problem With" >Problem With</option>
                             <option value="123">123</option>
                             <option value="456">456</option>
                        </select>
                        <select placeholder="Brand" value={this.state.selectValue2} onChange={this.selectOption2} required={true}>
                             <option value="Brand">Brand</option>
                             <option value="123">123</option>
                             <option value="456">456</option>
                        </select>
                        <button type="submit" onClick={this.onClickButton}>Lorem ipsum dolor</button>
                        
                    </form>
                </div>
                <div className="headline">
                    <h3>Headline</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit, sed do 
                        eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo <a href="/">More about</a>
                    </p>
                </div>
            </div>
        );}
        else{
            return (
            <div className="contactUs">
                <div className="contactUs1">
                    <h3>Thank You!</h3>
                    <div className="sendForm">Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit, seddo 
                        eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit, seddo 
                        eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.</div>
                <button type="submit" onClick={this.onClickButton}>Lorem ipsum dolor</button>
                </div>
                <div className="headline">
                    <h3>Headline</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit, sed do 
                        eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo <a href="/">More about</a>
                    </p>
                </div>
            </div>
        );
        }
    }
}
