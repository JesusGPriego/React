import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
/**
 * Creates a grid of images that match the topic that the user is looking for.
 * Topic here is the category.
 * 
 * @param {category} is what the user is looking for.  
 * @returns a new fragment, which is a grid with 10 images.
 */
export const GifGrid = ({ category }) => {
  //asking custom hook for info:
  const {data:images, loading} = useFetchGifs(category);

  return (
    <>
    {loading && <p>Cargando...</p>}
      <h3>{category}</h3>
      <div className="card-grid animate__animated animate__fadeIn">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
