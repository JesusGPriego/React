const nombre = "Jesús";
const apellido = "García";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

export function getSaludo(nombre = "Juan") {
  return "Hola " + nombre;
}

// console.log(`Este es un texto: ${getSaludo(nombre)}  `);
