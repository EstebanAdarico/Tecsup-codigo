const inputs = document.getElementsByTagName("input");
console.log("esto es un input ", inputs);

const newInputs = Array.from(inputs);
console.log("inputs", inputs);
console.log("nesInputs", newInputs);

newInputs.map((newInput) => {
   console.log("newInput", newInput);
});
console.log("=======================capturamos el form");
//capturamos el form

const form = document.getElementsByTagName("formulario");
console.log("formulario", form);

//accceder al boton

const boton = document.getElementsByTagName("btn__registro");
console.log("boton", boton);

console.log("=======================capturamos y recorremos el div ");

const divContent = document.getElementsByTagName("div");
console.log("divcontent", divContent);

const recorriendoDiv = Array.from(divContent);
console.log("recorriendoDiv", recorriendoDiv);

recorriendoDiv.forEach((element, index) => {
   const div1 = Array.from(element.children);
   const divpa = div1[0];
   const divpa2 = div1[1];

   console.log("element prueba 2", divpa);

   console.log("element prueba 5", divpa2);
});

console.log("============================capturamos los input");

const inputPassword = document.getElementById("input_pasword");
console.log(inputPassword.value);
const input_nombre = document.getElementById("input_nombre");
console.log(input_nombre.value);

const input_lastname = document.getElementById("input_lastname");
console.log(input_lastname.value);

const input_completo = document.getElementById("input_completo");
console.log(input_completo.value);
console.log("============================cambiando de color ");

inputPassword.style.background = "#000030";
input_nombre.style.background = "#002320";
input_lastname.style.background = "#f30";
input_completo.style.background = "#0aa";

//esto en particular retorna un nodelist u este es compatible con forecha

const containerList = document.querySelector("#container_list");
const ul = document.createElement("ul");
ul.className = "lista";
const li = document.createElement("li");
containerList.append(ul);
// ul.append(li);

const inputss = Array.from(document.querySelectorAll("input"));
inputss.map((input) => {
   const li = document.createElement("li");
   const contenido = document.createTextNode(input.value);
   li.appendChild(contenido);
   ul.append(li);
});
console.log(ul);
containerList.append(ul);
