//!12.	Pedir 5 números y asignarlos en un arreglo
//analis de requerimiento
//ent: num1=0 (leer),num2=0 (leer),num3=0 (leer),num4=0 (leer), num5=o (leer)
//pro: numeros=["num1","num2","num3","num4","num5"]
//sal:numeros
//!pseudocodigo
//incio del algoritmo
//declarar num1=0 ,num2=0 ,num3=0 ,num4=0 , num5=o 
//escribir "ingrese un num1"
//leer  num1
//escribir "ingrese un num"
//leer num2
//escribir "ingrese un num3"
//leer  num3
//escribir "ingrese un num4"
//leer num4
//escribir "ingrese un num5"
//leer num5
// escribir numeros=["num1","num2","num3","num4","num5"]
//fin del algoritmo
const read = require('prompt-sync')();
const write = console.log
function Numeros(){
 let num1=0 ,num2=0 ,num3=0 ,num4=0 , num5=0
 num1=read("ingrese un numero:")
 num2=read("ingrese un numero:")
 num3=read("ingrese un numero:")
 num4=read("ingrese un numero:")
 num5=read("ingrese un numero:")
 numeros=[num1,num2,num3,num4,num5]
 write (numeros)
}
Numeros()
