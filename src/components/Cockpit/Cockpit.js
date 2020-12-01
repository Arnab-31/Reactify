import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {


    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }

    let assignedClasses = [];
    if(props.persons.length<=2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1){
        assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hi, This is a Class Component in react!</h1>
            <p className={assignedClasses.join(' ')}>This is really cool!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>  
    );
}

export default cockpit;