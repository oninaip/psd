import React from 'react';
import {addData,seeLocation} from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ShowData} from './containers/ShowData';


class  Blog extends React.Component{
   constructor(props){
       super(props);
       this.state={
           name:"",
           surname:"",
           about:"",
           open: false,
           nameError:"",
           surnameError:"",
           aboutError:"",
           update:false
       }
       this.changeName=this.changeName.bind(this);
       this.changeSurname=this.changeSurname.bind(this);
       this.changeAbout=this.changeAbout.bind(this);
       this.addArticle=this.addArticle.bind(this);
       this.validation = this.validation.bind(this);
       this.nameValid=this.nameValid.bind(this);
       this.surnameValid=this.surnameValid.bind(this);
       this.aboutValid=this.aboutValid.bind(this);
   }
   
    addArticle(e){
        e.preventDefault();
        this.setState({open:!this.state.open})
        
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
    componentWillMount(){
        this.props.seeLocation(this.props.location.pathname);
    }
    render(){
        
        return (
        <div className="content1">
                <div className="content2">
                    <div className="content_a">
                        <h2>Blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in <a href="/">reprehenderit in voluptate velit esse</a> cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    
                    <div className="content_b">
                         {(this.state.open)? <form>
                            {(this.nameValid)?<span className="error">{this.state.nameError}</span>: null}
                            <input 
                                type="text" 
                                value={this.state.name} 
                                placeholder="Name" 
                                onChange={this.changeName}/>
                            {(this.surnameValid)?<span className="error">{this.state.surnameError}</span>: null}
                            <input 
                                type="text" 
                                value={this.state.surname} 
                                placeholder="Surname" 
                                onChange={this.changeSurname}/>
                            {(this.aboutValid)?<span className="error">{this.state.aboutError}</span>: null}
                            <textarea  
                                placeholder="About" 
                                value={this.state.about} 
                                onChange={this.changeAbout}/>
                            <button  onClick={(e)=>{e.preventDefault();
      if(this.validation()=== true){this.props.addData(this.state.name,this.state.surname,this.state.about);
                            this.setState({name:"", 
                                           surname:"",
                                           about:"",
                                           open:false})}else return}}>Ok</button> 
                        </form> : <div className="addArticle"><button onClick={this.addArticle}>Add</button></div> }
                        <div>{this.props.data.map((data)=>{return(<ShowData key={data.id} items={data}/>);}).reverse()}</div>
                   </div>
                   
                </div>
            </div>
        );

    }
    

}

const MapStateToProps=(state)=>{
    return {
        data:state.reducerData
    }
}
const matchDispatchToProps = (dispatch) =>{
    return{
        addData:bindActionCreators(addData,dispatch),
        seeLocation:bindActionCreators(seeLocation,dispatch)
    }
}
export const BlogWrapped= connect(MapStateToProps,matchDispatchToProps)(Blog);