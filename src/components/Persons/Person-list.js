
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

//  static geDerivedStateFromProps(props, state) {

//     console.log('Persons-list.js getDerivedStateFromProps');
//     return state;
//  }

//  componentWillReceiveProps(props){
//     console.log('[person-list.js] componentWillReceiveProps', props);
//  }

//   shouldComponentUpdate(nextProps, nextState) {

//      console.log('Person-list.js ShouldComponentUpdate'); 
//      if (nextProps.persons !== this.props.persons || 
//         nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
//          return true;
//      } else {
//          return false;
//      }
//     // return true;
//   }

  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('Person-list.js getsnapshotBeforeUpdate')
      return { message: 'snapshot !'}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
      console.log('[Persons.js] componentDidUpdate');
      console.log(snapshot);
  }

  componentWillUnmount(){
      console.log('person-list.js componentWillUnmount')
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
