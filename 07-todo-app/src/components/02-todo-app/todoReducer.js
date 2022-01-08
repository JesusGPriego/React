

export const todoReducer = (state = [], action) => {


    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            const index = action.payload;
            // console.log(state[index].done);
            state[index].done = !state[index].done;
            // console.log(state[index].done);
            return [...state];
        default:
            return state;
            
    }

}