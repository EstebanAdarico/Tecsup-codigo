let frase = "los programadores crean lo que las personas dreams";
frase = frase.toLowerCase();
const fraseMinu = frase.toUpperCase();
console.log(fraseMinu);
/**
 **trim() == retorna la frase con los espacios eliminados
 **ejemplo
 */
console.log(frase.split(" ").join("-"));

/**
 * ?parametro opcional
 * *substring(9,13)
 * *Devuelve una subcadena desde la pisicion "comienzo"
 * *hasta la posicion "final"
 */
console.log(frase.substring(9, 13));

/**
 * *startsWith(texto)
 * *devuelve true si el  string inicia con el parametro "texto"
 * */
console.log(frase.startsWith("Los pro"));

/**
 * *includes(texto,posicion?)
 * *devuelve true su el string contiene el parametro "texto"
 * *desde la posicion "posicion" si este ultimo parametro no
 * *no se ha establecido el texto es buscado desde el inicio de la cadena
 * */
console.log(frase.includes("crean"));
