//!16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
//analasis de requerimiiento
//ent: sueldoM=0(leer), sueldof=0(calcular), imp=0(calcular)
//pro: 
//     sueldoF=sueldoM*12
// si sueldoF > $30,000 
//      entonces
//       imp=sueldoF*(imp/100)
// finsi
// sueldoF=sueldoF-impu
//escribir sueldoF 
//sal:sueldoF
//!pseudocogido
//incio del algoritmo
//declarar sueldoM=0,) sueldoF=0, imp=0
//escribir "ingrese el sueldo mensual:"
//leer el sueldo mensual
//     sueldoF=sueldoM*12
// si sueldoF > $30,000 
//      entonces
//       imp=sueldoF*(imp/100)
// finsi
// sueldoF=sueldoF-impu
//escribir sueldoF 
//fin del algoritmo
const read =require('prompt-sync')();
const write = console.log
function descuento(){
let sueldoM=0, sueldoF=0, imp=0.
sueldoM= read ("ingrese el sueldo mensual:")
sueldoM=parseFloat(sueldoM)
sueldoF=sueldoM*12
  if ("sueldoF > $30000"){
       imp=sueldoF*(imp/100)
    }
    sueldoF=sueldoF-imp
write("Su sueldo anual es de:",sueldoF )    
write ("Gracias por su visita")
}
descuento()