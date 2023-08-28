function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola '+ nombre);
        miCallback();
    },1000);
}
function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Hola hola hola hola ');
        callbackHablar();
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
    hablar(function(){
        adios('Kevin', function(){
            console.log('Terminando proceso... ');
        })
    })
})