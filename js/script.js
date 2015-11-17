function mostrarCurso(curso){

	switch(curso) {
    case 'curso1':
        document.getElementById("curso1").style.display="block";
		document.getElementById("curso2").style.display="none";
		document.getElementById("curso3").style.display="none";
        break;
    case 'curso2':
        document.getElementById("curso2").style.display="block";
		document.getElementById("curso1").style.display="none";
		document.getElementById("curso3").style.display="none";
        break;
	case 'curso3':
        document.getElementById("curso3").style.display="block";
		document.getElementById("curso1").style.display="none";
		document.getElementById("curso2").style.display="none";
        break;
	default:
		document.getElementById("curso3").style.display="none";
		document.getElementById("curso1").style.display="none";
		document.getElementById("curso2").style.display="none";
		break;
	}
}

function mostrarMedioDePago(medioDePago){

	switch(medioDePago) {
    case 'tarjeta':
        document.getElementById("tarjetaCreditoLabel").style.display="block";
		document.getElementById("tarjetaCreditoInput").style.display="block";
		document.getElementById("efectivo").style.display="none";
        break;
    case 'efectivo':
        document.getElementById("tarjetaCreditoLabel").style.display="none";
		document.getElementById("tarjetaCreditoInput").style.display="none";
		document.getElementById("efectivo").style.display="block";
        break;
	default:
        document.getElementById("tarjetaCreditoLabel").style.display="none";
		document.getElementById("tarjetaCreditoInput").style.display="none";
		document.getElementById("efectivo").style.display="none";
		break;
	}
}

function validarFormulario(){
	var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var letras = /^[a-zA-Z\s]+$/;
	var numeros = /^[0-9]+$/;
	
	var form = document.getElementById('formularioInscripcion');
	
	/*Nombre y Apellido*/
	if(form.nombreApellido.value.length == 0){
		alert('Debe completar el campo con su Nombre y Apellido.');
		form.nombre.focus();
	}else if(!form.nombreApellido.value.match(letras)){
			alert('Debe completar Nombre y Apellido omitiendo números o caracteres especiales.');
			form.nombre.focus();		
		}
	
	/*DNI*/
	if(form.dni.value.length==0){
		alert('Debe completar el campo con su DNI.');
		form.dni.focus();
	}else if(!form.dni.value.match(numeros)){
			alert('Ingrese solo números.');
			form.dni.focus();
		}else if (form.dni.value.lenght<8){
			alert('Su número tiene menos dígitos de los que se aceptan.');
			form.dni.focus();
		}
		
	/*Email*/
	if(form.email.value.lenght==0){
		alert('Debe completar el campo con su casilla de correo.');
		form.email.focus();		
	}else if(!form.email.value.match(regexp)){
			alert('Su Mail no cumple con el formato.');
			form.email.focus();
		}
	
	/*Contraseña*/
	var contrasena = form.contrasena.value;
	var contrasenaValidar = form.contrasenaValidar.value;
	if(contrasena.lenght==0){
		alert('Debe incresar su contraseña.');
		form.contrasena.focus();		
	}else if(contrasenaValidar.length == 0){
		alert('Debe reingresar su contraseña.');
		form.contrasenaValidar.focus();		
	}else if(contrasena != contrasenaValidar){
			alert('Tiene un error en su contraseña.');
			form.contrasena.focus();
	}
	
	/*Acepto términos y condiciones*/
	if(document.getElementById("cb").checked == 0){
		alert('Debe aceptar los términos y condiciones');
		document.getElementById('cb').focus();
	}
	
	form.submit();
}

