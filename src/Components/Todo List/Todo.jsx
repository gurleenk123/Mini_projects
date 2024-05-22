import React, { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(-1);
  const [editText, setEditText] = useState("");

  const submitHandler = () => {
    if (input !== "") {
      const obj = {
        title: input,
        id: Math.random(),
      };

      setTodo((prevTodo) => [...prevTodo, obj]);
      setInput("");
    }
  };

  const deleteHandler = (id) => {
    console.log("id", id);
    const newarr = [...todo];
    const updatedTodo = newarr.filter((value, index) => {
      return value.id !== id;
    });
    setTodo(updatedTodo);
  };

  const editHandler = (id, value) => {
    setEditId(id);
    setEditText(value);
  };

  const updateTodo = (oldTodo) => {
    let newTodo = editText;
    console.log("old Todo", oldTodo);
    console.log("new Todo", newTodo);

    let todoArray = [...todo];
    const updatedTodo = todoArray.map((todo) => {
      if (todo.title === oldTodo) {
        todo.title = newTodo;
      }
      return todo;
    });
    setTodo(updatedTodo);
    setEditId(-1);
  };

  useEffect(() => {
    console.log("useEffect once");
  }, []);

  useEffect(() => {
    console.log("todo change");
  }, [todo]);
  return (
    <div>
      console.log('returned');
      <input
        type="text"
        placeholder="Type todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={submitHandler}>Add Todo</button>
      <ul>
        {todo.length !== 0
          ? todo.map((val, i) => {
              return (
                <div style={{ marginBottom: "20px" }}>
                  <li key={i}>{val.title}</li>
                  <button onClick={() => deleteHandler(val.id)}>Delete</button>

                  {editId === val.id ? (
                    <>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => {
                          setEditText(e.target.value);
                        }}
                      />
                      <button onClick={() => updateTodo(val.title)}>
                        Update Todo
                      </button>
                    </>
                  ) : (
                    <button onClick={() => editHandler(val.id, val.title)}>
                      Edit
                    </button>
                  )}
                </div>
              );
            })
          : null}
      </ul>
    </div>
  );
}
