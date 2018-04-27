import React from 'react';

export class ContactsAbout extends React.Component{
     constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleOn=this.handleOn.bind(this);
        this.state={
            handleOn:false
        }
        
    }
   
    handleOn(contact){
        console.log(contact);
        
                                
    }
    handleClick(){
        this.setState({
            handleOn:!this.state.handleOn
        });
        
    }
    render(){
        return(  <div>
                    <div className="panel" key={this.props.items.id}>
                            <a onClick={this.handleClick}>
                                <h3>{this.props.items.name} {this.props.items.surname}</h3>
                                <div className="shadow"><img src={this.props.items.foto} alt="photoUser"/></div>
                            </a>
                    </div>
                    <div className="panel2">
                            {(this.state.handleOn)&&<span className="contactAbout" onClick={this.handleClick}> 
                            <p>{this.props.items.profession}</p>
                            <p><a href={"tel:" + this.props.items.number}>{this.props.items.number}</a></p></span>}</div>
                    </div>
        
        );
    }
}


