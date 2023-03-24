let hola = [1, 2, 4, 5, 6, 7, 8, 9];
let suma = 0;
let impares = 0;
for (let i = 0; i < hola.length; i++) {
   if (hola[i] % 2 == 0) {
      suma.push(hola[i]);
   } else impares.push(hola[i]);
}
console.log(`${suma} ${impares}`);
//ejercicio mejorao reto
//imprimir tambien , que numeros son pares e impares
//ojo imprimr al final
