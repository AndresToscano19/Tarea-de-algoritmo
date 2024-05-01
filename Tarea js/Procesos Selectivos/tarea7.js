//!7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo-
//analisis de requerimiento
//entr: nom1=""(leer), nom2=""(leer), 
//pro: si nom1>nom2
//       entonces
//      "El primer nombre es mayor en orden alfabetico que el segundo." 
//      entonces nom1<nom2
//       "El segundo nombre es mayor en orden alfabetico que el primero."
//      si no
//      "Los nombres son iguales en orden alfabeticos."
//     finsi
//
//sal:mostrar mensajes
//!pseudocodigo
//incio del algoritmo
//declarar nom1=""(leer), nom2=""(leer)
//escribir "ingrese primer nombre"
//leer primer nombre 
//escribir "ingrese segundo nombre"
//leer segundo nombre 
// si nom1>nom2
//       entonces
//      "El primer nombre es mayor en orden alfabetico que el segundo." 
//      entonces nom1<nom2
//       "El segundo nombre es mayor en orden alfabetico que el primero."
//      si no
//      "Los nombres son iguales en orden alfabeticos."
//     finsi
const read=require('prompt-sync')();
const write=console.log
function comparaciòn(){
let nom1="" , nom2=""
write("Ingresa dos nombres e indica si son iguales , si el primer nombre es mayor que el segundo")
      nom1=read("ingrese el primer nombre:")
      nom2=read("ingrese el segundo nombre:")
      if (nom1>nom2){
      write("El primer nombre es mayor en orden alfabetico que el segundo." )
    ;}
else if (nom1<nom2){
       write("El segundo nombre es mayor en orden alfabetico que el primero.")
 ;
    }
      else {     write ("Los nombres son iguales en orden alfabeticos.")
;
    }
    }
comparaciòn()