window.onload = function () {
    //document.formContacto.name.focus();
    document.formContacto.addEventListener('submit', validarFormulario);
    } 

    function validarFormulario(evObject) {
        evObject.preventDefault();
        var todoCorrecto = true;
        var formulario = document.formularioContacto;
        for (var i=0; i<formulario.length; i++) {
         if(formulario[i].type =='text') {
         if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
         alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
         todoCorrecto=false;
         }
         }
         }
        if (todoCorrecto ==true) {formulario.submit();}
        } 



    function validarFormulario(evObject) {
        evObject.preventDefault();
        var todoCorrecto = true;
        var formulario = document.formContacto;
        if (isNaN(formulario.name.value)==true) {alert ('El campo nombre esta vacio');
        todoCorrecto=false;}
        if (isNaN(formulario.message.value)==true) {alert ('El campo nombre esta vacio');
        todoCorrecto=false;}
        if ( /^[1-9]\d$/.test(formulario.phone.value)==false ) {alert ('El numero es incorrecto');
        todoCorrecto=false;}
        if (isNaN(formulario.email.value)==true ) {
        alert ('correo no valido'); todoCorrecto=false;}
        if (todoCorrecto ==true) {formulario.submit();}
        } 