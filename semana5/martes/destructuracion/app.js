// COPIAR O CLONAR CORRECTAMENTE UN ARREGL
const numeros = [1, 2, 3, 4, 5, 6, 7];
const nuevosNumeros = [...numeros];
console.log("a", a);
console.log("b", b);

// operador rest

nuevosNumeros;
const useState = () => {
   const saludo = () => {
      console.log(`hola`);
   };
   const despedida = () => {
      console.log(`adios`);
   };
   // solo estamos pasando la referencia ,mas no llamarla
   return [saludo, despedida];
};
// le podemos dar las variable que queramos
const [fn1, fn2] = useState();

console.log(fn1(), fn2());
