import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     username:'',
     age:null,
    };
  }
 

SubmitHandler=()=>{
debugger;
let name =this.state.username;
let age=this.state.age;
if(!Number(age))
{
alert("should be a number");
}
alert(name + " "+age);

}
  
  textchangeevent=(event)=>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  render() {

 const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (

      
      <div style={mystyle}>
      <form onSubmit={this.SubmitHandler}>
      
     <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.textchangeevent}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.textchangeevent}
      />
     <input type='submit' />
      </form>
      </div>
    );
  }
}



render(<App />, document.getElementById('root'));
