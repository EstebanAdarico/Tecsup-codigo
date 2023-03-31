/**
 * *funcion que recibe un callback
 * *el callback es ejecutado tantas veces como elementos tenga el arreglo
 * *la cantidad de elementos que retornara la funcion por lo general es menor a la cantidad de elementos
 * */

const numero = [1, 50, 2, 78, 9, 63, 6, 14, 15];
// ejercicio para filtrar los todos los numeros pares
const pares = numero.filter((n) => {
   if (n % 2 == 0) {
      return n;
   }
});
console.log("pares", pares);

let users = [
   {
      id: 1,
      email: "george.bluth@gmail.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      age: 12,
   },
   {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      age: 50,
   },
   {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      age: 35,
   },
   {
      id: 4,
      email: "eve.holt@gmail.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      age: 15,
   },
   {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      age: 17,
   },
   {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      age: 36,
   },
];

const usuariosGmail = users.filter((user) => user.email.includes("@gmail"));
console.log("usuariosGmail", usuariosGmail);

const usuariosGmailv2 = users.filter(({ email }) => email.includes("@gmail"));
console.log("usuariosGmail", usuariosGmailv2);

const userId5 = users.find((user) => user.id === 5);
console.log("userId5", userId5);

/**
 * *[].reduce((sumatoria,elementoActual)=>{return la sumatoria + elementoActual}
 * */
const total = nuemros.reduce((sumatoria, elementoActual) => {
   return sumatoria + elementoActual;
});
/**
 * [].splice
 * Elimina al user de la posicion 4 y en su lugar insertaremos un nuevo usuario
 * */
