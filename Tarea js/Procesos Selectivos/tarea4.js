//!4.Solicitar al usuario un número y mostrar si es positivo o negativo.
//analisis de requerimiento 
//ent:num=0(leer), 
//pro: num > 0
//       entonces:
//      "es positivo"
//    si no
//      "es negativo"
//  finsi
//escribir num
//sal: num
//!pseudocodigo
//declarar num=0
//escribir "ingreseun numero:"
//leer num
// num > 0
//       entonces:
//      "es positivo"
//    si no
//      "es negativo"
//  finsi
//escribir num
const read=require ('prompt-sync')();
const write=console.log
function numero(){
    write("Indicar si es positivo o negativo")
    let num=0
num=read("ingrese un numero:")
if  (num >0 ){
    write ("es positivo")
}
   else {
    write ("es negativo")
} 
}
numero()