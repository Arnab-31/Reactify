import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from  './Validation/Validation'

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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person 
                      name={person.name} 
                      age={person.age}
                      click = {() => this.deletePersonHandler(index)}          //alternative to binding syntax
                      key={person.id}                                         //Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
                      changed={(event)=>this.namechnangeHandler(event, person.id)}
                    />
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, This is a Class Component in react!</h1>
        <p>This is really cool!</p>
        <button style={style} onClick={this.toggleshowPerson}>Toggle Persons</button>
        {persons}
        <input onChange={(event)=>this.parachangeHandler(event)} placeholder="No text yet" />
        <p>{this.state.paraLength}</p>
        <Validation length={this.state.paraLength} />
      </div> 
    );
  }
}

export default App;
