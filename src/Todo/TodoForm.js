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
    
      <form onSubmit={this.handleSubmit}>
        <label>
          New todo:
        </label>
          <input type="text" ref={(input) => this.input = input}/>

      </form>
    )
  }
}

export default TodoForm
