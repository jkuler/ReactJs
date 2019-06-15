import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = (Persn) => {
    useEffect(() => {
      console.log('Cockpit.js UseEffect');

      // setTimeout(() => {
      //   alert('Save new data')
      // }, 1000)
      return () => {
        console.log('[Cockpit.js] cleanup work');
      }
    }, []);

    useEffect(() => {
      console.log('[cockpit.js] 2nd useEffect')
      return () => {
        console.log('[Cockpit.js] cleanup work for 2nd useEffect');
      }
    })
    
    const assignedClasses = [];
    let btnClass = '';

    if (Persn.showPersons){
        btnClass = classes.Red;
    }

    if (Persn.personsLength <= 2) {
      assignedClasses.push( classes.red ) // classes
    }
    if (Persn.personsLength <= 1) {
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

export default React.memo(Cockpit);