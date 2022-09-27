import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ text, setText ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ submitedTasks, setSubmitTasks ] = useState(TASKS)

  function handleClick(event) {
    if(event.target.textContent === 'All') {
      if(event.target.className === '') {
        event.target.className = 'selected'
        setSubmitTasks(TASKS)
      } else event.target.className = ''
    } else {
      if(event.target.className === '') {
        event.target.className = 'selected'
        setSubmitTasks(submitedTasks.filter(task => task.category === event.target.textContent))
      } else if(event.target.className === 'selected') {
        event.target.className = ''
        setSubmitTasks(TASKS)
      }
    }
  }

  const allCategories = CATEGORIES.map(category => 
  <button 
    key={category} 
    className=''
    onClick={handleClick}
  >
    {category}
  </button>)

  const categoryList = CATEGORIES
    .filter(category => category !== 'All')
    .map(eachCategory => <option key={eachCategory}>{eachCategory}</option>)

  function onTaskFormSubmit(event) {
    event.preventDefault()
    const newTask = { text: text, category: category }
    const updatedTaskList = [...submitedTasks, newTask]
    console.log(updatedTaskList)
    setSubmitTasks(updatedTaskList)
    setText('')
    setCategory('')
  }

  const allTasks = submitedTasks.map(task => <Task key={task.text} category={task.category} text={task.text}/>)

  function handleTextChange(event) {
    setText(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter allCategories={allCategories} />
      <NewTaskForm 
        onTaskFormSubmit={onTaskFormSubmit} 
        handleTextChange={handleTextChange}
        handleCategoryChange={handleCategoryChange}
        categoryList={categoryList}
      />
      <TaskList allTasks={allTasks}/>
    </div>
  );
}

export default App;
