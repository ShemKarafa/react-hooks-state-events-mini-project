import React, { useState } from "react";

function NewTaskForm({selectCategories = [], tasks = [], onTaskFormSubmit}) {
const [newTask, setNewTask] = useState('');
const [newCategory, setNewCategory] = useState("Code");

  function handleSelect(e) {
    setNewCategory(e.target.value);
  }

  function handleItemName(e) {
    setNewTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newTaskItem = {text: newTask, category: newCategory || "Code"};
    const updatedTasks = [...tasks, newTaskItem];
    onTaskFormSubmit(updatedTasks);
    setNewTask('');
    console.log("updatedTasks:", updatedTasks);  
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleItemName} />
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={handleSelect}>
          {/* render <option> elements for each category here */}
          {selectCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;