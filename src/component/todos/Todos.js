import React from "react";
import { Todo } from "./Todo";
export const Todos = ({removeTodo, todos})=>{

    return (
        <div className="todosContainer">
            {
                todos.map(todo => <Todo todo = {todo} removeTodo = {removeTodo} key = {todo.id}/>)
            }
        </div>
    );
}

