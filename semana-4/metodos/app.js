// como se hacia antes de ecmascript 6
// y tubieramos uns apis mas desentes
const API_URL = "https://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

// crearemos un controlador de solicitud (handler)
// LO UTILOZAREMOS COMO UN CALLBACK
function onRequestHandler() {
   if (this.readyState === 4 && this.status === 200) {
      // 0 = UNSET , no se ha llamado al metodo open
      // 1 = OPENED , se ha llamado al metodo open
      // 2 = HEADER_RECEIVED , se ha llamado al metodo send()
      // 3 = LOADING , está cargando , es decir , está recibiendo la respuesta
      // 4 = DONE , se ha completado la operacion

      //guardar los datos y tranformando a JSON
      const data = JSON.parse(this.response);

      console.log(data);

      // PARA ACTIVAR EL COLOREADO DE PINTA API
      const pinta = document.querySelector("#app");

      const tpl = data.map(
         (users) => `<li>${users.name} 📧 ${users.email}</li>`
      );
      pinta.innerHTML = `<ul>${tpl}</ul>`;
   }
}
// llamando a la funcion para que se ejecute
// agregando un elemento de escucha
// esta llamando al evento load
xhr.addEventListener("load", onRequestHandler);
// el metodo open recibe don parametros (el verbo o la peticion que hace http y la url)
xhr.open("GET", `${API_URL}/users`);
// luego llamamos al metodo send para que inicie el state 2 y luego siga hasta response
xhr.send();

// alumnos.forEach((alumno, index) => {
//    if (alumno === "esteban") {
//       console.log(`hola presiado alumno ${alumno}`);
//    } else {
//       console.log(`hola ${alumno}`);
//    }
// });

// el findindex solo devolvera el
// const alumnoEncotrado = alumnos.find((alumno, index) => {
//    return alumno === "marta";
// });
//  console.log(alumnoEncotrado);

// const alumnos = ["esteban", "juan", "pedro", "marta", "toool"];
// const UsandoMap = alumnos.map((alumno, index) => {
// contador de letras
//    if (alumno.length >= 6) {
//       return console.log(`tu nombre de usuario ${alumno}  ya esta registrado`);
//    } else {
//       return console.log(`procede`);
//    }
// });
// alumnos.map((alumno, index) => {
//    return alumno === "juan";
// });
// const usandoforeach = alumnos.forEach(() => {});
