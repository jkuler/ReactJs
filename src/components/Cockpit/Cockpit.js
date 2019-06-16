import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const Cockpit = (Persn) => {

    const toggleBtnRef = useRef(null);
    const authContxt = useContext(AuthContext);

    console.log(authContxt.authenticated);

    useEffect(() => {
      console.log('Cockpit.js UseEffect');

      // setTimeout(() => {
      //   alert('Save new data')
      // }, 1000)
      toggleBtnRef.current.click()
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
            <button ref={toggleBtnRef} className={btnClass}
                    onClick={Persn.clicked}>Togger Persons</button>
     
              <button onClick={authContxt.login}>Login</button>
            
        </div>
    );
};

export default React.memo(Cockpit);