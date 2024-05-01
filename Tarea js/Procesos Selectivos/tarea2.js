//!2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//analisis de requerimiento 
//ent:edad=0(leer), 
//pro: si edad<18
//       entonces:
//      "es menor de edad"
//    si no
//      "es mayor de edad"
//  finsi
//escribir edad
//sal: edad
//!pseudocodigo
//declarar edad=0
//escribir "ingrese su edad"
//leer edad
//si edad<18
//       entonces:
//      "es menor de edad"
//    si no
//        "es mayor de edad"
//  finsi
//escribir edad
const read=require ('prompt-sync')();
const write=console.log
function edad(){
   let edad=0
edad=read("ingrese su edad:")
if  (edad<18){
    write ("es menor de edad")
}
   else {
    write ("es mayor de edad")
} 
}
edad()