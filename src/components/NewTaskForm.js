import React from "react";

function NewTaskForm( { categoryList, text, category, onTaskFormSubmit, handleTextChange, handleCategoryChange} ) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
