import React from 'react';
import {connect} from 'react-redux';

export class Song2 extends React.Component{
   state={
       onClick:false
   }
handleClick(){ 
    this.setState({onClick:!this.state.onClick})
}

    render(){
            return(
                    <div className="song">
                        <div className="songList">
                            <span onClick={this.handleClick.bind(this)} >
                                    {this.props.song.name}
                            </span>
                        </div>
                            {(this.state.onClick)?
                                <div  className="songText">
                                    <div className="close"><button type="button" onClick={this.handleClick.bind(this)}>&times;</button></div>
                                    <h2>{this.props.song.name}
                                    </h2>
                                    <div>{this.props.song.words}</div>
                                    <div><p>Chords:</p>{this.props.song.chords}</div>
                                </div>:null
                            }  
                    </div>
                );
        }    
}
const mapStateToProps=(state)=>{
 return {songs:state.reducerSong}   
}

export const Song=connect(mapStateToProps)(Song2);