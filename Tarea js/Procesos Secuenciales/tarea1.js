const read = require('prompt-sync')();
const write = console.log
//!1.Pedir al usuario su nombre y saludarlo.
//analisis de requerimiento:
//entrada: nombre1=(leer),palabra1=(Hola),saludo(proceso) 
//proceso: saludo=nombre1+palabra1
//salida: saludo
//!pseudocodigo
//incio del algortimo
//declarar palabra1="Hola",nombre1="",saludo""
//leer palabra1
//escribir "ingrese nombre1"
//leer nombre1
//saludo=palabra1+nombre1
//escribir saludo
//fin de algoritmo
function unir(){
    let palabra1="Hola",nombre1="",saludo=""

    nombre1 = read("Ingrese un nombre:")
    saludo=palabra1+" "+nombre1
    write(saludo)
}
unir()