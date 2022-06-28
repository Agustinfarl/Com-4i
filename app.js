
// declarar una constante, NO SE PUEDE REASIGNAR NI REDECLARAR

const constante= true

// var: es reasignable y redeclarable. NO ES RECOMENDABLE
var numero5 = 0
var numero5 = 5
var numero5 = true

// let: puede ser reasignable pero no es REDECLARABLE

let string = "texto"
let number = 5
let boolean = true


// array "arreglo" es un tipo de variable que almacena varios datos, pero sin identificar variables

const IVA = [21, 10.5, 27]

// con ".push" puedo forzar entrar un dato nuevo a la constante

IVA.push(15)



// evaluar si un numero es par o impar
// la funcion PARSEINT es para pasar una variable a NUMERO ENTERO, saca lo que esta despues del .

let numero = 4.7

let resto = parseInt(numero % 2)

if(resto === 0){
    console.log("el numero es par")
}
else{
    console.log("el numero es impar")
}

//dada una edad, evaluar si la persona es mayor
// si la persona no tiene 18 años o mas
// si la persona no tiene 21 años o mas no puede comprar alcohol

let edad= prompt("ingresa tu edad")

if ( edad < 18) {
  console.log('No puede ingresar')
}
else if (edad < 21 ) {
  console.log('Puede ingresar pero no puede comprar bebidas alcoholicas')
}
else {
  console.log('Puede ingresar y puede comprar bebidas alcoholicas')
}