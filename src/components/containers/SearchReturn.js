import React from 'react';

export class SearchReturn extends React.Component{
   constructor(props){
       super(props);
       this.state={
           click:false
       }
   }
    render(){
        console.log(this.props.what);
        const search=this.props.item.about.match(/this.props.what/ig);        
        if(this.props.item.date){
            return(
                   
                    <div  className="blogTable" onClick={()=>this.setState({click:!this.state.click})}>
                        <div className="blogName">{this.props.item.name} {this.props.item.surname}</div>
                        <div className="blogDate">{this.props.item.date} {this.props.item.time}</div>
                        {(this.state.click)?<div className="blogText">{(search)?search:null} 
                                                <span className="readMore">Hide</span>
                                            </div>:                                               
                                            <div className="blogText">{this.props.item.about.substring(0,200)}...
                                                <span className="readMore">Read more</span>
                                            </div>}
                    </div>
                 );
        }else{
            return(
                  
                    <div  className="blogTable" onClick={()=>this.setState({click:!this.state.click})}>
                        <div className="blogName">{this.props.item.name}</div>
                        {(this.state.click)?<div className="blogText">
                                                <div>{this.props.item.words}</div>
                                                <div><p>Chords:</p>{this.props.item.chords}</div> 
                                                <span className="readMore">Hide</span>
                                            </div>:                                               
                                             <div className="blogText">{this.props.item.words.substring(0,200)}...
                                                 <span className="readMore">Read more</span>
                                            </div>}
                    </div>
                 );}
          
        }    

}