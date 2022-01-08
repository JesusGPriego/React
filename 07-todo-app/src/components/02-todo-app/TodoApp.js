import React ,{ useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';


const init = () =>{
    // return []
    //if null it returns an empty array.
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


    useEffect(() => {
        //save todos in local storage:
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos]);

    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId,
        }
        dispatch(action);
    }

    const handleToggle = (index) => {
        const action = {
            type: 'toggle',
            payload: index
        }
        dispatch(action);
    };

    const handleAddTodo = (newTodo) => {

        dispatch({
            type:'add',
            payload: newTodo,
        });        
    }

    return (
        <>
            <h1>To-Do App ({todos.length})</h1>    
            <hr />
            <div
                className='row'
            >
                <div className='col-7'>
                    <h4>To-Dos</h4>
                    <hr/>
                    {/* todos, handleDelete, handleToggle */}
                   <TodoList props={[todos, handleDelete, handleToggle]}/>
                </div>
                <div className='col-5'>
                   <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </>
    )
}
