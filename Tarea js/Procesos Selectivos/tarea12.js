const read =require('prompt-sync')();
const write = console.log
//!12.Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
//analasis de requerimiiento
//ent: fac=0(leer), iva=0(leer), pf=0(calcular)
//pro:   iva=fac*(iva/100)
//       pf=fac+iva
//escribir pf  
//sal:pf
//!pseudocogido
//incio del algoritmo
//declarar fac=0, iva=0, pf=0
//escribir "ingrese el valor de la factura:"
//leer precio de la factura
//escribir "ingrese el iva"
//leer iva
//     iva=fac*(iva/100)
//     pf= fac+iva
//escribir pf
//fin del algoritmo
function iva(){
let fac=0, iva=0,  pf=0
write("Mostrar el precio con iva")
fac= read ("ingrese factura:")
fac=parseInt(fac)
iva= read ("ingrese iva:")
iva=parseInt=(iva)
      iva=fac*(iva/100)
       pf= fac+iva
write("Su total es de:",pf )    
write ("Gracias por su visita")
}
iva()