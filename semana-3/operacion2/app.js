const a = parseInt(prompt(`ingresa el valor1`));

function Evaluador(a) {
   if (a % 2 === 0) {
      alert(`su numero es par ${a}`);
   } else {
      alert(`su numero no es impart`);
   }
}
alert(Evaluador(a));

// const b = parseInt(prompt(`ingresa el valor1`));
// const c = parseInt(prompt(`ingresa el valor2`));
// function Evaluador(b, c) {
//    if (b > c) {
//       alert(`${b} es mayor`);
//    } else {
//       alert(`${c} es mayor`);
//    }
// }
// alert(Evaluador(b, c));
