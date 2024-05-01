//!5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
//analisis de requerimiento 
//ent:num1=0(leer),num2=0(leer) 
//pro: num1 == num2
//       entonces:
//      "Son iguales"
//    si no
//      "No son iguales"
//  finsi
//sal: mensaje
//!pseudocodigo
//declarar num=0
//escribir "ingreseun numero:"
//leer num
// num1 == num2
//       entonces:
//      "Son iguales"
//    si no
//      "No son iguales"
//  finsi
//escribir mensaje
const read=require ('prompt-sync')();
const write=console.log
function comparacion(){
   let num1=0, num2=0
write("Indicar si son numeros iguales o no")
   num1=read("ingrese un numero:")
num2=read("ingrese un numero:")
if  (num1 == num2 ){
    write ("Son iguales")
}
   else {
    write ("No son iguales")
} 
}
comparacion()