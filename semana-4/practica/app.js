const sueldoSemanal = () => {
   const salari = document.getElementById("salario");
   const hora = document.getElementById("horas");
   const result = document.getElementById("result");
   const multi = hora.value * salari.value;
   result.placeholder = `s/${multi}.00 soles`;
};

const conversor = () => {
   const metros = document.getElementById("metro");
   const result = document.getElementById("resul");
   const mult = metros.value * 39.37;
   console.log(mult);
   result.placeholder = `${mult.toFixed(2)} pulgadas`;
};

const conversorDinero = () => {
   const soles = document.getElementById("soles");
   const resul2 = document.getElementById("resul2");
   const multi = soles.value / 3.77;
   resul2.placeholder = `$ ${multi.toFixed(2)} dolares`;
};
