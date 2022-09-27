import React from "react";

function CategoryFilter({ allCategories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {allCategories}

    </div>
  );
}

export default CategoryFilter;
