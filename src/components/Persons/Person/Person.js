import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithClass from '../../../hoc/WithClass';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    render() {
        return ( 
         <Aux>
            <p key="1" onClick={this.props.click}>I'm a { this.props.name } and I am { this.props.age } years old !</p>
                <p key="2">{this.props.children}</p>
                <input key="3" type="text" 
                onChange={this.props.changed} 
                value={this.props.name}  />
         </Aux>
        );
             
       
           
                
        
    }
}

Person.propTypes = {

 click: PropTypes.func,
 name: PropTypes.string,
 age: PropTypes.number,
 changed: PropTypes.func

};

export default WithClass(Person, classes.Person);