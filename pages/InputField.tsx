import React, { useRef } from "react";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur()
        }}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter Text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputField;
