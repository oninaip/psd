   
            class Clock extends React.Component{
            constructor(props){
            super(props);
            this.state={
                currentTime:(new Date()).toLocaleString('en-GB')
            }
            this.clockLaunched()
        }
            
            clockLaunched(){
                
                setInterval(()=>{
                    this.setState({
                         currentTime:(new Date()).toLocaleString('en-GB')
                
                    })}
                   ,1000)
                
            }

        
                    render(){
                        return <div>{this.state.currentTime}</div>
                
            }
    }