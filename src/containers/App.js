import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/errorBoundary';
import classes from '../containers/App.css';
import Persons from '../components/Persons/Person-list';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';

import AuthContext from '../context/auth-context';

import withClass from '../hoc/WithClass';



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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

  componentDidUpdate(){
     console.log('App.js this.componentDidUpdate');
  }

  shouldComponentUpdate(nextProp, nextState){
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  
  nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex( p => {
     return p.id === id;
   })

   const person = { ...this.state.persons[personIndex] };

   person.name = event.target.value;

   const persons = [...this.state.persons];
   persons[personIndex] = person;
    
    
    this.setState((prevState, props) => {
      return { persons: persons, 
              changeCounter: prevState.changeCounter + 1 
             }
    });
      
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

  loginHandler = () =>{
     this.setState({authenticated: true})
  }

  render(){
    console.log('App.js render')
    let persons = null;

    if (this.state.showPersons) {
             
        persons =  <Persons persons = {this.state.persons} 
                     clicked={this.deletePersonHandler}
                     changed={this.nameChangedHandler}
                     isAuthenticated={this.state.authenticated}
                     />  
    }    
    return (

         <Aux>
           <button onClick={() => { 
              this.setState({showCockpit: false})
              }}>
                Remove Cockpit</button>
           <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
              { this.state.showCockpit ? <Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons} 
                personsLength={this.state.persons.length}
                clicked={this.togglePersonsHandler} 
               
             /> : null }
            { persons }
           </AuthContext.Provider>
           
         </Aux>
    
    )
    //  return React.createElement('div', { className: 'App'}, 
    //                     React.createElement('h1', null, 'I\'m here now'))
  }
}

export default withClass(App, classes.App);
