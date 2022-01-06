//getting gifs:

/**
 * http fetch call. It retrieves info about images that match the user input 'category'.
 * 
 * @param {*} category it is the topic the user is looking for.
 * @returns an array of img objects.
 */
export const getGifs = async (category) => {
  //url:
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=XF7ImUzTwJPNNtviiR3x6UE7Js0MDtQF`;
  //http handeling
  const resp = await fetch(url);
  //detructuring json to get only the data objects.
  const { data } = await resp.json();
  //geting img info from the data:
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
