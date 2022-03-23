import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      task: '',
    };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick() {
    this.setState({ task: this.state.input });
  }

  render() {
    return (
      <div>
        <div className="container">
          <label htmlFor="taskInput">Input Task</label>
          <input
            type="text"
            name="taskInput"
            /* onChange={this.handleChange.bind(this)} */
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={() => this.handleClick()}>Submit</button>
          <h1>{this.state.task}</h1>
        </div>
      </div>
    );
  }
}

export default App;
