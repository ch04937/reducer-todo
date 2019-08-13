import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';
//actions
//Toggle-editting
//update-title

const Todo = () => {
    const [ newTodoText, setNewTodoText ] = useState();
    
    const [ state, dispatch ] = useReducer(todoReducer, initialState);
    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };
    return(
        <div>
            
        </div>
    )
}

export default Todo;