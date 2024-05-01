//!14.Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
//analisis de requerimiiento
//ent: notaex=0(leer)
//pro: si anotaex > 60
//        entonces:
//         Aprobado
//     si no
//       Reprobado
//       finsi
//escribir notaex  
//sal: notaex
//!pseudocogido
//incio del algoritmo
// si anotaex > 60
//        entonces:
//         Aprobado
//     si no
//       Reprobado
//       finsi
//escribir notaex  
//fin del algoritmo
const read =require('prompt-sync')();
const write = console.log
function examen(){
let notaex=0

notaex= read ("ingrese nota de examen:")
notaex=parseInt=(notaex)
if (notaex < 60){
    write("Reprobado")     }
else {
    write("Aprobado")
}  
}
examen()