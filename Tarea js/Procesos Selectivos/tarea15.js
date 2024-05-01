//!15.Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
//analisis de requerimiiento
//ent: pv=0.0(leer), af=0(leer), ds=10%(calcular), pf=0(calcular)
//pro: si af < 2010
//        entonces:
//         descuento = pv*0.10
//       finsi
//       pf= pv-ds 
//escribir pf   
//sal:pf
//!pseudocogido
//incio del algoritmo
//declarar pv=0.0, af=0, ds=10%, pf=0
//escribir "ingrese precio de venta"
//leer precio de venta
//escribir "ingrese Año de fabricacion"
//leer Año de fabricacion
//si af < 2010
//        entonces:
//         descuento = pv*0.10
//       finsi
//       pf= pv-ds
//escribir pf
//fin del algoritmo
const read =require('prompt-sync')();
const write = console.log
function ventaVehiculos(){
let pv=0.0, af=0, ds=0, pf=0.0
pv= read ("ingrese precio de venta:")
pv=parseFloat(pv)
af= read ("ingrese Año de fabricacion:")
af=parseInt=(af)
if (af < 2010){
         ds = pv*0.10}
       pf= pv-ds
write(pf )    
}
ventaVehiculos()
