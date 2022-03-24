import React, { Component } from 'react';
import { Overview } from './components/Overview';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      tasks: [],
    };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick() {
    const { tasks, input } = this.state;
    /* this.setState({ task: this.state.input }); */
    if (input !== '') {
      this.setState({ tasks: [...tasks, input] }, () => {
        console.log(this.state.tasks);
      });
      this.setState({ input: '' });
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
          <Overview tasklist={tasks}></Overview>
          {/* <Overview tasklist={this.state.tasks}></Overview> */}
        </div>
      </div>
    );
  }
}

export default App;

// 1 Return skeleton JSX & set needed state
// 2 Set eventhandler on input field to execute handleChange on every event(input)
// 3 handleChange: set state of a temporary "input" key to be the current text in the input field
// 4 Set eventhandler on submit button to excute handleClick
// 5 handleClick: add the current state.input to the state.tasks-array
// !! SETSTATE IS ASYNC !!
// 6 Pass in state.tasks as props to Overview component
// 7 return each task via map-method in Overview component
