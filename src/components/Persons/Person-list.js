
import React from 'react';
import Person from './Person/Person';

const persons =  (persn) => persn.persons.map( (persnObj, index)  => {
        return <Person click = {() => persn.clicked(index)} 
                       name={persnObj.name} 
                       age={persnObj.age} 
                       changed = {(event) => persn.changed(event, persnObj.id)}
                       key={persnObj.id} />
             
     });


     export default persons;
