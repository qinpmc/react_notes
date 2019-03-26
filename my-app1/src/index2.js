import React from 'react';
import ReactDOM from 'react-dom';

function Welcome1(props){
    return <h1>Hello,{props.name}</h1>
}

const ele1 = <Welcome1 name="jj" />


class Welcome2 extends React.Component{
    render(){
        return <h1>Hello,{this.props.name}</h1>
    }
}

const ele2 = <Welcome2 name="ss" />

ReactDOM.render(
    ele2, //ele1
    document.getElementById('root')
)