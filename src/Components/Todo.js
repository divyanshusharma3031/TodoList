import React from 'react'

export default function Todo(props) {
    return (
        <div className='my-3'>
            <h4>
                {props.todo.title}
            </h4>
            <p>
                {props.todo.description}
            </p>
            <button className="btn btn-sm btn-primary" onClick={()=>{props.onDelete(props.todo)}}>Mark as Done</button>
        </div>
    )
}
