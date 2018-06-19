import React from 'react';
import {connect} from 'react-redux';
import {SearchReturn} from './SearchReturn';
class SearchResultt extends React.Component{
   
    render(){
        
        const what=this.props.newState;
        const newState = this.props.data;
        const searchName= newState.filter(word=>word.name.includes(what) + word.surname.includes(what) + word.about.includes(what) );
        const songList=this.props.song;
        const searchSong= songList.filter(songs=>songs.name.includes(what) + songs.words.includes(what));
        if(what===""){
            return(
            <div className="content1">
                    <div className="content2">
                        <div className="content_a">
                            <h2 >Search Results</h2>
                        </div>
                        <div className="content_b">                
                                <h4 className="red">No results found</h4>
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
                        <div>   
                                
                                {searchName.map((sea,id)=>{ return (
                                <SearchReturn item={sea} key={id} what={this.props.newState}/> 
                                ) })}
                                {searchSong.map((song,id)=>{ return (
                                <SearchReturn item={song} key={id}/>
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
        newState:state.reducerState,
        song:state.reducerSong
    }
}

export const SearchResult= connect(MapStateToProps)(SearchResultt);