import React, { useState } from 'react';

const TodoList = () => {
  const [inputValues, setInputValues] = useState('');
  const [task, setTask] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    if (inputValues.trim()) {
      setTask([...task, inputValues]);
      setInputValues('');
    }
  };
  const handleChange = (e) => {
    setInputValues(e.target.value);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <form>
        <input
          onChange={handleChange}
          type='text'
          value={inputValues}
          placeholder='Enter your task...'
        />
        <button type='submit' onClick={handleClick}>
          Add
        </button>
      </form>

      <ul>
        {task.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
