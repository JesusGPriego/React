import React from "react";
import { useState } from "react";
//proptypes
import PropTypes from "prop-types";

//getting the funciton (allowing component comunication)
/**
 * Add category allow the user to add more categories to the category list.
 * it is a simple input text, that add another category to the listo when 'enter' is pushed.
 * @param {setCategories} is the function that is triggered whenever enter is pushed. Another category is added so, another grid item will be created.
 */
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState(""); //not leave empty, or undefined is set.

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    //input value is all the text written, so by setting this value to input value, we actually got the input value.
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Insert new category"
      />
    </form>
  );
};

AddCategory.propTypes = {
  //setting the function as required:
  setCategories: PropTypes.func.isRequired,
};
