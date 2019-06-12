import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'sdefaf', name: 'Max', age: 28 },
      { id: 'tsefas', name: 'dunga', age: 31 },
      { id: 'sdeged', name: 'Kaboul', age: 24 }
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

  nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex( p => {
     return p.id === id;
   })

   const person = { ...this.state.persons[personIndex] };

   person.name = event.target.value;

   const persons = [...this.state.persons];
   persons[personIndex] = person;

    this.setState({ persons: persons })
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
      backgroundColor: 'green',
      color: 'white',
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
                              key={persnObj.id} 
                              changed = {(event) => this.nameChangedHandler(event, persnObj.id)}/>
            })}
        </div>
         );

         style.backgroundColor = 'red';
       
    }
    // css classes

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classe red and bold
    }

    return (

         <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is working</p>
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
