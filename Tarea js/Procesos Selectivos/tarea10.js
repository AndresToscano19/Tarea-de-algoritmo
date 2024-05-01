//!10.Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
//analisis de requerimiento 
//ent:num=0(leer), 
//pro: num > 100
//       entonces:
//      "es mayor que 100"
//    si no
//      "es menor que 100"
//     "si no"
//      "es igual que 100"
//  finsi
//escribir num
//sal: num
//!pseudocodigo
//declarar num=0
//escribir "ingreseun numero:"
//leer num
// num > 100
//       entonces:
//      "es mayor que 100"
//    si no
//      "es menor que 100"
//     "si no"
//      "es igual que 100"
//  finsi
//escribir num
const read=require ('prompt-sync')();
const write=console.log
function numero(){
   let num=0
   write("Numeros menores y mayores que 100.")
   num=read("ingrese un numero:")
if  (num >100 ){
    write (num,"es mayor que 100")
}
  
if (num<100) {
  write (num, "es menor que 100 ")
}

if (num==100) {
    write (num,"es igual que 100")
} 

}
numero()