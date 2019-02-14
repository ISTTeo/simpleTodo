import React from 'react'

function TodoItem(props) {
    return (
        <div>
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.checkIt(props.item.id)}
            />
            <button onClick={() => props.delTodo(props.item.id)}>X</button>
            <p>
                {props.item.text}
            </p>
        </div>
    )
}
export default TodoItem
