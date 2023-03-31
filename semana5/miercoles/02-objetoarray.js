Number.forEach((elemento, index, arreglo) => {
   console.log("elemento: ", elemento);
   console.log("index: ", index);
   console.log("arreglo: ", arreglo);
});

const precio = [52.1, 80, 90.5, 23.5, 45.5];

/**
 * *[].map((elmento, index? ,arreglo?) =>{})
 * */
//codigo pra incrementear 5 soles a cada precio
const nuevosPrecio = precio.map((precio) => {
   if (precio > 60) {
      return precio + 5;
   } else {
      return precio;
   }
});
console.log("nuevosPrecis", nuevosPrecio);

const productos = [
   {
      name: "Widget",
      price: 39.99,
      code: "MNO345",
      color: "red",
   },
   {
      name: "Gadget",
      price: 29.99,
      code: "DEF456",
      color: "yellow",
   },
   {
      name: "Thingamajig",
      price: 9.99,
      code: "DEF456",
      color: "purple",
   },
   {
      name: "Doohickey",
      price: 29.99,
      code: "MNO345",
      color: "green",
   },
   {
      name: "Thingamajig",
      price: 9.99,
      code: "JKL012",
      color: "purple",
   },
];
const addkeyProduc = productos.map((item, index) => {
   return { ...item, key: index };
});
console.log(addkeyProduc);
// retorno implicito de las unciones implicitas
