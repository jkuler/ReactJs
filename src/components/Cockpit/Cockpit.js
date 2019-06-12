import React from 'react';

import classes from './cockpit.css';

const cockpit = (Persn) => {

    const assignedClasses = [];
    let btnClass = '';
    
    btnClass = classes.Red;

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
        <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button className={btnClass}
                    onClick={this.togglePersonsHandler}>Togger Persons</button>
        </div>
    );
};

export default cockpit;