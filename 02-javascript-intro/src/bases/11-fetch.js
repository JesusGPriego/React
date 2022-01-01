const apiKey = "PdNh581631LUxWXsNLj1m9qXTCKQuDhE";

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
/* request.then((resp) => {
  resp.json().then((data) => {
    console.log(data);
  }); 
});
*/

request
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
