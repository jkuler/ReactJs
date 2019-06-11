import React from 'react';
import './Person.css';

const person = (Persn) => {

    return(
        <div className="Person">
            <p onClick={Persn.click}>I'm a { Persn.name } and I am { Persn.age } years old !</p>
            <p>{Persn.children}</p>
            <input type="text" onChange={Persn.changed}  />
        </div>
    ) 
}

export default person;