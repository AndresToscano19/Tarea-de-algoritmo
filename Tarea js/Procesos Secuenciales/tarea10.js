//!10.	Pedir al usuario dos números y mostrar el mayor.
//analisis de requerimiento
//ent: num1=0(leer), num2=0(leer), residuo=0(proceso)
//pro: residuo=num1>num2, num2<num1, num1==num2
//sal:resudio
//!pseudocodigo
//incio de algoritmo
//declarar mum1=0, num2=0, residuo=0
//escribir "ingresa un numero"
//leer num1
//escribir "ingresa un numero"
//leer num2
//Si numero1 > numero2 Entonces
//Escribir "El primer número es mayor que el segundo."
//Sino Si numero2 > numero1 Entonces
//    Escribir "El segundo número es mayor que el primero."
//Sino
//    Escribir "Ambos números son iguales."
//Fin Si
//escribir residuo "el mayor es"
//fin del algoritmo
const read = require('prompt-sync')();
const write = console.log
function numero(){
let num1=0, num2=0, residuo=0
write("Numero mayor")
num1= read("ingresa un numero:")
num1=parseInt(num1)
num2=read("ingresa un numero:")
num2=parseInt(num2)
residuo= num1==num2 
if (num1 > num2) 
{write (num1,"El primer número es mayor que el segundo.")
}
else 
  {write (num2,"El segundo número es mayor que el primero.")
  
}
}
numero()
 



