
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const btnBorrar = document.querySelector("#btnBorrar");
const btnSubmit = document.querySelector("#btnSubmit");

const TICKET = 200; //1//
let descuento = 0;
let arrayDatosIngresados = [];
let total = 0;
let precioD = 0;
let precioUnitario = 0;



btnBorrar.addEventListener("click", borrar);
cantidad.addEventListener("input", mostrarTotal);
categoria.addEventListener("change", mostrarTotal);
btnSubmit.addEventListener("click", validarFormulario);

// 2 secundaria Accion Borrar//
function borrar() {
    nombre.value = "";
    apellido.value = "";
    email.value = ""; 
    cantidad.value = "";
    cantidad.value = "";
    totalPago.textContent = "";
}

//guardo datos en un array para utilzar en Factura//
arrayDatosIngresados.push(nombre);
arrayDatosIngresados.push(apellido);
arrayDatosIngresados.push(email);
arrayDatosIngresados.push(cantidad.value);



// Accion aplico porcentual Descuento segun categoria//
function calcularDescuento() {
    switch (categoria.value) {
        case "0":
            return false;
        case "1":
            return 0;
        case "2":
            return 0.8;
        case "3":
            return 0.5;
        case "4":
            return 0.15;
        default:
            return false;
    }

}
descuento = calcularDescuento();



// calculo el monto de descuento segun categoria//
function calculaDto() {
    precioD = (TICKET * calcularDescuento());
    return precioD;
}
console.log(precioD);

// calculo el precio unitario del ticket con descuento aplicado segun categoria//
function calculaPrecioUnitario (){
     precioUnitario = (TICKET - calculaDto());
     return precioUnitario;
}

arrayDatosIngresados.push(precioUnitario);
console.log(precioUnitario);

                                
//calculo el pago total, cantidad de tickets por el monto segun categoria y descuento de corresponder//
function calcula() {
    total = (Number(cantidad.value) * calculaPrecioUnitario());
    return total; 

   function mostrarTotal() {
       totalPago.textContent = calcula();
  }
totalPago.innerHTML = `${total.toFixed(2)}`;


}
console.log(total);

arrayDatosIngresados.push(total);

// muestro el total a pagar obtenido anteriormente//
function mostrarTotal() {
    totalPago.textContent = calcula();
}
totalPago.innerHTML = `${total.toFixed(2)}`;

document.getElementById("formulario").addEventListener('btnSubmit', validarFormulario);
function validarFormulario() {
  // submit.preventDefault();

    let nombre = document.getElementById('nombre').value; 
        
    if (nombre.length == 0||nombre.length== null || nombre ==/^\s+$/){
        alert ('No has ingresado un nombre válido');
        document.getElementById('nombre').focus();
        return;
      }
       else {
            let apellido = document.getElementById('apellido').value; 
         
            if (apellido.length == 0 || apellido.length == null || apellido == (/^\s+$/)){
             alert ('No has ingresado un apellido válido');
             document.getElementById('apellido').focus(); 
             return;
                 }
                 else {
                    const email = document.getElementById('mail').value; 
                    if (email.length == 0 || email.length == null || email == (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/)){
                      alert ('No has ingresado un e-mail válido');
                      document.getElementById('mail').focus();
                      return;
                         }
                     
                            else 
                            { let cantidad= document.getElementById ('cantidadTickets').value; 
                               if (cantidad == null || cantidad == 0) {
                                  alert ('Por favor, indique una cantidad');
                                  document.getElementById('cantidadTicket').focus();
                                  return;
                                    }
                                    else {
                                        const indice= document.getElementById('categoriaSelect').value; 
               
                                        if (indice === "0" ||indice == null) {
                                         alert ('Por favor, seleccione una categoria');
                                         document.getElementById('categoriaSelect').focus();
                                          return;
                                             }
                                    else{
                                      //PARA VERIFICAR CAPTURA DE DATOS
                                      console.log(nombre) ;
                                      console.log(apellido) ;
                                      console.log(email) ;

                                      
                              
                                      console.log(TICKET);
                                  
                                      const porceDto = calcularDescuento()*100;
                                      console.log( porceDto);
                                      console.log(precioUnitario) ;
                                      
                                      console.log(precioD) ;

                                      console.log( parseInt(cantidad) );
                                      let cantidadN = parseInt (cantidad);
                              
                                      
                                      console.log(total) ;

                                      //console.log(arrayDatosIngresado);
                                    
                                      mostrarTotal();
                                      console.log(totalPago);
                                      
                                      totalPago.innerHTML = `${total.toFixed(2)}`;
                                      $('#comprarModal').modal("show");
                                     return true;
                                    }}}}}}
                                // }//



