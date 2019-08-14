import React from "react";
import Todo from "./Todo.js";

const TodoList = ({todos, toggle, deleteTodo}) => {
    return (
        <div>
            {
                todos.map(todo => (
                        <Todo 
                            key={todo.id}
                            {...todo}
                            toggle={toggle}
                            deleteTodo={deleteTodo}
                        />
                ))
            }
        </div>        
    )
}

export default TodoList;