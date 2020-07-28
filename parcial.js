
var editando=0;
$(document).ready(
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
);
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
			if(index==3){
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
		var parametro = "\""+columna+"\""
		console.log($(""+columna+"-0").val());
		var cambios = document.getElementById('mostrarCambio');
		cambios.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
		'<form name = "formulario" action="http://aprenderaprogramar.com" onsubmit="Aceptar()" onreset="anular()">'+
		'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
	}else{
		alert('Solo se puede editar una línea. Recargue la página para poder editar otra')
	}
	
	

};
function Aceptar(){
var cambios = document.getElementById('mostrarCambio');
cambios.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
'<form name = "formulario" action="http://aprenderaprogramar.com" method="get" onsubmit="Aceptar()" onreset="anular()">'+
'<input type="hidden" name="alimento" value="'+document.querySelector('#alimento').value+'">'+
'<input type="hidden" name="calorias" value="'+document.querySelector('#calorias').value+'">'+
'<input type="hidden" name="grasas" value="'+document.querySelector('#grasas').value+'">'+
'<input type="hidden" name="proteina" value="'+document.querySelector('#proteina').value+'">'+
'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'">'+
'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
document.formulario.submit();

}

function Cancelar(){
window.location.reload();
}