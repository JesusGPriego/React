import React from 'react'

export const TodoListItem = ({props}) => {
    
    const [todo, i, handleDelete, handleToggle] = props;
    
    return (
        <>
            <li 
                className='list-group-item'
                key={todo.id}
            >
                <p 
                    onClick={() => {
                        handleToggle(i);
                    }}
                    className={`text-center ${todo.done && 'complete'}`}>{i+1}. {todo.desc}
                </p>
                <button 
                    className='btn btn-danger'
                    onClick={() => {handleDelete(todo.id)}}
                >
                    Delete
                </button>
            </li>
        </>
    )
}
