const producto = {
   nombre: "iPhone 14 pro",
   precio: 40000,
   codigo: 5,
   stock: 80,
   colore: ["negro", "azul", "rojo"],
};

/**
 **desestructuracion de un objeto seria la siguiente
 * */
const product2 = { ...producto };
/**
 * *desestructurando atributos
 * */

const { codigo, precio, ...rest } = producto;

console.log("codigo", codigo);
console.log("precio", precio);
console.log("rest", rest);

const random = (atributos) => {
   const { min, max } = atributos;
   return Math.random() * (max - min) + min;
};

console.log(random({ min: 20, max: 20 }));
// sumando dos numaer
const nuns = [2, 5, 5, 11];
const twoSum = (nuns, objetivo) => {
   for (let i = 0; i < nuns.length; i++) {
      for (let j = 0 + 1; j < nuns.length; j++) {
         if (nuns[i] + nuns[j] === objetivo) {
            if (i != j) {
               return [i, j];
            }
         }
      }
   }
};

console.log(twoSum(nuns, 10));

/**
 * *GIVEN AN INTEGER X , RETURN TRUE IF X IS A PALINDROME , AND FALSE OTHERWISE
 */
const isPolindrome = (x) => {
   let guardarVarible = x.toString().split("").map(Number);
   let derechaIzquierda = [];
   let izquierdaDerecha = [];
   for (let i = 0; i < guardarVarible.length; i++) {
      izquierdaDerecha.push(guardarVarible[i]);
   }
   for (let j = guardarVarible.length - 1; j >= 0; j--) {
      derechaIzquierda.push(guardarVarible[j]);
   }

   let aderechaIzquierda = parseInt(derechaIzquierda.join(""));
   let aizquierdaDerecha = parseInt(izquierdaDerecha.join(""));
   if (aderechaIzquierda === aizquierdaDerecha) {
      return true;
   } else {
      return false;
   }
};

console.log(isPolindrome(10000021));
