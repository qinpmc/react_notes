import React from 'react';
import ReactDOM from 'react-dom';
 
class WelcomeSon extends React.Component{
    render(){
        return <h1>Hello,{this.props.name}</h1>
    }
}

function App(){
    return (
        <div name="parent">
            <WelcomeSon name='sara' />
            <WelcomeSon name='cahal' />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)