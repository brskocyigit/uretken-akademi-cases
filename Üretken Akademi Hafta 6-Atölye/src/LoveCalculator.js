
import React, { Component } from "react";


export default class LoveCalculator extends Component {
  state = { value: 0 , result:""};

  calculate() {
    let firstName = document.getElementById("firstName").value;
    let secondName = document.getElementById("secondName").value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '93bd14c682msh154632db4afaf13p1c2a9ejsn88fcfa26acc6',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${secondName}&fname=${firstName}`, options)
        .then(response => response.json())
        .then(response => this.setState({value:response.percentage, result:response.result}))
        .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Love Calculator</h1>
        <input type="text" placeholder="firstName" id="firstName" />
        <input type="text" placeholder="secondName" id="secondName" />
        <button onClick={this.calculate.bind(this)}>Calculate</button>
        <h1>{this.state.value}</h1>
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}
