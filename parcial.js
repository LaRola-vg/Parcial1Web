
var editando=0;

function CambiarEmojis(){
	$(".emoticon").each(function(index) {
    console.log(index + ": " + $(this).text());
      	if ($(this).text() == 'bien') {
      		console.log('yupi');
      		$(this).replaceWith("<td class='emoticon'>&#128526</td>");//reemplazar con carita feliz
      	}else{
      		$(this).replaceWith("<td class='emoticon'>&#128543</td>");//reemplazar con carita triste
      	}
  	});	
}

function editarC1(columna){
	if(editando==0){
		editando=1;
		$("."+columna+">.texto").each(function(index){
			var i ="hi";
			if(index==0){
				i="alimento"
			}
			if(index==1){
				i="calorias"
			}
			if(index==2){
				i="grasas"
			}
			if(index==3){
				i="proteina"
			}
			if(index==4){
				i="carbohidratos"
			}
			$(this).replaceWith("<td class='texto'><input id='"+i+"' type='text' name='"+i+"' value=" +$(this).text()+"></td>");
		}
		);
		$("."+columna+">.emoticon").each(function(index){
			$(this).replaceWith("<td class='emoticon'><select id='Emoticon'><option value='bien'>bien</option><option value='mal'>mal</option></select></input></td>");
		}
		);
		$("."+columna+">.editor").each(function(index){
			$(this).replaceWith("<td class='editando'>En edicion</input></td>");
		}
		);
		var cambios = document.getElementById('mostrarCambio');
		cambios.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
		'<form name = "formulario" action="Formulario2.html" onsubmit="Aceptar()" onreset="Cancelar()">'+
		'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
	}else{
		alert('Solo se puede editar una línea. Recargue la página para poder editar otra')
	}
};
var x =document.querySelector('#alimento');
function Aceptar(){
var cambios = document.getElementById('mostrarCambio');
cambios.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
'<form name = "formulario" action="Formulario2.html" method="get" onsubmit="Aceptar()" onreset="Cancelar()">'+
'<input type="hidden" name="alimento" id="alimento" value="'+document.querySelector('#alimento').value+'">'+
'<input type="hidden" name="calorias" id="calorias" value="'+document.querySelector('#calorias').value+'">'+
'<input type="hidden" name="grasas" id="grasas" value="'+document.querySelector('#grasas').value+'">'+
'<input type="hidden" name="proteina" id="proteina" value="'+document.querySelector('#proteina').value+'">'+
'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'">'+
'<input type="hidden" name="Emoticon" value="'+document.querySelector('#Emoticon').value+'">'+
'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
document.formulario.submit();
}

function Cancelar(){
window.location.reload();
}

function llenarTabla(x1, x2, x3, x4, x5, x6){
	var tabla= document.getElementById('TablaFinal');
	if(x6=='bien'){
		x6="&#128526"
	}else{
		x6="&#128543"
	}
	tabla.innerHTML = '<thead><tr><th colspan="2">'+x1+x6+'</th></tr></thead><tbody><tr><td>Carorias</td><td>'+x2+'</td></tr><tr><td>grasas</td><td>'+x3+'</td></tr><tr><td>Proteina</td><td>'+x4+'</td></tr><tr><td>Carbohidratos</td><td>'+x5+'</td></tr></tbody>';
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}