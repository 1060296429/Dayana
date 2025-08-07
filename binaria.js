// let librosDesordenados = [ 
// { codigo: "L008", titulo: "Ingeniería de Software", anio: 2021}, 
// { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 }, 
// { codigo: "L001", titulo: "Algoritmos I", anio: 2019 }, 
// { codigo: "L010", titulo: "Análisis Numérico", anio: 2020 }, 
// { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 }, 
// { codigo: "L004", titulo: "Bases de Datos", anio: 2018 } 
//  ];


// let librosOrdenados = [...librosDesordenados].sort((a, b) => {
//   return a.codigo.localeCompare(b.codigo);
// });


// //  Función de búsqueda binaria
// function busquedaBinaria(lista, codigoBuscado) {
//   let inicio = 0;
//   let fin = lista.length - 1;

//   while (inicio <= fin) {
//     let medio = Math.floor((inicio + fin) / 2);
//     let codigoMedio = lista[medio].codigo;

//     if (codigoMedio === codigoBuscado) {
//       return lista[medio]; // Libro encontrado
//     } else if (codigoMedio < codigoBuscado) {
//       inicio = medio + 1;
//     } else {
//       fin = medio - 1;
//     }
//   }

//   return null; // Libro no encontrado
// }

// // Buscar un libro por su código
// let codigoABuscar = "L001";
// let resultado = busquedaBinaria(librosOrdenados, codigoABuscar);

// // Mostrar resultado
// if (resultado) {
//   console.log("el Libro si es encontrado:");
//   console.log(resultado);
// } else {
//   console.log("el Libro no fue encontrado.");
// }


// taller segundo punto.

let librosCasiOrdenados = [ 
{ codigo: "L001", titulo: "Algoritmos I", anio: 2019 }, 
{ codigo: "L002", titulo: "Estructuras de Datos", anio: 2020 }, 
{ codigo: "L003", titulo: "Introducción a la IA", anio: 2023 }, 
{ codigo: "L005", titulo: "Redes de Computadores", anio: 2022 }, 
{ codigo: "L004", titulo: "Bases de Datos", anio: 2018 }, // fuera de lugar
{ codigo: "L006", titulo: "Sistemas Operativos", anio: 2017 } 
]; 
function ordenarBurbuja(lista) {
  let comparaciones = 0;
  let intercambios = 0;

  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - i - 1; j++) {
      comparaciones++; // que se compara dos elementos
      if (lista[j].codigo > lista[j + 1].codigo) {
        // si están en el orden incorrecto, se intercambian
        let temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
        intercambios++;
      }
    }
  }
ordenarInsercion([...librosCasiOrdenados]);
 console.log("Lista ordenada con burbuja:");
  console.table(lista);
  console.log("Comparaciones:", comparaciones);
  console.log("Intercambios:", intercambios);
}
ordenarBurbuja([...librosCasiOrdenados]);


function ordenarInsercion(lista) {
  let comparaciones = 0;
  let intercambios = 0;

  for (let i = 1; i < lista.length; i++) {
    let actual = lista[i];
    let j = i - 1;

    // move hacia atrás el menor mientras el anterior sea mayor
    while (j >= 0 && lista[j].codigo > actual.codigo) {
      lista[j + 1] = lista[j]; // desplazamos el elemento
      j--;
      comparaciones++;
      intercambios++;
    }

    // comparación 
    if (j >= 0) comparaciones++;
    lista[j + 1] = actual; // insertamos el elemento 
  }

  console.log(" Lista ordenada con inserción:");
  console.table(lista);
  console.log("Comparaciones:", comparaciones);
  console.log("Intercambios:", intercambios);

  
}




