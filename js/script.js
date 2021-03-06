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
			$('#9').hide("fast");
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
			$('#9').hide("fast");
		}else{
			$('#6').show("fast");
			$('#7').show("fast");
			$('#8').show("fast");
			$('#9').show("fast");
		}
	}
}

function mostrarCurso(curso){

	switch(curso) {
    case 'curso1':
        document.getElementById("curso1").style.display="block";
		document.getElementById("curso2").style.display="none";
		document.getElementById("curso3").style.display="none";
		document.getElementById("curso4").style.display="none";
		document.getElementById("cursoHiddenValue").value = "curso1";
        break;
    case 'curso2':
        document.getElementById("curso2").style.display="block";
		document.getElementById("curso1").style.display="none";
		document.getElementById("curso3").style.display="none";
		document.getElementById("curso4").style.display="none";
		document.getElementById("cursoHiddenValue").value = "curso2";
        break;
	case 'curso3':
        document.getElementById("curso3").style.display="block";
		document.getElementById("curso1").style.display="none";
		document.getElementById("curso2").style.display="none";
		document.getElementById("curso4").style.display="none";
		document.getElementById("cursoHiddenValue").value = "curso3";
        break;
	case 'curso4':
        document.getElementById("curso4").style.display="block";
		document.getElementById("curso1").style.display="none";
		document.getElementById("curso2").style.display="none";
		document.getElementById("curso3").style.display="none";
		document.getElementById("cursoHiddenValue").value = "curso4";
        break;
	default:
		document.getElementById("curso3").style.display="none";
		document.getElementById("curso1").style.display="none";
		document.getElementById("curso2").style.display="none";
		document.getElementById("curso4").style.display="none";
		document.getElementById("cursoHiddenValue").value = "";
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
		document.getElementById("medioDePagoHiddenValue").value = "efectivo";
        break;
	default:
        document.getElementById("tarjetaCreditoLabel").style.display="none";
		document.getElementById("tarjetaCreditoInput").style.display="none";
		document.getElementById("efectivo").style.display="none";
		break;
	}
}

function guardarValorDeTarjetaDeCreditoEnFormulario(val){
	document.getElementById("medioDePagoHiddenValue").value = val;
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
	
	function validacionLargo(element, nombreCamp, min, max){
		
		if(max != ''){
			if(element.value.length > max){
				alert('El campo '+ nombreCamp + ' no puede tener m\u00e1s de ' + max + ' caracteres');
				element.focus();
				throw '';
			}
		}
		
		if(min != ''){	
			if(element.value.length < min){
				alert('El campo '+ nombreCamp + ' no puede tener menos de ' + min + ' caracteres');
				element.focus();
				throw '';
			}
		}	
	}
	
	function validacionLetas(element, nombreCamp, min, max){
		
		validacionNulo(element, nombreCamp);
		validacionLargo(element, nombreCamp, min, max);
		
		if(!element.value.match(letras)){
			alert('El campo '+ nombreCamp + ' no puede contener n\u00fameros');
			element.focus();
			throw '';
		}
		
	}
	
	function validacionNumeros(element, nombreCamp, min, max){
		validacionNulo(element, nombreCamp);
		validacionLargo(element, nombreCamp, min, max);
		
		if(!element.value.match(numeros)){
			alert('El campo '+ nombreCamp + ' no puede contener letras');
			element.focus();
			throw '';
		}
		
	}	
	
	function validacionMail(element, nombreCamp, min, max){
		validacionNulo(element, nombreCamp);
		validacionLargo(element, nombreCamp, min, max);
		
		if(!element.value.match(mail)){
			alert('El campo '+ nombreCamp + ' no cumple con el formato esperado');
			element.focus();
			throw '';
		}
	}
	
	function validacionPassword(element, secondElement, nombreCamp, nombreSegundoCampo, min, max){
		validacionNulo(element, nombreCamp);
		validacionLargo(element, nombreCamp, min, max);
		
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
			alert('Debe aceptar los t\u00e9rminos y condiciones');
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
	validacionLetas(form.nombreApellido, 'Nombre y apellido', 10, 30);
	
	/*DNI*/
	validacionNumeros(form.dni, 'DNI', 8, 10);
		
	/*Email*/
	validacionMail(form.email, 'E-Mail', 6, 30);

	/*Contraseña*/
	validacionPassword(form.contrasena, form.contrasenaValidar, 'Contraseña', 'Repetir contraseña', 6, 16);	
		
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

function mostrarMapa(idMapa){
	if(idMapa == 'mapa1'){
		document.getElementById("ballester").style.display="block";
		document.getElementById("caballito").style.display="none";
		document.getElementById("caseros").style.display="none";
		document.getElementById("ramos").style.display="none";
	}
	
	if(idMapa == 'mapa2'){
		document.getElementById("ramos").style.display="block";
		document.getElementById("caballito").style.display="none";
		document.getElementById("caseros").style.display="none";
		document.getElementById("ballester").style.display="none";
	}
	
	if(idMapa == 'mapa3'){
		document.getElementById("caballito").style.display="block";
		document.getElementById("ramos").style.display="none";
		document.getElementById("caseros").style.display="none";
		document.getElementById("ballester").style.display="none";
	}
	
	if(idMapa == 'mapa4'){
		document.getElementById("caseros").style.display="block";
		document.getElementById("ramos").style.display="none";
		document.getElementById("ballester").style.display="none";
	}	
}


