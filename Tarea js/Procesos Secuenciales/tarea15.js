//!15.Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
//analisis de requerimiento
//entr: aregloElementos= ["Alejandro","Daviv","Andres","Genesis","Yomi"]
//pro: arregloMover = ["arregloNombre[1]",arregloNombre[2],arregloNombre[3],arregloNombre[4],arregloNombre[5]]
//sal: arrelgarMover
//!pseudocodigo
//incio de algoritmo 
//declarar aregloElementos= ["Alejandro","Daviv","Andres","Genesis","Yomi"]
// declarar arregloMover=["arregloNombre[1]",arregloNombre[2],arregloNombre[3],arregloNombre[4],arregloNombre[5]]
//escribir "cambian los valores el primer y ultimo elemnto"
//escribir arregloMover=["arregloNombre[5]",arregloNombre[2],arregloNombre[3],arregloNombre[4],arregloNombre[1]]
//fin del algoritmo
const write = console.log
function elementos(){
write("Presentar nombres")
    let aregloElementos= ["Alejandro","Daviv","Andres","Genesis","Yomi"] 
 let arregloMover=["","","","",""]
write (aregloElementos)
write  ("cambian los valores el primer y ultimo elemnto")
arregloMover=["Yomi","Daviv","Andres","Genesis","Alejandro"]
write (arregloMover)
}
elementos()