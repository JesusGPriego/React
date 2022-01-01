// const getImgPromise = () => new Promise((resolve) => resolve("something here"));

// getImgPromise().then(console.log);

const getImagen = async () => {
  const apiKey = "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";
  try {
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await request.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImagen();

// request
//   .then((response) => response.json())
//   .then(({ data }) => {
//     const { url } = data.images.original;
//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   })
//   .catch(console.warn);
