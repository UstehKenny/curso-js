// function hola(nombre){
//     return new Promise(function (resolve,reject){
//         setTimeout(function(){
//             console.log('Hola '+ nombre);
//             resolve(nombre);
//         },1000);
//     })
// }
// function hablar(nombre){
//     return new Promise((resolve,reject) => {
//         setTimeout(function(){
//             console.log('Hola hola hola hola ');
//             resolve(nombre);
//         },1000);
//     })
// }

// function adios(nombre){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             console.log('Adiós '+ nombre);
//             // resolve(nombre);
//             reject('Lanzando error x...');
//         },1000);
//     })  
// }

// // ---
// console.log('Iniciando proceso...');
// hola('Kevin')
//     .then(hablar)
//     .then(adios)
//     .then((nombre) => {
//         console.log('Terminando proceso...');
//     })
//     .catch(error => {
//         console.error('Ha habido un error: ');
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('Gracias por venir...')
//     })

// const promesa = new Promise((resolve, reject) => {
//     // Simula una operación asincrónica
//     setTimeout(() => {
//       const exito = true; // Cambia a false para simular el rechazo
//       if (exito) {
//         resolve("¡Obtuve un helado!");
//       } else {
//         reject("No pude conseguir un helado.");
//       }
//     }, 2000); // Simulamos que esto lleva 2 segundos
//   });
  
//   promesa.then((mensaje) => {
//     console.log(mensaje); // Si se resuelve exitosamente
//   }).catch((error) => {
//     console.error(error); // Si se rechaza
//   });
  