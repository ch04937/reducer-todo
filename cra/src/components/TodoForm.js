import React, {useState} from "react";

export default ({addTodo, clearCompleted}) => {
    const [item, setItem] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        addTodo(item);
        setItem("");
    }

    function handleClear(e) {
        e.preventDefault();
        clearCompleted();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="item"
                placeholder="new todo"
                onChange={e => setItem(e.target.value)}
                value={item}
            />
            <button type="submit">Add</button>
            <button onClick={handleClear}>Clear</button>
        </form>
    )
}