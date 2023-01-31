import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "./Todo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Info = ({ todos, setTodos }:TodoListProps) => {
  const [input, setInput] = useState<string>("");
  const [inputText, setInputText] = useState<TodoListProps[]>([]);
  const [editTask,  setEditTask] = useState<string>("")
  console.log(input, inputText);

  return (
    <div>
      {todos.map((itemTodo) => (
        <SingleTodo
          todo={itemTodo}
          key={itemTodo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default Info;
