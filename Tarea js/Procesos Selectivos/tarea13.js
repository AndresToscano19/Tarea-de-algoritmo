//!13.Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
//analasis de requerimiiento
//ent: pro=0(leer), des=0(leer), pf=0(calcular)
//pro: 
//       pf=pro*(des/100)
//       pf=pro-des
//escribir pf  
//sal:pf
//!pseudocogido
//incio del algoritmo
//declarar pv=0, des=0, pf=0
//escribir "ingrese precio de producto"
//leer precio de producto
//escribir "ingrese descuento"
//leer descuento
//       pf=pro*(des/100)
//       pf=pro-des
//escribir pf
//fin del algoritmo
const read =require('prompt-sync')();
const write = console.log
function descuento(){
let des=0.0, pro=0,  pf=0.0
write("Mostrar el precio con su descuento")
des= read ("ingrese descuento:")
des=parseFloat(des)
pro= read ("ingrese producto:")
pro=parseInt=(pro)
      des=pro*(des/100)
       pf= pro-des
write("Su total es de:",pf )    
write ("Gracias por su visita")
}
descuento()
