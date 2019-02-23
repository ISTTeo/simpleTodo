import React from 'react'
import './Todo.css';
import TimerApp from './../Timer/TimerApp'

function TodoItem(props) {
    if (props.item.completed) {
      return (
          <li className="checked">
            <div onClick={() => props.checkIt(props.item.id)}>
              {props.item.text}
            </div>
            <label
              onClick={() => props.delTodo(props.item.id)}
              className="close"
            >
              X
            </label>
            <TimerApp />
          </li>
      )
    } else {
      return (
        <li>
          <div onClick={() => props.checkIt(props.item.id)}>
            {props.item.text}
          </div>
        </li>
      )
    }

}
export default TodoItem
