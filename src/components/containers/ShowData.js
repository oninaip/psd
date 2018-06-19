import React from 'react';
import {removeData,updateData} from '../store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';


class showData2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
           update:false,
           name:this.props.items.name,
           surname:this.props.items.surname,
           about:this.props.items.about,
           nameError:"",
           surnameError:"",
           aboutError:"",
       }
       this.changeName=this.changeName.bind(this);
       this.changeSurname=this.changeSurname.bind(this);
       this.changeAbout=this.changeAbout.bind(this);
       this.validation = this.validation.bind(this);
       this.nameValid=this.nameValid.bind(this);
       this.surnameValid=this.surnameValid.bind(this);
       this.aboutValid=this.aboutValid.bind(this);
       
    }
    changeName(e){
       this.setState({
           name:e.target.value
       })
   }
   changeSurname(e){
       this.setState({
           surname:e.target.value
       })
   }
   changeAbout(e){
        this.setState({
           about:e.target.value
       })
    }
      validation(){ 
    return this.nameValid(this.state.name) && this.surnameValid(this.state.surname) && this.aboutValid(this.state.about) ;
        
}
    nameValid(name){
        var nameError="";
        if(name === "" ){
            nameError="Can't be empty";
            this.setState({nameError:nameError});
            return false
        }
        this.setState({nameError:nameError});
        return true;
    }
    surnameValid(surname){
        var surnameError="";
        if(surname === "" ){
            surnameError="Can't be empty";
            this.setState({surnameError:surnameError});
            return false
        }
        this.setState({surnameError:surnameError});
        return true;
    }
    aboutValid(about){
        var aboutError="";
        if(about === "" ){
            aboutError="Can't be empty";
            this.setState({aboutError:aboutError});
            return false
        }
         else if(about.length < 30){
            aboutError="Must be more letters (min 30)";
            this.setState({aboutError:aboutError});
            return false
        }
        this.setState({aboutError:aboutError});
        return true;
    }
    
    render(){
       
        if(this.state.update) {
           return(
            <div className="blogTable" >
                        <div className="blogName">
                            <div className="updateForm">
                                {(this.nameValid)?<span className="error">{this.state.nameError}</span>: null}
                                <input type="text" value={this.state.name} onChange={this.changeName}/>
                                 {(this.surnameValid)?<span className="error">{this.state.surnameError}</span>: null}
                                <input type="text" value={this.state.surname} onChange={this.changeSurname}/>
                            </div>
                      </div>
                        <div className="blogText">
                            {(this.aboutValid)?<span className="error">{this.state.aboutError}</span>: null}
                            <textarea  value={this.state.about} onChange={this.changeAbout}/> 
                        </div>
                        <div className="update">
                            <Link to="/Blog"><button 
                                  onClick={(e)=>{
                                    if(this.validation()=== true){
                                    this.props.updateData(this.props.items.id,this.state.name,this.state.surname,this.state.about);
                                    this.setState({update:false})}else return}}>Update</button>
                            </Link>
                        </div>
                      </div>
           )
       }else{
            return (<div className="blogTable" >
                        <div className="blogName">{this.props.items.name} {this.props.items.surname}
                           <div>
                                <input type="button" 
                                        className="blogList" 
                                        value="remove" 
                                        onClick={()=>this.props.removeData(this.props.items.id) }/>
                                <input type="button" 
                                        className="blogList" 
                                        value="edit" 
                                        onClick={()=>{this.setState({update:true})}}/>
                            </div>
                      </div>
                        <div className="blogDate">{this.props.items.date} {this.props.items.time}</div>
                        <div className="blogText">{this.props.items.about} </div>
                        
                      </div>);
                    
         
    }
       
    }}
    
const MapStateToProps=(state)=>{
    return {
        data:state.reducerData
    }
}

const matchDispatchToProps = (dispatch) =>{
    return{
        removeData:bindActionCreators(removeData,dispatch),
        updateData:bindActionCreators(updateData,dispatch)
    }
}
export const ShowData= connect(MapStateToProps,matchDispatchToProps)(showData2);