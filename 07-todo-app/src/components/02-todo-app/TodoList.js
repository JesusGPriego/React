import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({props}) => {
    
    // const {todos, handleDelete, handleToggle} = props;
    const [todos, handleDelete, handleToggle] = props;

    
    return (
        <>
            <ul className='list-group list-group-flush'>
                {
                    todos.map((todo,i) => (
                        <TodoListItem key={todo.id} props={[todo, i, handleDelete, handleToggle]}/>
                    ))   
                }
            </ul>
        </>
    )
}
