//!8.Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
//analisis de requerimiento
//ent: nom1=""(leer), nom2=""(proceso)
//pro: nom2=nom1 + nom1 + nom1
//sal:nom2
//!pseudocodigo
//incio de algoritmo
//declarar nom1="", nom2=""
//escribir nom1="ingrese su nombre"
//leer nom1
//nom2=nom1 + nom1 + nom1
//escribir nom2
//fin del algoritmo
const read= require("prompt-sync")();
const write= console.log
function Nombre(){
    let nom1="", nom2=""
    write("MOSTRAR SU NOMBRE 3 VECES")
    nom1=read("ingrese su nombre:")
    nom2=nom1+" " + nom1 +" "+ nom1
    write (nom2)
}
Nombre()