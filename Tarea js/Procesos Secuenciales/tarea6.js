//!6.Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
//analis de requerimiento
//ent: num1=0 (leer),num2=0 (leer),residuo:0(proceso)
//pro:residuo=num1*num2
//sal:residuo
//!pseudocodigo
//inicio del algoritmo
//declarar num1=0, num=0 ,residuo=0
//escribir "ingrese un num1"
//leer  num1
//escribir "ingrese un num2"
//leer num2
//residuo=num1*num2
//escriir residuo
//fin del algoritmo
const read = require('prompt-sync')();
const write = console.log
function multiplicacion(){
 let num1=0, num2=0 ,residuo=0
 write("multiplicacion")
 num1=read("Ingrese un numero:")
 num2=read("Ingrese un numero:")
 residuo=num1* num2
 write(residuo)
}
multiplicacion()