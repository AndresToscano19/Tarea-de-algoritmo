//!11.Solicitar al usuario un número y mostrar si es un número de un solo dígito.
//analisis de requerimiento 
//ent:num=0(leer), 
//pro: num < 10
//       entonces:
//      "es de un digito"
//    si no
//      "no es de un digito"
//  finsi
//escribir num
//sal: num
//!pseudocodigo
//declarar num=0
//escribir "ingreseun numero:"
//leer num
// num < 10
//       entonces:
//      "es de un digito"
//    si no
//      "no es de un digito"
//  finsi
//escribir num
const read=require ('prompt-sync')();
const write=console.log
function digito(){
   let num=0
   write("Indicar si es de un digito o no.")
num=read("ingrese un numero:")
if  (num < 10 ){
    write ("Es de un digio")
}
   else {
    write ("No es de un digito")
} 
}
digito()