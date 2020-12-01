import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person,index) => {
    return <Person 
            name={person.name} 
            age={person.age}
            click = {() => props.clicked(index)}          //alternative to binding syntax
            key={person.id}                                         //Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
            changed={(event)=>props.changed(event, person.id)}
          />
});


export default persons;