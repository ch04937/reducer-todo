import React, {useReducer} from 'react';
import './App.css';
import {initialState, todoReducer} from "./reducers/todoReducer.js";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";
import TodoContext from "./contexts/TodoContext.js";

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const toggle = id => dispatch({
        type: "TOGGLE_TODO",
        payload: id
    });
    const addTodo = item => dispatch({
        type: "ADD_TODO",
        payload: item
    });
    const clearCompleted = () => dispatch({
        type: "CLEARN_COMPLETED"
    });
    const deleteTodo = (id) => dispatch({
        type: "DELETE_TODO",
        payload: id
    });
    return (
        <TodoContext.Provider value={{toggle, deleteTodo}}>
            <div className="App">
                <h2>Todos</h2>
                <TodoForm 
                    addTodo={addTodo}
                    clearCompleted={clearCompleted}
                 />
                 <TodoList 
                    todos={state.todos}
                 />
            </div>
        </TodoContext.Provider>
    );
}

export default App;