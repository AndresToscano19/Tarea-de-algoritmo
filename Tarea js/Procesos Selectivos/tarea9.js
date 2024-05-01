
const read=require ('prompt-sync')();
const write=console.log
//!9.Solicitar al usuario un número y mostrar si es divisible por 2.
// analisis del requerimiento
// ENT:numero=0(leer),reciduo=0(calcular)
// PRO: recidio = numero % 2
//      si reciduo==0 entonces
//         escribir "El numero es divisible entre 2"
//      sino
//         escribir "El numero no es divisible entre 2"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
//!pseudocodigo
//inicio de algoritmo
//declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 2
// si reciduo==0 entonces
//         escribir "El numero es divisible entre 2"
//      sino
//         escribir "El numero no es divisible entre 2"
//      finsi
//   escribir "gracias por su visita..."
// finAlgoritimo
let numero = 0, reciduo = 0
write("divisibles entre 2")
numero = read("Ingrese numero: ") //Math.random()*20//
numero = parseInt(numero)// "9" => 9
reciduo = numero % 2
if (reciduo == 0) {
  write(numero," es divisible entre 2")
  //num="es mutiplo"
}  
else{
  write(numero," no es divisible entre 2")
  //num = "no es multiplo"
}
write("gracias por su visita...")