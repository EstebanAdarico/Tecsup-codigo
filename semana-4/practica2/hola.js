let a = parseInt(prompt(`ingresa cuantos numeros ingresaras`));
let almacenB = 0;
let almacenC = 0;
let almacend = 0;
for (let i = 0; i < a; i++) {
   let b = parseInt(prompt(`ingresa el numero`));
   if (b > 0) {
      almacenB += 1;
   }
   if (b < 0) {
      almacenC += 1;
   }
   if (b === 0) almacend += 1;
}
alert(`los numeros ${almacenB} ${almacenC} ${almacend}`);
