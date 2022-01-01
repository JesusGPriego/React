const mName = "Jesús";
const surname = "García";
const fullname = `${mName} ${surname}`;

console.log(fullname);

function getSaludo(nombre) {
  return "Hola, " + nombre;
}

console.log(`Esto es una prueba de literales: ${getSaludo(fullname)}`);
