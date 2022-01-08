

const initialState = [
    
    {
        id:1,
        todo:'Aprender más React',
        done:false,
    }

]


const todoReducer = (state = initialState, action) => {

    if(action?.type === 'add'){
        return [
            ...state, 
            action.payload
        ]
    }
    
    return state;
}

const newTodo = {
    id:2,
    todo:'Keep learning React',
    done:false,
}

let todos = todoReducer();

const addAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addAction)


console.log(todos);