import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }

    render(){
        return (
            <div>
                <h1> Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    } 
    componentDidMount(){
        this.timerID  =setInterval(()=>{
            this.tick();
        },1000)
    } 
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );