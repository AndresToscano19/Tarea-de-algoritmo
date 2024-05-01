//!5.Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
//analisis de requerimiento
//ent:num=0 (leer),edad(proceso)
//pro:edad=num=0+1
//     finsi
//     escribir "el promximo año vas a tener "
//sal:edad
//!pseudocodigo
//inicio del algoritmo
//declarar num=0,edad=0
//escribir "ingrese un numero"
//leer num
//edad=num+1
//escribir edad
//fin del algoritmo
const read = require('prompt-sync')();
const write = console.log
function suma(){
    let num=0, edad=0
    num= read("ingresa tu edad:")
    num= parseInt(num);
    edad=num+1;  
   write("el proximo año vas a tener")
    write(edad)
}
suma()