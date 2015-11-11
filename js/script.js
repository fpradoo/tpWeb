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

