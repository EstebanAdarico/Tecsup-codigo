// calcular cual de los numeros sonmayores

let nombre = [1, 2, 3, 4, 5, 6, 6, 7];
for (let i = 0; i < nombre.length; i++) {
   const element = nombre[i];
   if (nombre[i] === 2) {
      console.log(nombre[i]);
   }
}
// funciones
function hola() {
   prompt("hola perro");
}

const mostrarTexto = () => {
   const nombre = document.getElementById("inputText");
   const reemplazo = document.getElementById("titulo");

   // const mensaje = `${nombre.value}`;
   reemplazo.innerHTML = nombre.value;
};

const mostrarTexto2 = () => {
   const nombre = document.getElementById("inputText2");
   const reemplazo = document.getElementById("titulo");

   const mensaje = `mi artista favorito es ${nombre.value}`;
   reemplazo.innerHTML = mensaje;
};

// tipos de funciones
function suma(a, b) {
   return a + b;
}
console.log(suma(1, 2));

const nombre2 = document.getElementById("tiempoElegido");
const reemplazo = document.getElementById("textoAlarma");

const alarma = () => {
   setTimeout(tiemposcumplido2, 1000 * nombre2.value);
};
const tiemposcumplido2 = () => {
   reemplazo.textContent = "ENCEDIDO";
   reemplazo.style.color = "green";
};

function suma(a, b) {
   return a + b;
}
console.log(suma(2, 3));

function registro(a, b, c, d) {
   return (a + b + c + d) / 4;
}
console.log(registro(4, 4, 4, 4));

function triangulo(b, h) {
   return (b * h) / 2;
}
function rectangulo(b, h) {
   return b * h;
}
function circunferencia() {}
