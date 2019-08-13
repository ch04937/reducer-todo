export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
  
export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMPLETED':
        return {
            ...state,
            completed: !state.completed
        };
        case 'UPDATE_TODO':
            return{
                ...state,
                item: action.payload,
                completed: !state.completed
            };
        case 'ADD_TODO':
            return{
                ...state,
                id: new Date()
            }
        
        default:
            return state;
    }
}