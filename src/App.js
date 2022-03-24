import React, { Component } from 'react';
import { Overview } from './components/Overview';
import './App.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

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

  deleteTask(buttonID) {
    this.setState({
      tasks: this.state.tasks.filter(function (task) {
        return task.id !== buttonID;
      }),
    });
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
          <Overview
            tasks={tasks}
            delete={this.deleteTask.bind(this)}
          ></Overview>
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  text: PropTypes.string,
};

// 1 Return skeleton JSX. Destructure state for cleaner code.
// 2 Define a task-object in state, containing the keys "text" and "id"
// 3 Set eventhandler on input field to execute handleChange on every event(input)
// 4 handleChange: set state "text" key to be the current text in the input field
// 5 Set eventhandler on submit button to excute handleClick
// 6 handleClick: add the current task-object to the state.tasks - array
// !! SETSTATE IS ASYNC !!
// 7 Pass in state.tasks as props to Overview component
// 8 return each task via map-method in Overview component
