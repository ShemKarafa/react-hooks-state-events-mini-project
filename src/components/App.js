import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState("Code")

  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  const displaySelectedCategoryItems = tasks.filter(item => {
    if(category === "All") {
      return true
    } else {
      return item.category === category
    }
  })
  
  function onTaskFormSubmit(updatedTasks) {    
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory={category} 
      changeCategory={setCategory}
      />
      <NewTaskForm
      selectCategories={CATEGORIES}
      tasks={tasks}
      onTaskFormSubmit={onTaskFormSubmit}
      newTask={newTask}
      setNewTask={setNewTask}
      newCategory={newCategory}
      setNewCategory={setNewCategory}
      />
      <TaskList tasks={displaySelectedCategoryItems} setTasks={setTasks} />
    </div>
  );
}

export default App;