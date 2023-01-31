import React, { useState } from 'react';
import { Todo } from './Todo';

type SingleTodoProps = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  };

const SingleTodo = ({ todo, todos, setTodos }:SingleTodoProps) => {
    const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false)
  };
    return (
        <form onSubmit={(e) => handleEditTodo(e, todo.id)}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {edit ? (
            <input
            autoFocus
              type="text"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : todo.isdone ? (
            <p style={{ marginRight: "50px" }}>
              <s>{todo.todo}</s>
            </p>
          ) : (
            <div style={{ marginRight: "50px" }}>
              <p>{todo.todo}</p>
            </div>
          )}
  
          <div style={{ display: "flex" }}>
            <p
              style={{ marginRight: "5px" }}
              onClick={() => {
                if (!edit && !todo.isdone) {
                  setEdit(!edit);
                }
              }}
            >
              edit
            </p>
            <p
              style={{ marginRight: "5px" }}
              onClick={() => handleDelete(todo.id)}
            >
              delete
            </p>
            <p style={{ marginRight: "5px" }} onClick={() => handleDone(todo.id)}>
              done
            </p>
          </div>
        </div>
      </form>
    );
};

export default SingleTodo;