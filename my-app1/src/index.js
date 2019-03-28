import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

function BoilingVerdict(props){
    if(props.celsius >=100){
        return <p>水会烧开</p>
    }
    return <p>水不会烧开</p>
}

class Calculator extends React.Component {
    render() {
      return (
        <div>
          <TemperatureInput scale="c" />
          <TemperatureInput scale="f" />
        </div>
      );
    }
  }

class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});
    }
  
    render() {
      const temperature = this.state.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }



ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)