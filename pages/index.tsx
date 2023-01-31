import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import About from "./about";
// import Home from "./home";
import Info from "./Info";
import InputField from "./InputField";
import Nav from "./Nav";
import { Todo } from "./Todo";

const index = () => {
  const [todo, setTodo]= useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([])
  
    const handleAdd = (e: React.FormEvent)=>{
      e.preventDefault();
      if (todo) {
        setTodos([...todos, {id: Date.now(), todo: todo, isdone: false}])
        setTodo("")
      }
    }
    
  
    
    return (
      <div className="bg-primary vh-100">
        <Nav/>
        <div className="text-center">
        <h2 className='header'>Todo Lists</h2>
        <InputField todo ={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <Info todos={todos} setTodos={setTodos}/>
      </div>
      </div>
    );
 
};

export default index;
