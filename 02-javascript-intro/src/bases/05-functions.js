const salute = function (nombre) {
  return `Hola ${nombre}!`;
};

//lambdas:

const salute2 = (nombre) => {
  return `Hola ${nombre}!`;
};

const salute3 = (nombre) => `Hola ${nombre}!`;

console.log(salute("Jaime"));
console.log(salute2("Juan"));
console.log(salute3("Jesús"));

const getUser = () => ({
  uid: 231,
  userName: "Cuajao-x1",
});

const user = getUser();

console.log(user);

//Homework:
//1. Turn into lambda.
//2. returns an implicit object.
//3. test it.
/* function getActiveUser(nombre) {
  return {
    uid: "ABC567",
    userName: nombre,
  };
}
const activeUser = getActiveUser("Jesús");
console.log(activeUser); */

const getActiveUser = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});
const activeUser = getActiveUser("Antonio");
console.log(activeUser);
