import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithClass from '../../../hoc/WithClass';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef()
        
    }

    static contextType = AuthContext;

    componentDidMount(){
       this.inputElementRef.current.focus();
       console.log(this.context.authenticated)
    }

    render() {
        return ( 
         <Aux>
            
                 { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> }
             
            <p key="1" onClick={this.props.click}>I'm a { this.props.name } and I am { this.props.age } years old !</p>
                <p key="2">{this.props.children}</p>
                <input 
                key="3" 
                type="text" 
                // ref = {(inputEl) => { this.inputElement = inputEl}}
                ref= {this.inputElementRef}
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