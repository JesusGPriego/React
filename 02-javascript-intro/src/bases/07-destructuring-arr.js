const personajes = ["Goku", "Vegeta", "Trnks"];

/*console.log(personajes);

const [goku] = personajes;

const [, vegeta] = personajes;

console.log(vegeta);
 */

/* const getPersonajes = () => {
  return ["ABC", 123];
};

const [p1] = getPersonajes();
console.log(p1); */

// Homework:
// 1. first value should be called 'nombre'
// 2. el segundo se llamará 'setNombre'-
const pineapple = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo!");
    },
  ];
};

const [nombre, setNombre] = pineapple("Goku");
console.log(nombre);
setNombre();
