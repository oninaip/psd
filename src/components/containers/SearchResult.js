import React from 'react';
import {connect} from 'react-redux';

class SearchResultt extends React.Component{
   ComponentDidUpdate(prevProps, prevState){
    
   }
    render(){
        
        const what=this.props.newState;
        const newState = this.props.data;
        const searchName= newState.filter(word=>word.name.includes(what) + word.surname.includes(what) + word.about.includes(what) );
        
        if(what===""){
            return(
            <div className="content1">
                    <div className="content2">
                        <div className="content_a">
                            <h2 >Search Results</h2>
                        </div>
                        <div className="content_b">                
                                
                         </div>   
                    </div>
                </div>);
        }else{
            return(
                
                <div className="content1">
                    <div className="content2">
                        <div className="content_a">
                            <h2 id="searchResult">Search Results</h2>
                
                        </div>
                        <div className="content_b">   
                
                                {searchName.map((sea,id)=>{ return (
                                <div  className="blogTable nameSearch" key={id}>
                                    <div className="blogName" id="nameSearch">{sea.name} {sea.surname}</div>
                                    <div className="blogDate">{sea.date} {sea.time}</div>
                                    <div className="blogText">{sea.about}</div>
                                </div>
                                ) })}
                              
        
                         </div>   
                    </div>
                </div>);
         
                }
    
        
   
        }    

}

const MapStateToProps=(state)=>{
    return {
        data:state.reducerData,
        newState:state.reducerState
    }
}

export const SearchResult= connect(MapStateToProps)(SearchResultt);