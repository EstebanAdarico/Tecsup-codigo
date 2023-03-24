function cobroParking(horas) {
   if (2 >= horas) {
      return horas * 5;
   }
   if (2 < horas <= 3) {
      return horas * 4;
   }
   if (3 < horas <= 5) {
      return horas * 3;
   }
   if (horas > 10) {
      return horas * 2;
   }
}

/* Se requiere determinar el tiempo que tarda una persona en llegar de
una ciudad a otra en bicicleta, considerando que lleva una velocidad
constante. Realice un diagrama de flujo y pseudocódigo que representen
el algoritmo para tal fin.*/
function tiempo(distancia, velocidad) {
   return console.log(
      "El tiempo que tarda una persona en llegar es: ",
      distancia / velocidad
   );
}
tiempo(100, 20);

/*Se requiere determinar el costo que tendrá realizar una llamada telefónica
con base en el tiempo que dura la llamada y en el costo por
minuto. Realice un diagrama de flujo y pseudocódigo que representen
el algoritmo para tal fin.
*/
function costoCall(duracion, costoxmin) {
   return console.log("el costo de la llamada es : ", duracion * costoxmin);
}
costoCall(2, 5);

/*La CONAGUA requiere determinar el pago que debe realizar una
persona por el total de metros cúbicos que consume de agua. Realice
un diagrama de flujo y pseudocódigo que representen el algoritmo
que permita determinar ese pago
*/

function cobroDelagua(costoXmetrocubico, metroCubico) {
   return console.log("total a cobrar :", costoXmetrocubico * metroCubico);
}
cobroDelagua(3, 5);

/* La compañía de luz y sombras (CLS) requiere determinar el pago
que debe realizar una persona por el consumo de energía eléctrica,
la cual se mide en kilowatts (KW). Realice un diagrama de flujo y
pseudocódigo que representen el algoritmo que permita determinar
ese pago.*/
function cobroElect(kilowattsConsumidos, precioKiloWatts) {
   return console.log(
      "total a cobrar : ",
      kilowattsConsumidos * precioKiloWatts
   );
}
cobroElect(5, 7);

function numeroMAyor(numeroA, numeroB, numeroC) {
   if (numeroA > numeroB) {
      if (numeroA > numeroC) {
         return ` el mayor es ${numeroA}`;
      }
   } else if (numeroB > numeroA) {
      if (numeroB < numeroC) {
         return `el mayor`;
      }
   }
}
function bisiesto(anio) {
   if ((anio % 4 == 0 && anio % 100 !== 0) || anio % 400 == 0) {
      return `bisiesto`;
   } else {
      return `no bisiesto`;
   }
}
console.log(bisiesto(2014));

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function menorMayor(numeros) {
   // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
   // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
   // 'numeros' en la posición 1.
   // Ej:
   // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
   // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
   // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

   // Tu código aca:
   let numeroBase = 0;
   let storeTwoNumbers = [];
   //?si queremos de mayor a menor
   //*solo es cambiar los dos ultimos parametros
   //*const stockOrdenado = numeros.sort((a,b) => b-a )
   //*cambiar las ordenes de los push

   const stockOrdenado = numeros.sort((a, b) => a - b);
   for (let i = 0; i < stockOrdenado.length; i++) {
      if (stockOrdenado[i] > numeroBase) {
         numeroBase = stockOrdenado[i];
      }
   }
   storeTwoNumbers.push(stockOrdenado[0]);
   storeTwoNumbers.push(numeroBase);
   return storeTwoNumbers;
}
// No modifiques nada debajo de esta linea //
console.log(menorMayor([4, 6, 1, 7, 15]));

function alumnos(alumnos) {
   let result = 0;
   if (alumnos >= 100) {
      result = alumnos * 65.0;
   }
   if (50 <= alumnos <= 99) {
      result = alumnos * 70.0;
   }
   if (30 <= alumnos <= 49) {
      result = alumnos * 95.0;
   }
   if (30 >= alumnos) {
      result = alumnos * 4000.0;
   }
   return console.log(`el pago por alumno es :${result}`);
}
alumnos(31);
// pregunta 3.4

// function parkingHoras(horas) {
//    let horasguardadas = 0;
//    let horasGuar2 = 0;
//    if (horas >= 1 && horas <= 2) {
//       horasguardadas = horas * 5;
//    } else {
//       horasGuar2 = 2 * 5;
//    }
//    if (horas <= 5 && horas >= 3) {
//       horasguardadas = (horas - 2) * 4 + horasGuar2; //5=22
//    } else {
//       horasGuar2 = 3 * 4 + horasGuar2;
//    }
//    if (horas <= 10 && horas >= 6) {
//       horasguardadas = (horas - 5) * 3 + horasGuar2;
//    } else {
//       horasGuar2 = 5 * 3 + horasGuar2;
//    }
//    if (horas >= 11) {
//       horasguardadas = (horas - 10) * 2 + horasGuar2;
//    }
//    return horasguardadas;
// }

// console.log(parkingHoras(11));
