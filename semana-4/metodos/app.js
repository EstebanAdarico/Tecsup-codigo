// como se hacia antes de ecmascript 6
// y tubieramos uns apis mas desentes
const API_URL = "https://jsonplaceholder.typicode.com";
const xhr = new XMLHttpRequest();

const HTMLResponse = document.getElementById("app");
fetch(`${API_URL}/users`)
   .then((response) => response.json())
   .then((users) => {
      const tpl = users.map((user) => `<li>${user.name} # ${user.number}</li>`);
      HTMLResponse.innerHTML = `<lu>${tpl}</lu>`;
   });

/**
 * !es parte del codigo que donde estamos practicando los metodos de las practicas*/
///holacomo
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
