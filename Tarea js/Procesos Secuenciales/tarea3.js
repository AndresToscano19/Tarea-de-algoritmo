const read = require('prompt-sync')();
const write = console.log
//! 3.Solicitar al usuario dos números y mostrar su suma.
//analisis de requerimientos:
//entrada: numero1=(0), numero2=(0), reciduo(proceso)
//proceso:residuo=numero1+numero2
//salida:suma
//!pseudocodigo:
//incio de algoritmo 
// declarar numero1:¨¨,numero2:¨¨,sumar:¨¨
// escribir ¨ingrese numero1¨
// leer numero1
// escribir ¨numero2¨
// leer numero2
// concatenar=numero1+numero2
// escribir residuo
// fin de algoritmo
function sumar(){
    let numero1= 0,numero2= 0,reciduo= 0
    numero1 = read("Ingrese un numero:")
    numero1 = parseInt(numero1);
    numero2 = read("Ingrese un numero:")
    numero2 = parseInt(numero2);
    reciduo=numero1+numero2
     write(reciduo)
    }
sumar()