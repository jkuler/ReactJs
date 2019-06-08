import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: 'dunga', age: 31 },
      {name: 'Kaboul', age: 24 }
    ],
    otherState: 'some text here'
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked !");
    // this.state.persons[0].name = 'Jkula'
    this.setState({
      persons: [
        {name: newName, age: 28 },
        {name: 'dunga', age: 31 },
        {name: 'Kaboul', age: 24 }
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28 },
        {name: event.target.value, age: 31 },
        {name: 'Kaboul', age: 27 }
      ],
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1xp solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
         <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is working</p>
            <button style={style} 
                    onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
             <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age }
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler}>My hobbies is Playing guitar</Person>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />

         </div>
    )
    //  return React.createElement('div', { className: 'App'}, 
    //                     React.createElement('h1', null, 'I\'m here now'))
  }
}

export default App;
