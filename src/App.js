import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerApp from './Timer/TimerApp'
import TodoApp from './Todo/TodoApp'

class App extends Component {

  render() {


    return (
      <div>
				<TodoApp />
      </div>
		);
  }
}

export default App;
