document.addEventListener("DOMContentLoaded", function () {
    
/* document.getElementById("formulario").addEventListener('click', validarFormulario);});
 function validarFormulario(click) {*/
document.getElementById("formulario").addEventListener('submit', validarFormulario);});

  function validarFormulario(submit) {
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
                       else {
                         const indice= document.getElementById('categoriaSelect').value; 

                         if (indice === "0" ||indice == null) {
                          alert ('Por favor, seleccione una categoria');
                          document.getElementById('categoriaSelect').focus();
                           return;
                              }
                            else 
                            { let cantidad= document.getElementById ('cantidadTickets').value; 
                               if (cantidad == null || cantidad == 0) {
                                  alert ('Por favor, indique una cantidad');
                                  document.getElementById('cantidadTicket').focus();
                                  return;
                                    }
                                    else{
                                      console.log(nombre) ;
                                      console.log(apellido) ;
                                      console.log(email) ;

                                      //console.log(selectCategoria.textcontent) ;
                                     // console.log() ;
                                      console.log(TICKET);
                                    //  console.log(captarCategoria());
                                      const porceDto = calcularDescuento()*100;
                                      console.log( porceDto);
                                      console.log(precioUnitario) ;
                                      
                                      console.log(precioD) ;

                                      console.log( parseInt(cantidad) );
                                      let cantidadN = parseInt (cantidad);
                                      const capturaCat = indice.options[indice.selectedIndex].text;   
                                      console.log(capturaCat);
                                      
                                      console.log(total) ;

                                      console.log(arrayDatosIngresados);
                                    }
                                 // else 
                                 // {$('#resumen').modal();
                                 //  return true;
                                // }
                                 // { 
                                   // const newFormData(document.getElementById("Formulario"),[]);
                                  
                                //}
                                     
                              }}}};
 $('comprarModal').modal(show);}
 const capturaCat = indice.options[indice.selectedIndex].text;                  
  // export { nombre,apellido,email, capturaCat, categoria, porceDto, precioUnitario, precioD, cantidadN, total };
 
 // this.resumen;
   //{$('#resumen').modal();
  // return true;
 // this.resumen;
 /*const comprarButton = document.querySelector('.comprarButton');
 comprarButton.addEventListener('click', comprarButtonClicked);*/
 //const comprarButton = document.querySelector('#btnSubmit');
//comprarButton.addEventListener('click', btnSubmitClicked);
//

console.log(arrayDatosIngresados);
validarFormulario();
/*function resumen(){
document.formulario.submit();}*/






/*
function alert(){
    alert.innerText=("El formulario se envio exitosamente");

if (document.fvalida.interes.selectedIndex==0){
    alert("Debe seleccionar un motivo de su contacto.")
    document.fvalida.interes.focus()
    return 0;
}*/
//validarFormulario();
//el formulario se envia

//document.validarFormulario.submit();
//alert();

//document.addEventListener("DOMContentLoaded", function () {
 //document.getElementById("formulario").addEventListener('calcula', validacion);
//});

    
//function validacion(){
    /* form = document.getElementsById ("formulario");
     for(let i=0
         ; i<form.ElementInternals.lenght;i++);
   
     const name=document.getElementById("nombre").value;
     if (valor1 === null || valor1.length === 0 ||/^\s+$/.test(name))
     {
       alert ('[Error ] Completa el campo correctamente'); return false;
     }
     const apellido =document.getElementById("apellido").value;
     if (apellido === null || valor2.length === 0 || /^\s+$/.test(apellido))
        {
         alert ('[Error ] Completa el campo correctamente');  return false;
        }
     const email=document.getElementById("mail").value;
     if (email === null|| !/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))
          {
           alert ('[Error ] Coloca un e-mail válido'); return false;}
     const cantidad =document.getElementById("cantidad").value;
     if (isNaN (cantidad))
         {
           alert ('[Error ] Completa el campo correctamente');  return false;
         }
     const indice =document.getElementById("categoriaSelect").selectIndex;
     if (indice == null|| indice == "")
         {
           alert ('[Error ] Completa el campo correctamente');  return false;
         }
         this.submit();
    }
    validacion();}*/
