    
import React, {useContext} from "react";
import TodoContext from "../contexts/TodoContext.js";

const Todo = ({
    id,
    item,
    completed
}) => {
    const {toggle, deleteTodo} = useContext(TodoContext);

    return (
        <>
            <div 
                style={{textDecoration: completed ? "line-through" : "none"}}
                onClick={() => toggle(id)}
            >
                {item}
            </div>    
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </>
    )
}

export default Todo;