import React from "react";
/**
 * Creates a grid item for the GifGrid. 
 * This item display an image and its title.
 * 
 * @param {id} is the image id.
 * @param {title} it is the image title.
 * @param {url} it is the image's url.
 * @returns a card that contains an image, and the image's title.
 */
export const GifGridItem = ({ id, title, url }) => {
  console.log(id, title, url);
  return (
    <figure className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
};
