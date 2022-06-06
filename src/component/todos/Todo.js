import React from "react";

export const Todo = ({todo, removeTodo})=>{
    const handleRemove = ()=>{
        removeTodo(todo.id)
    }
    return(
        <div className="todo">
            <h2>{todo.title}</h2>
            <button onClick={handleRemove}>x</button>
        </div>
    );
}