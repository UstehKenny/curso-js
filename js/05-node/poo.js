// // Objetos literales
// const natalia = {
//     name: "Natalia",
//     age: 20,
//     cursosAprobados: [
//       "Curso Definitivo de HTML y CSS",
//       "Curso Práctico de HTML y CSS",
//     ],
//     aprobarCurso(nuevoCursito) {
//       this.cursosAprobados.push(nuevoCursito);
//     },
//   };
  
//   // Prototipos
//   function Student(name, age, cursosAprobados) {
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;
//   }
//   Student.prototype.aprobarCurso = function (nuevoCursito) {
//     this.cursosAprobados.push(nuevoCursito);
//   }
  
//   const juanita = new Student(
//     "Juanita Alejandra",
//     15,
//     [
//       "Curso de Introducción a la Producción de Videojuegos",
//       "Curso de Creación de Personajes",
//     ],
//   );
  
//   // Prototipos con la sintaxis de clases
//   class Student2 {
//     constructor({
//       name,
//       cursosAprobados = [],
//       age,
//       email,
//     }) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         this.cursosAprobados = cursosAprobados;
//     }
  
//     aprobarCurso(nuevoCursito) {
//       this.cursosAprobados.push(nuevoCursito);
//     }
//   }
  
//   const miguelito = new Student2({
//     name: "Miguel",
//     age: 28,
//     email: "miguelito@platzi.com",
//   });

class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    if (this.integrantes.find(i => i.instrumento === 'Bateria')) {
      console.log("Ya existe un baterista");
    } else { 
      this.integrantes.push(integranteNuevo);
      // console.log(integranteNuevo);
    }

  }
}

//Crear clase Integrante
class Integrante {
  constructor({
    nombre,
    instrumento
  }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }

}

const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],
  integrantes: [],
}
const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Bateria" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))


// class Course {
//   constructor({
//     name,
//     classes = [],
//   }) {
//     this._name = name;
//     this.classes = classes;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(nuevoNombrecito) {
//     if (typeof nuevoNombrecito !== "string") {
//       console.log("no")
//     } else {
//       this._name = nuevoNombrecito[0].toUpperCase() + nuevoNombrecito.slice(1);
//       return this._name;
//     }
//   }
// }

// const courseName = "curso de programación básica";
// const nombreMaysuculas = new Course({
//   name: courseName,
// })
// nombreMaysuculas.name = courseName;