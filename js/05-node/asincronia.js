function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola '+ nombre);
        miCallback();
    },1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adiós '+ nombre);
        otroCallback();
    },1000);
}

console.log('Iniciando código...');
hola('Kevin', function(){
    adios('Kevin', function(){
        console.log('Terminando proceso... ');
    })
})

//¿Qué pasa si se cambia el hola a 1500?
// hola('Saúl', function(){})
// adios('Saúl', function(){})