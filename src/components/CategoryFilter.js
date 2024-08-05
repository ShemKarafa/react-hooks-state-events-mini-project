import React from "react";

function CategoryFilter({ categories, selectedCategory, changeCategory }) {
  const categoryButtons = categories.map((category, index) => {
    const className = category === selectedCategory ? "selected" : null
    return (
      <button 
        onClick={() => changeCategory(category)} 
        className={className} 
        key={index}
      >{category}</button>
    )
  })   

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;