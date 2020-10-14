import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className="Person">
            <h3 onClick={props.click}>I m {props.name} of age {props.age}</h3>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name}></input>
        </div>
    )
}

export default person