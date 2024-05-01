//!7.Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
//analisis del requerimiento
//ent: tc=0 (leer), tf(proceso)  
//pro:tf=tc*9/5+32
//sal:tf
//!pseudocodigo
//incio de algoritmo
//declarar tc=0, tf=0
//escribir tc="Ingrese la temperatura en grados Celsius:"
//leer grados celsius
//tf=tc*9/5+32
//escribir tf
//fin del algoritmo
const read = require('prompt-sync')();
const write = console.log
function temperatura(){
let tc=0.0, tf=0.0
tc=read("Ingrese la temperatura en grados Celsius:")
tc=parseFloat(tc)
tf=(tc*9/5)+32
write (tc,"en grados Fahrenheit es:",tf )  
}
temperatura()