
const read=require ('prompt-sync')();
const write=console.log
//!3.Pedir al usuario un número y mostrar si es par o impar.
// analisis del requerimiento
// ENT:numero=0(leer), reciduo=0(calcular)
// PRO: recidio = numero % 2
//      si reciduo==0 entonces
//         escribir "El es numero es par"
//      sino
//         escribir "El es numero es impar"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
//!pseudocodigo
//inicio de algoritmo
//declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//recidio = numero % 2
//      si reciduo==0 entonces
//         escribir "El es numero es par"
//      sino
//         escribir "El es numero es impar"
//      finsi
//      escribir "gracias por su visita..."
// finAlgoritimo
function par(){
let numero = 0, residuo = 0
write("Numeros pares")
numero = read("Ingrese numero: ") 
numero = parseInt(numero)
residuo = numero % 2
if (residuo == 0) {
  write(numero," es par")
}  
else{
  write(numero," es impar")
}
write("gracias por su visita...")
}
par()