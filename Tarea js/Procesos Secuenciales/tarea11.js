//!11.Solicitar al usuario una distancia en metros y mostrarla en centímetros.ç
//analisis del requerimiento
//ent: m=0 (leer), cm=0 (proceso)  
//pro:cm=m*100
//sal:cm
//!pseudocodigo
//incio de algoritmo
//declarar m=0, cm=0
//escribir m="Ingrese la temperatura en grados Celsius:"
//leer metros
//cm=m*100
//escribir cm
//fin del algoritmo
const read = require('prompt-sync')();
const write = console.log
function metros(){
let m=0, cm=0
write("convertir metros a centimetros")
m=read("Ingrese los metros:")
m=parseInt(m)
cm=m*100
write (cm,"centimetros" )  
}
metros()