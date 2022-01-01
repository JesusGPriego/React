// Destructuring assignment

const persona = {
  nombre: "Tony",
  age: 45,
  clave: "Ironman",
};
/* 
const { nombre, age, clave } = persona;

console.log(persona.nombre);
console.log(persona.age);
console.log(persona.clave);

console.log(nombre);
console.log(age);
console.log(clave); */
//Destructuring in function argument:
const getPersona = ({ nombre, age, clave, rango = "Captain" }) => {
  // console.log(nombre, age, clave, rango);

  return {
    nombreClave: clave,
    ageold: age,
    latlng: {
      lat: 2313,
      lng: 2113,
    },
  };
};

const {
  nombreClave,
  ageold,
  latlng: { lat, lng },
} = getPersona(persona);
console.log(nombreClave, ageold, lat);
