export const initialState = {
    todos: [
        {
            item: "Learn about reducers",
            completed: false,
            id: 3892987589
        },
        {
            item: "Get jiggy with it",
            completed: false,
            id: 3892987581
        }
    ]
};

export function todoReducer(state, action) {
    switch(action.type) {
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => (
                    todo.id === action.payload 
                    ? {...todo, completed: !todo.completed}
                    : todo
                ))
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.payload;
                })
            };
        case "ADD_TODO":
            return {
                ...state,
                todos: state.todos.concat({
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                })
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(({completed}) => !completed)
            };
        default:
            return state;
    }
}