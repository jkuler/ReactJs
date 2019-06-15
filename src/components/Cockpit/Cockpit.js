import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (Persn) => {
    useEffect(() => {
      console.log('Cockpit.js UseEffect');
    });
    
    const assignedClasses = [];
    let btnClass = '';

    if (Persn.showPersons){
        btnClass = classes.Red;
    }

    if (Persn.persons.length <= 2) {
      assignedClasses.push( classes.red ) // classes
    }
    if (Persn.persons.length <= 1) {
      assignedClasses.push( classes.bold ) // classe red and bold
    }


    return (
        <div className={classes.Cockpit}>
        <h1>{Persn.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button className={btnClass}
                    onClick={Persn.clicked}>Togger Persons</button>
        </div>
    );
};

export default cockpit;