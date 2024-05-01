
//!1.Pedir al usuario un número y mostrar si es mayor o menor que 10.
//analisis de requerimiento 
//ent:num1=0(leer), 
//pro: si num1<10
//       entonces:
//       num1 > 10
//    si no
//        num1<10
//  finsi
//escribir num1
//salida num1
//!pseudocodigo
//incio de algoritmo 
// declarar num1=0
// escribir "ingrese un numero"
//leer numero
//si num1<10
//       entonces:
//       num1 > 10
//    si no
//        num1<10
//  finsi
//escribir num1
//fin del algroitmo
const read = require('prompt-sync')();
const write = console.log
function numero(){
 let num1=0 
num1= read ("ingrese un numero:")
if (num1>10){
    write(num1," es mayor que 10")
}
else{
    write(num1," es menor que 10")
}
}
numero() 
