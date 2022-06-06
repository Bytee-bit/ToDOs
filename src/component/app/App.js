import React,{useState} from "react";
import {CreateTodo} from "../CreateTodo";
import { Todos } from "../todos/Todos";

export default function App(){
  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=>{
    // if(!todo.title.length) return;
    setTodos(prev => [todo, ...prev]);
  }

  const removeTodo = (id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="appContainer">
      <h1>ToDOs</h1>
      <CreateTodo addTodo = {addTodo}/>
      <Todos removeTodo = {removeTodo} todos ={todos}/>
    </div>
  );
}