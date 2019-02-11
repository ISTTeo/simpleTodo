import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todosData from "./todosData"
import TodoItem from "./TodoItem"
import TodoForm from './TodoForm'
class App extends Component {

	constructor() {
		super()
		this.state = {
			todos: todosData
		}
    this.handleChange = this.handleChange.bind(this)
		this.addTodo = this.addTodo.bind(this)
  }

  handleChange(id) {
		const allTodos = this.state.todos
		const filtered = allTodos.filter(x => x.id !== id)
		this.setState({todos:filtered})

  }

	addTodo(value,todos) {
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
        handleChange={this.handleChange}
      />
    )
		const text = ""
    return (
      <div className="todo-list">
        {todoItems}
				<TodoForm addTodo={this.addTodo} todos={this.state.todos}/>
      </div>
		);
  }
}

export default App;
