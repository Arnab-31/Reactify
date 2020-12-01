import React from 'react';
import './Person.css';

const person = (props) => {
    /*const style = {
        '@media (min-width: 500px)': {
            width: '70%'
        },
        '@media (min-width: 300px)': {
            width: '80%'
        }
    };*/
    
    return(
        <div className="Person">
            <h3 onClick={props.click}>I m {props.name} of age {props.age}</h3>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name}></input>
        </div>
    )
}

export default person;