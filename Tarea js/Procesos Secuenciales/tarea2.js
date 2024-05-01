const read = require('prompt-sync')();
const write = console.log
//! 2.Pedir dos palabras y presentarlas concatenadas
//analisis de requerimientos:
//entrada: palabra1=(leer), palabra2=(leer), concatenar(proceso)
//proceso:concatenar=palabra1+palabra2
//salida:concatenar
//!pseudocodigo:
//inicio de algoritmo 
// declarar palabra1:¨¨,palabra2:¨¨,concatenar:¨¨
// escribir ¨ingrese palabra1¨
// leer palabra1
// escribir ¨palabra2¨
// leer palabra2
// concatenar=palabra1+palabra2
// escribir concatenar
// fin del algoritmo
function unir(){
    let palabra1="",palabra2="",concatenar=""
    palabra1 = read("Ingrese una palabra:")
    palabra2 = read("Ingrese una palabra:")
    concatenar=palabra1+" "+palabra2
     write(concatenar)
    }
unir()