//!9.Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
//analisis de requerimiento
//ent: num1=0(leer), residuo(proceso)
//pro: residuo= num*1
//              num*2
//              num*3
//              num*4
//              num*5
//              num*6
//              num*7
//              num*8
//              num*9
//              num*10
//sal:residuo
//!pseudocodigo
//incio del algoritmo
//declarar num1=0 , residuo=0
//escribir "ingrese un numero:"
//leer numero
//residuo= num*1
//              num*2
//              num*3
//              num*4
//              num*5
//              num*6
//              num*7
//              num*8
//              num*9
//              num*10
//leer residuo
//fin del algoritmo
const read = require("prompt-sync")();
const write =console.log
function tabla(){
    let num1=0 , residuo=0
write("Multiplicacion del 1 al 10")
    num1= read("ingrese un numero:")
num1=parseInt(num1);
residuo= num1*1 +" "+ num1*2+" "+ num1*3 +" "+ num1*4+" "+ num1*5 +" "+ num1*6+" "+ num1*7 +" "+ num1*8+" "+ num1*9 +" "+ num1*10
write(residuo)
}
tabla()