import React, { Component } from 'react';
import { Overview } from './components/Overview';
import './App.css';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  handleChange(e) {
    this.setState({ task: { text: e.target.value, id: this.state.task.id } });
  }

  handleClick() {
    const { tasks, task } = this.state;
    if (task.text !== '') {
      this.setState(
        { tasks: [...tasks, task], task: { text: '', id: uniqid() } },
        () => {
          console.log(this.state);
        }
      );
      document.getElementById('inputField').value = '';
    } else {
      alert('no input');
    }
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <div className="container">
          <label htmlFor="taskInput">Input Task</label>
          <input
            type="text"
            name="taskInput"
            id="inputField"
            /* onChange={this.handleChange.bind(this)} */
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={() => this.handleClick()}>Submit</button>
          <Overview tasks={tasks}></Overview>
        </div>
      </div>
    );
  }
}

export default App;

// 1 Return skeleton JSX & set needed state. Destructure state for cleaner code.
// 2 Set eventhandler on input field to execute handleChange on every event(input)
// 3 handleChange: set state of a temporary "input" key to be the current text in the input field
// 4 Set eventhandler on submit button to excute handleClick
// 5 handleClick: add the current state.input to the state.tasks-array
// !! SETSTATE IS ASYNC !!
// 6 Pass in state.tasks as props to Overview component
// 7 return each task via map-method in Overview component
