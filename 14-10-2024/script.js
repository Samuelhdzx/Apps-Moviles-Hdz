//FUNCIONES
/*
function hello(){
    console.log('Hola Js');
    console.log('Hola html');
    console.log('Hola css');
}

hello();
hello();
hello();
hello();
hello();

*/

//retorno de una función

/*function hello(){


    return "hola Js";


}

const result = hello();
console.log(result);
//hello();*/

/*function hello(){


    return "hola Js";


}
 
console.log(hello());*/

/*
function hello(){
    return{};
}

console.log(hello());
*/

/*function hello(){
    return {
        nombre:'Raúl'
    }

}
console.log(hello());*/

//funcion que retorna a otra funcion
/*function hello(){
    return function (){
        return 'Hola JS'

    }
}
console.log(hello()());
*/


//====USO DE PARAMETROS EN FUNCIONES ======
/*function helloconJS(name){
    return 'Hola ' + name

}

console.log('Valentina');
console.log('Samuel');
console.log('Isaac');
console.log('Angel');
console.log('Illiam');
*/


//pasar mas de un parametro a la funcion

/*function helloconJS(x,y){
    return x + y;
}
console.log(helloconJS(10, 20));
console.log(helloconJS(10, 80));
*/

//control de errores en parametros
/*function helloconJS(x,y=0){
    return x + y;
    }
console.log(helloconJS(10));*/

//============ OBJETOS =============

// const user = {
//     nombre : 'Reyes',
//     apellidoM : 'Alvado',
//     edad:50,
//     domicilio : {
//         ciudad : 'CDMX',
//         calle : 'Agustín Melgar',
//         numero : 100125
//     },

//     amigos : ['Agustin', 'Maria'],
//     activo : false,
//     sendMensaje : function(){
//         return 'enviando msj'
//     }
// }

//alert ciudad, calle, numero....
//consola, los amigos
//alert (Activo o dado de Baja)
//consola n



const persona = {
    ciudad: "Mexicoo",
    calle: "CDMX",
    numero: 123,
    amigos: ["Ana", "Carlos", "Elena"],
    activo: true,
    n: 21
};

function mostrarInformacion(persona) {
    alert(`Dirección: ${persona.ciudad}, ${persona.calle}, ${persona.numero}`);
    
    console.log("Amigos:", persona.amigos);
    
    alert(persona.activo ? "Activo" : "Dado de Baja");
    
    console.log("n:", persona.n);
}

mostrarInformacion(persona);