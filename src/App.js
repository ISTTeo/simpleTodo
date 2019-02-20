import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todosData from "./todosData"
import TodoItem from "./TodoItem"
import TodoForm from './TodoForm'
import Timer from './Timer/Timer'
class App extends Component {

	constructor() {
		super()
		this.state = {
			todos: todosData
		}
    this.delTodo = this.delTodo.bind(this)
		this.checkIt = this.checkIt.bind(this)
		this.delCompletedTodos = this.delCompletedTodos.bind(this)
		this.addTodo = this.addTodo.bind(this)
		this.componentDidMount()
  }

	componentDidMount() {
    const state = JSON.parse(window.localStorage.getItem("saved_state"));

    console.log(state);

    if (state) {
      this.loadState(state);
    }
  }

	componentDidUpdate() {
    const state = {
      todos: this.state.todos
    };

    window.localStorage.setItem("saved_state", JSON.stringify(state));

  }

	loadState = ({ todos }) => {
    this.state.todos = todos
  }

  delCompletedTodos() {
		const allTodos = this.state.todos
		const filtered = allTodos.filter(todo => !todo.completed)
		this.setState({todos:filtered})

  }

	delTodo(id) {
		const allTodos = this.state.todos
		const filtered = allTodos.filter(todo => todo.id !== id)
		this.setState({todos:filtered})
	}

	checkIt(id) {
		const allTodos = this.state.todos
		const filtered = allTodos.filter(x => x.id !== id)
		this.setState(prevState => {
			const updatedTodos = this.state.todos.map( todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
			return {
				todos:updatedTodos
			}
		})
	}
	addTodo(value) {
		const allTodos = this.state.todos
		const lastTodo = this.state.todos.slice(-1)[0]
		const newId = lastTodo.id + 1
		const newTodo = {id: newId, text: value, completed:false}
		allTodos.push(newTodo)
		this.setState({todos:allTodos})
	}

  render() {
    const todoItems = this.state.todos.map( item =>
      <TodoItem
        key={item.id}
        item={item}
        delTodo={this.delTodo}
				checkIt={this.checkIt}
      />
    )
		const text = ""
    return (
      <div>
        {todoItems}
				<button onClick = {this.delCompletedTodos}> Deleted Completed </button>
				<TodoForm addTodo={this.addTodo} todos={this.state.todos}/>
				<Timer/>
      </div>
		);
  }
}

export default App;
