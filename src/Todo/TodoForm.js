import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault() //meter depois

    this.props.addTodo(this.input.value,this.props.todos)
  }

  render() {
    return (
      <div className='header'>
        <h2 >My To Do List</h2>
        <form onSubmit={this.handleSubmit}>
            <input type="text" ref={(input) => this.input = input}/>
        </form>
      </div>
    )
  }
}

export default TodoForm
