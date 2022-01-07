import React from "react";
// import PropTypes from "prop-types";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//rafcp: commando to fast creating a component.

/**
 * It is the main component on the app. it displays two different components: <br >
 * an AddCategory component and undefined number of GifGrid.
 * The first is an input text and the others are 'galleries' of images.
 */
export const GifExpertApp = ({defaultCategories = []}) => {
  //useState hook. for every new category, a new Grid item will be created
  const [categories, setCategories] = useState(defaultCategories);

 

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* comunicating components  */}
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

// GifExpertApp.propTypes = {};
