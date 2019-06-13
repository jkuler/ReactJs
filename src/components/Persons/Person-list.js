
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

 static geDerivedStateFromProps(props, state) {

    console.log('Persons-list.js getDerivedStateFromProps');
    return state;
 }

//  componentWillReceiveProps(props){
//     console.log('[person-list.js] componentWillReceiveProps', props);
//  }

  shouldComponentUpdate(nextProps, nextState) {

     console.log('Person-list.js ShouldComponentUpdate'); 
     return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('Person-list.js getsnapshotBeforeUpdate')
      return { message: 'snapshot !'}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
      console.log('[Persons.js] componentDidUpdate');
      console.log(snapshot);
  }

   render(){
        console.log('Person.js rendering...');

            return this.props.persons.map( (persnObj, index)  => {
            
                return <Person click = {() => this.props.clicked(index)} 
                            name={persnObj.name} 
                            age={persnObj.age} 
                            changed = {(event) => this.props.changed(event, persnObj.id)}
                            key={persnObj.id} />
                    
            });
    
   }

}



     export default Persons;
