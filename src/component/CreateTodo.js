import React ,{useState}from "react";

export const CreateTodo = ({addTodo})=>{
    const [todoTerm, setTodoTerm] = useState({});
    const handleOnchange = ({target})=>{
        setTodoTerm({
            id: 1,   //need helper function to generate unique id
            title: target.value,
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