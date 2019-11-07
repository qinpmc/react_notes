import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing:true,
            numberOfGuests:2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type==="checkbox" ? target.checked:target.value;
        const name = target.name;
        this.setState({[name]:value})
    }
    handleSubmit(event){
        alert('a name was submitted: '+ this.state.numberOfGuests);
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Is goging:
                    <input name='isGoing' type='checkbox' checked ={this.state.isGoing} 
                    onChange={this.handleInputChange} />
                </label>
                <br /> 
                <label>
                Number of guests:
                <input name='numberOfGuests' type='number' checked ={this.state.numberOfGuests} 
                onChange={this.handleInputChange} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
)