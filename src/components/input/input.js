import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component{
static propTypes = {
        placeholder: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        error: PropTypes.string
    }
constructor(props){
    super(props);
    const {value}=this.props;
    this.state={value:this.props.placeholder};
    
}


render(){
    return (
        <div>
            <input 
                type ="text" 
                placeholder = {this.state.value}
                />
        {this.props.error? <span>{this.props.error}</span> : null }
        </div>
    );

    
}

}
