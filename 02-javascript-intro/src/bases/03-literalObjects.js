const persona = {
  mName: "Tony",
  surname: "Stark",
  age: 45,
  direccion: {
    ciudad: "New York",
    zip: 3132213,
    lat: 14.2332,
    lng: 34.9232,
  },
};

console.log({ persona });
// This copy just to the first level, which means, 'direccion' will be the same for
// persona and persona2.
const persona2 = { ...persona };
//this should be used to copy an object element, and not its reference:
const persona3 = JSON.parse(JSON.stringify(persona));
console.log(persona2);

console.log(persona3);
