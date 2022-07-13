import React ,{useState}from "react";
import {v4 as uuidv4} from "uuid";

export const CreateTodo = ({addTodo})=>{
    const [todoTerm, setTodoTerm] = useState({});
    const handleOnchange = ({target})=>{
        setTodoTerm({
            id: uuidv4(),
            title: target.value
        });
    }

    const handleAddtodo = ()=>{
        addTodo(todoTerm);
    }
    return (
        <div className="todoForm">
            <input type={"text"} placeholder={"create todo"} onChange={handleOnchange}/>
            <button onClick={handleAddtodo}>Add</button>
        </div>
    );
}