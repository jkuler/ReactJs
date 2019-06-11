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
    otherState: 'some text here',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("was clicked !");
  //   // this.state.persons[0].name = 'Jkula'
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28 },
  //       {name: 'dunga', age: 31 },
  //       {name: 'Kaboul', age: 24 }
  //     ],
  //   })
  // }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id: 'sdefaf', name: 'Max', age: 28 },
        { id: 'derafas', name: event.target.value, age: 31 },
        { id: 'sdasdsf',name: 'Kaboul', age: 27 }
      ],
    })
  }

  deletePersonHandler = (personIndex) => {
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
     persons.splice(personIndex, 1);
     this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({ showPersons: !doesShow })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1xp solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
         persons = (
          <div>
            { this.state.persons.map( (persnObj, index)  => {
               return <Person click = {() => this.deletePersonHandler(index)} 
                              name={persnObj.name} 
                              age={persnObj.age}
                              key={persnObj.id} />
            })}
        </div>
         );
    }
    return (
         <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is working</p>
            <button style={style} 
                    onClick={this.togglePersonsHandler}>Togger Persons</button>
            { persons }
         </div>
    )
    //  return React.createElement('div', { className: 'App'}, 
    //                     React.createElement('h1', null, 'I\'m here now'))
  }
}

export default App;
