import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/errorBoundary';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Person-list';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {

  constructor(AppObj){
      super(AppObj);


      console.log('app.js constructor')
  }

  state = {
    persons: [
      { id: 'sdefaf', name: 'Max', age: 28 },
      { id: 'tsefas', name: 'dunga', age: 31 },
      { id: 'sdeged', name: 'Kaboul', age: 24 }
    ],
    otherState: 'some text here',
    showPersons: false
  }

  static getDerivedStateFromProps(AppObj, state) {
    console.log('App.js getDerivedStateFromProps', AppObj);
    return state;
  }
  // componentWillMount(){
  //   console.log('app.js component willMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  
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
    console.log('App.js render')
    let persons = null;

    if (this.state.showPersons) {
             
        persons =  <Persons persons = {this.state.persons} 
                     clicked={this.deletePersonHandler}
                     changed={this.nameChangedHandler}
                     />  
    }    
    return (

         <div className={classes.App}>
            <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} persons={this.state.persons}
             clicked={this.togglePersonsHandler} />
            { persons }
         </div>
    
    )
    //  return React.createElement('div', { className: 'App'}, 
    //                     React.createElement('h1', null, 'I\'m here now'))
  }
}

export default App;
