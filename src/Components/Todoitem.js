import React from 'react'
import Todo from './Todo'

export const Todoitem = ({todo,onDelete}) => {
    return (
        <div className='container todo my-3'>
            <h3 className='my-3'>
                Todos List
            </h3>
            {todo.length!==0?todo.map((element)=>
            {
                return(
                    <Todo key={element.sno} todo={element} onDelete={onDelete}/>
                )
            }):"Hurrah 🎉 No pending Work "}
        </div>
    )
}
