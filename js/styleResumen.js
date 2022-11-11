
/*
let nombreImp  =  `<h4> Nombre : ${nombre} <h4>`;
let apellidoImp = `<h4> Apellido : ${apellido} <h4>`;
let mailImp  =  `<h4> E-Mail : ${mail} <h4>`;
let cantidadImp  =  `<h4> Cantidad de Tickets : ${cantidad} <h4>`;
let categoriaImp  =  `<h4> Categoria Seleccionada : ${categoria} <h4>`;
let descuentoImp  =  `<h4> Descuento : ${descuento} <h4>`;
let totalPagoImp  =  `<h4> PRECIO FINAL : ${totalPago} <h4>`;
let leyendaImp  =  `<h4> Leyenda : ${nombre} <h4>, Gracias por su Compra`;
document.write (nameImp);
document.write (apellidoimp);
document.write (mailImp);
document.write (cantidadImp);
document.write (categoriaImp);
document.write (descuentoImp);
document.write (totalPagoImp);
document.write (leyendaImp);

const datosPersonales = `<div>Nombre: ${Nombre}</div>
<div>Apellido ${Apellido}</div><div>Email ${mail}</div>`;
resultadoDos.innerHTML = datosPersonales;
const tickets = `<div>Cantidad de Tickets ${c}</div>
<div>Categoria ${categoria}</div>`;
resultadoDos.innerHTML = tickets;
*/

document.addEventListener("DOMContentLoaded");

nombreC.innerHTML = `${nombre}`;
apellidoC.innerHTML = `${apellido}`;
mailC.innerHTML = `${email}`;
cantidadTicketC.innerHTML = `${cantidad}`;
categoriaSelectC.innerHTML = `${indice}`;
descuentoT.innerHTML = `${porceDto}`;
PrecioDC.innerHTML = `${precioD}`;
precioUnitarioT.innerHTML = `${precioUnitario}`;
totalPagoC.innerHTML = `${total}`;
t