const read = require('prompt-sync')();
const write = console.log

//!4.Pedir al usuario un número y mostrar su doble.
//analisis de requerimiento 
//entra: num1=0(leer),residuo=0(calcular)
//proceso:residuo=num1*2
//salida:residuo
//!pseudocodigo
//inicio de algoritmo 
//declarar num1=0,residuo=0
//escribir "ingrese num1"
//leer num1
//residuo=num1*2
//escribir residuo
//fin del algoritmo
function multiplo2(){
 let num1= 0 , residuo = 0
 num1 = read("ingrese un numero:") 
 residuo= num1*2 
 write( "El doble de",num1 ,"es:",residuo) 
}
multiplo2()