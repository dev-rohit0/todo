import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDesc = (e) => {
    setTodoDescription(e.target.value);
  };

  const add = () => {
    if (todo === "" || todoDescription === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        description: todoDescription,
        completed: false,
      });
      setTodo("");
      setTodoDescription("");
    }
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={handleChange}
        className="todo-input"
        value={todo}
        placeholder="Todo item"
      />
      <input
        type="text"
        onChange={handleDesc}
        className="todo-input"
        value={todoDescription}
        placeholder="Describe the task"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={add}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
