const a = parseInt(prompt(`ingresa el valor1`));
const b = parseInt(prompt(`ingresa el valor2`));
const signo = prompt(`ingrese el signo de operacion`);

function respuestaResta(signo) {
   switch (signo) {
      case "+":
         const result = a + b;
         alert(` el resultado es :${result}`);
         break;
      case "-":
         const result1 = a - b;
         alert(` el resultado es :${result1}`);
         break;
      case "*":
         const result2 = a * b;
         alert(` el resultado es :${result2}`);
         break;

      case "/":
         const result3 = a / b;
         alert(` el resultado es :${result3}`);
         break;
      default:
         alert(`ingresa un numero `);
         break;
   }
}
alert(respuestaResta(signo));
