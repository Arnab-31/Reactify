import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
      {name: 'Arnab', age: 19},
      {name: 'Shubham', age: 21}
    ]
  }

  switchnamehandler = (newName)=> {
    this.setState({
      persons: [
        {name: `Arnab ${newName}`, age: 19},
        {name: `Shubham ${newName}`, age: 21}
      ]
    })
  }

  namechnangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 19},
        {name: `Shubham Panda`, age: 21}
      ]
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

    return (
      <div className="App">
        <h1>Hi, This is a Class Component in react!</h1>
        <p>This is really cool!</p>
        <button style={style} onClick={this.switchnamehandler.bind(this,'Poddar')}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchnamehandler.bind(this, 'Poddar')} changed = {this.namechnangeHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchnamehandler.bind(this, 'Panda')}>
            I like coding!
        </Person>
      </div>
    );
  }
}

export default App;
