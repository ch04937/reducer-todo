import React, { useState, useReducer } from 'react';

import './Todo.css';

import { initialState, todoReducer } from '../reducers/todoReducer';
//actions
//Toggle-editting
//update-title

const Todo = () => {
    const [ newTodoText, setNewTodoText ] = useState();
    
    const [ state, dispatch ] = useReducer(todoReducer, initialState);
    console.log(state)

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };

    }
    return(
        <div
        // onClick={() => 
        //     dispatch({ type: '', payload: newTodoText}
        // }
        // className={state.item.completed ? 'completed': ''}
            >
        
            <h1>
                {state.item}
            </h1>
            <input 
                className='todo-input'
                type='text'
                name='newTodoText'
                value={newTodoText}
                onChange={handleChanges}
            />
            <button

                onClick={() => 
                    dispatch({ type: 'ADD_TODO', payload: newTodoText})
                }
            >
                ADD_TODO
            </button>
        </div>
    )

export default Todo;