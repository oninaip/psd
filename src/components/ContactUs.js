import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


export class ContactUs extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nameValue:"Your Name",
            numberValue:"Daytime Number",
            emailValue: "Email Address",
            cityValue :"City",
            selectValue:"Problem With",
            selectValue2:"Brand"
        }
        this.nameInput=this.nameInput.bind(this);
        this.numberInput=this.numberInput.bind(this);
        this.emailInput=this.emailInput.bind(this);
        this.cityInput=this.cityInput.bind(this);
        this.selectOption=this.selectOption.bind(this);
        this.selectOption2=this.selectOption2.bind(this);
    }
    nameInput(e){
        this.setState({nameValue:e.target.value})
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
    render(){
        return (
            <div className="contactUs">
                <div className="contactUs1">
                    <h3>Contact Us</h3>
                    <form>
                        <input type="text" placeholder={this.state.nameValue} onChange={this.nameInput} />
                        <input type="text" placeholder={this.state.numberValue} onChange={this.numberInput} />
                        <input type="text" placeholder={this.state.emailValue} onChange={this.emailInput} />
                        <input type="text" placeholder={this.state.cityValue} onChange={this.cityInput} />
                        <select value={this.state.selectValue} onChange={this.selectOption}>
                             <option value="Problem With" >Problem With</option>
                             <option value="123">123</option>
                             <option value="456">456</option>
                        </select>
                        <select value={this.state.selectValue2} onChange={this.selectOption2}>
                             <option value="Brand" >Brand</option>
                             <option value="123">123</option>
                             <option value="456">456</option>
                        </select>
                        <button type="submit">Lorem ipsum dolor</button>
                        
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
                        aliquip ex ea commodo <Link to="/">More about</Link>
                    </p>
                </div>
            </div>
        );
    }
}
