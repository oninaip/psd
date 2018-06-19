import React from 'react';
import {seeLocation} from './store/actions';
import {connect} from 'react-redux';
import {Song} from './containers/Song';
import {bindActionCreators} from 'redux';

class  Cherry2 extends React.Component{
    componentWillMount(){
        this.props.seeLocation(this.props.location.pathname);
    }
    render(){
        
        return (
        <div className="content1">
                <div className="content2">
                    <div className="content_a">
                        <h2>Cherry</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in <a href="/">reprehenderit in voluptate velit esse</a> cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="content_b">
                        {this.props.songs.map((song,id)=>{
            return<Song key={id} song={song} />
        })
               } 
                   </div>

                   
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
 return {songs:state.reducerSong}   
}
const matchDispatchToProps = (dispatch) =>{
    return{
        seeLocation:bindActionCreators(seeLocation,dispatch)
    }
}

export const Cherry=connect(mapStateToProps,matchDispatchToProps)(Cherry2);