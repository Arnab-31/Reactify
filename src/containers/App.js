import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Validation from  '../components/Validation/Validation';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css'

// function App() {
//   return (
//     <div className="App">
//       <h1>My First React App</h1>
//     </div>
//   );
// }

class App extends Component {
 
  state = {
    persons: [
      {id: '122a', name: 'Arnab', age: 19},
      {id: 'sxw2', name: 'Shubham', age: 21}
    ],
    showPerson: false,
    paraLength: 0
  }

  switchnamehandler = (newName)=> {
    this.setState({
      persons: [
        {name: `Arnab ${newName}`, age: 19},
        {name: `Shubham ${newName}`, age: 21}
      ]
    })
  }

  namechnangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  toggleshowPerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]      //we create a copy using the ... operator, without it we will get back a pointer to the original state
    persons.splice(personIndex,1)
    this.setState({
      persons: persons
    })
  }

  parachangeHandler = (event) => {
    const length = event.target.value.length
    this.setState({
      paraLength: length
    })
  }

  render() {


    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.namechnangeHandler}
          />
        </div>
      )
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.toggleshowPerson}
          />
          {persons}
          <input onChange={(event)=>this.parachangeHandler(event)} placeholder="No text yet" />
          <p>{this.state.paraLength}</p>
          <Validation length={this.state.paraLength} />
        </div> 
    );
  }
}

export default App;
