/**
 * la clase Date surve para manipular fechas
 * */
let hoy = new Date();
console.log(hoy.getHours());
const meses = [
   "enero",
   "febrero",
   "marzo",
   "abril",
   "mayo",
   "junio",
   "julio",
   "august', 'september",
   "octubre",
   "noviem",
];

console.log(`meses ${meses[hoy.getMonth()]}`);

console.log(hoy.getHours() + " " + meses);
console.log(hoy.getMinutes());
console.log(hoy.getHours() + " " + meses);
