/* 

---ejemplo de numeros pares

const numeros = [1,3,5,6,8,10,12]
console.log(numeros)

const result = numeros.map((numero) => {

if(numero % 2 === 1 ){
return numero + ' es impar'
}else{
    return numero + ' es par'
}
})
console.log(result) */


// funciones------------

/* function saludar(nombre, apellido, edad) {
    console.log('hola ' + nombre + ' ' + apellido + ' tiene ' + edad + ' años')
}
saludar('raul', 'gato', 5)
saludar('pepe','loro', 18)
saludar(15,'tito','lomas') */
/*
function saludar(nombre, apellido, serie) {
    console.log('mi nombre es ' + nombre + ' ' + apellido + ' y mi serie favorita es ' + serie)
}
saludar('eugenio', 'santoro', 'dr house')

 function sumar(numero1 , numero2){
    let num3=3;
    return (numero1 + numero2)*num3
}
let resultado = sumar(4,4)
console.log('el resultado es '+ resultado)
console.log('es '+ sumar(4,2)) */

//actividad 1

/* function getnombreLargo(nombre){
    return nombre.length;
}
let nombreLargo = getnombreLargo(prompt('nombre'));
console.log('cantidad de letras '+ nombreLargo)
 */
//---------------funciones anonimas

/* const suma = function(a,b){
    return a + b;
}
console.log(suma(7,8)); */

//funcion flecha

/* const resta = (a,b)=>{return a-b} //con un solo valor de retorno se pueden sacar los corchetes y sacar el return
console.log(resta(8,7))

//sin el return
const resta2 = (a,b)=>a-b
console.log(resta2(10,5))
 */
//-------------------
/*
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const iva = x => x * 0.21;

let precioProducto = 400
let precioDescuento = 40

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento)

console.log(nuevoPrecio);

let encabezado = document.querySelector('h1')
console.log(encabezado)

let text = document.querySelector('.texto')
console.log(text)

// ejercicio devolver mayor

 function esMayor(a, b) {
    if (a > b){
    return a
}else if (a === b) {
    return 'es igual'
}else
    return b
}
let devolverMayor = esMayor(parseFloat(prompt('ingrese numero')), parseFloat(prompt('ingrese otro')))

console.log(devolverMayor) */

///consigna de turnos

 const calcularTiempoProm = () => {
    return turnos * tiempoProm
}
//
const darFormatoHora = (tiempo) => {
    if (tiempo < 60) {
        return tiempo + 'min'
    } else if (tiempo >= 60) {
        return parseInt(tiempo / 60) + ':' + (tiempo % 60) + 'hr'
    }
}
//

let tiempoProm = 15
let turnos = 0
//

const sacarTurno = () => {
    let nombre = prompt('ingrese nombre')
    let quieroSacarTurno = prompt('desea sacar turno?')
    if (quieroSacarTurno == 'si' || quieroSacarTurno == 'SI' || quieroSacarTurno == 'Si') {
        alert(nombre + ' tiene turno para dentro de ' + darFormatoHora(calcularTiempoProm()) + 'min')
        turnos++
    } else {
        alert('tenga un buen dia')
    }
} 

//-------

/* const calcularTiempoPromedio = () =>{
    return turnos * tiempoPromedio
}


//recibe un numero, si es menor a 60 devueve numero + min, si es mayor a 60 devuelve numero + "hr", que pasa cuando es mas de una hora
const darFormatoDeHora = (tiempo) =>{
    if( tiempo < 60){
        return tiempo + "min"
    }else if (tiempo >= 60){
        return parseInt(tiempo/60) + ":" + (tiempo%60) + "hr"
    }
}

let tiempoPromedio = 30
let turnos = 0


const sacarTurno = () => { 
    let nombre = prompt("ingrese un nombre")
    let quiereSacarTurno = prompt("desea sacar turno")
    if(quiereSacarTurno == "si" || quiereSacarTurno == "SI" || quiereSacarTurno == "Si"){
        alert(nombre + " tiene turno para dentro de " + darFormatoDeHora(calcularTiempoPromedio()))
        turnos++
    }else{
        alert("que tenga un buen dia!")
    }
}  */