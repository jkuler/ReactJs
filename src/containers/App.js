import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/errorBoundary';
import classes from '..containers';
import Persons from '../components/Persons/Person-list';



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

  
  nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex( p => {
     return p.userId === id;
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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
         persons = (
          <div>
            <Persons persons = {this.state.persons} 
                     clicked={this.deletePersonHandler}
                     changed={this.nameChangedHandler} /> 
        </div>
         );

       btnClass = classes.Red;
    }
    // css classes

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red ) // classes
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold ) // classe red and bold
    }

    return (

         <div className={classes.App}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button className={btnClass}
                    onClick={this.togglePersonsHandler}>Togger Persons</button>
            { persons }
         </div>
    
    )
    //  return React.createElement('div', { className: 'App'}, 
    //                     React.createElement('h1', null, 'I\'m here now'))
  }
}

export default App;
