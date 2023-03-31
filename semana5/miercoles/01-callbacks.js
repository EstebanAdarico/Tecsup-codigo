/**
 * *function que obtiene un arreglo de post y los devuelve a traves del callback fn
 */

const obtenerPosts = async (fn) => {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await response.json();
   fn(data);
};
