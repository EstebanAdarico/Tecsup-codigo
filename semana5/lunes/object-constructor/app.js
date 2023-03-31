const vehiculo = {
   marca: "Audi",
   modelo: "A4",
   mantenimiento: [
      {
         fecha: "05/05/23",
         kolimetraje: 17000,
      },
      {
         fecha: "05/05/24",
         kolimetraje: 27000,
      },
   ],
   imprimirMarcaYModelo: function () {
      // usamos this para hacer referencia al objeto que lo contiene
      console.log(`modelo ${this.modelo}`);
      console.log(`marca ${this.marca}`);
   },
};

vehiculo.imprimirMarcaYModelo();
//NO COMPIAR OBJETO DE LA SIGUIENTE MANERA

// funcion que crea objetos
// para que la funcion tenga un valor por defecto (se le pone = '')
function creadorDeVehiculo(
   pmarca = "",
   pmodelo = "",
   panio = "",
   pmantenimiento = []
) {
   const vehiculoGenerico = {
      marca: pmarca,
      modelor: pmodelo,
      anio: panio,
      mantenimientos: pmantenimiento,
   };
   return vehiculoGenerico;
}
// asignando  un nombre a la funcion que creamos
const masdax4 = creadorDeVehiculo("mazda", "cx3", 2023, [
   mantenimiento("05/05/23", 15000, true),
   mantenimiento("05/05/22", 17000, true),
]);
const bmwx4 = creadorDeVehiculo("BMW", "X4", 2024, []);
const mercedes = creadorDeVehiculo();

console.log("mazda", masdax4);
console.log("bmw", bmwx4);
console.log("MERCEDES", creadorDeVehiculo);

// FUNCION QUE CREADORA DE MANTENIMIENTO
/**
 * *FECHA
 * KILOMETRAJE
 * ACEITE
 */
function mantenimiento(Pfecha = "", Pkilometraje = "", Paceite = false) {
   return {
      fecha: Pfecha,
      kilometraje: Pkilometraje,
      aceite: Paceite,
   };
}
