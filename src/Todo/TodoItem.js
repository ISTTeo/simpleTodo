import React from 'react'
import './App.css';
import TimerApp from './../Timer/TimerApp'

function TodoItem(props) {
    if (props.item.completed) {
      return (
          <div>
              <input
                  type="checkbox"
                  checked={props.item.completed}
                  onChange={() => props.checkIt(props.item.id)}
              />
              <button onClick={() => props.delTodo(props.item.id)}>X</button>
              {props.item.text}
          </div>
      )
    } else {
      return (
        <div className="todoItem">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.checkIt(props.item.id)}
            />
            {props.item.text}
            <TimerApp/>


        </div>
      )
    }

}
export default TodoItem
