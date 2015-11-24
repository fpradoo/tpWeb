function mostrarOcultar(id){
	if(id == 1){
		if($('#2').is(":visible")){
			$('#2').hide("fast");
			$('#3').hide("fast");
			$('#4').hide("fast");
			$('#5').hide("fast");
			$('#6').hide("fast");
			$('#7').hide("fast");
			$('#8').hide("fast");
		}else{
			$('#2').show("fast");
			$('#3').show("fast");
			$('#4').show("fast");
			$('#5').show("fast");
		}	
	}
	
	if(id == 4){
		if($('#6').is(":visible")){
			$('#6').hide("fast");
			$('#7').hide("fast");
			$('#8').hide("fast");
		}else{
			$('#6').show("fast");
			$('#7').show("fast");
			$('#8').show("fast");
		}
	}
}

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
	
	/**** EXPRESIONES REGULARES ****/
	var mail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var letras = /^[a-zA-Z\s]+$/;
	var numeros = /^[0-9]+$/;
	var pass = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
	
	/**** FINAL EXPRESIONES REGULARES ****/
	
	/**** DEFINICION DE FUNCIONES ****/
	
	function validacionNulo(element, nombreCamp){
		if(element.value.length == 0){
			alert('El campo '+ nombreCamp + ' no puede estar vacio');
			element.focus();
			throw '';
		}		
	}
	
	function validacionLetas(element, nombreCamp){
		
		validacionNulo(element, nombreCamp);
		
		if(!element.value.match(letras)){
			alert('El campo '+ nombreCamp + ' no puede contener numeros');
			element.focus();
			throw '';
		}
		
	}
	
	function validacionNumeros(element, nombreCamp){
		validacionNulo(element, nombreCamp);
		
		if(!element.value.match(numeros)){
			alert('El campo '+ nombreCamp + ' no puede contener letras');
			element.focus();
			throw '';
		}
		
	}	
	
	function validacionMail(element, nombreCamp){
		validacionNulo(element, nombreCamp);
		
		if(!element.value.match(mail)){
			alert('El campo '+ nombreCamp + ' no cumple con el formato esperado');
			element.focus();
			throw '';
		}
	}
	
	function validacionPassword(element, secondElement, nombreCamp, nombreSegundoCampo){
		validacionNulo(element, nombreCamp);
		
		if(!element.value.match(pass)){
			alert('El campo '+ nombreCamp + ' no cumple con el formato esperado');
			element.focus();
			throw '';
		}
		
		if(element.value != secondElement.value){
			alert('El campo '+ nombreSegundoCampo + ' debe coincidir con el campo ' + nombreCamp);
			secondElement.focus();
			throw '';
		}
		
	}
	
	function validacionAceptoLosTerminosYCondiciones(element){
		if(element.checked == 0){
			alert('Debe aceptar los términos y condiciones');
			element.focus();
			throw '';
		}
	}
	
	function validacionCheckearCombos(element, nombreCamp){
		if(element.value == ''){
			alert('Debe elegir un ' + nombreCamp);
			element.focus();
			throw '';
		}
	}	
	
	/**** FINAL DEFINICION DE FUNCIONES ****/
	
	
	/**** LLAMADO A VALIDACIONES ****/
	
	var form = document.getElementById('formularioInscripcion');
	
	/*Nombre y Apellido*/
	validacionLetas(form.nombreApellido, 'Nombre y apellido');
	
	/*DNI*/
	validacionNumeros(form.dni, 'DNI');
		
	/*Email*/
	validacionMail(form.email, 'E-Mail');

	/*Contraseña*/
	validacionPassword(form.contrasena, form.contrasenaValidar, 'Contraseña', 'Repetir contraseña');	
		
	/*Acepto términos y condiciones*/
	validacionAceptoLosTerminosYCondiciones(form.aceptoTerminos);
	
	/*Elegir un combo de curso*/
	validacionCheckearCombos(document.getElementById('curso'), 'curso');
	
	/*Elegir un combo de medio de pago*/
	validacionCheckearCombos(document.getElementById('medioDePago'), 'medio de pago');
	
	if(document.getElementById('medioDePago').value != '' && document.getElementById('medioDePago').value != 'efectivo'){
		validacionNumeros(document.getElementById('tarjetaCreditoInput'), 'número de tarjeta');
	}
	
	
	/**** FINAL LLAMADO A VALIDACIONES ****/	
	
	/* Hago submit */
	form.submit();
}


