
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
			$(this).replaceWith("<td class='texto'><input id='"+columna+"-"+index+"' value=" +$(this).text()+"></input></td>");
		}
		);
		$("."+columna+">.emoticon").each(function(index){
			$(this).replaceWith("<td class='emoticon'><select id='"+columna+"-Emoticon'><option value='bien'>bien</option><option value='mal'>mal</option></select></input></td>");
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
		'<form name = "formulario" onsubmit="Aceptar('+parametro+')" onreset="anular()">'+
		'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';
	}else{
		alert('Solo se puede editar una línea. Recargue la página para poder editar otra')
	}
	
	

};
function Aceptar(col){
	console.log($(""+col+"-0").val());
	var datos={alimento:$(""+col+"-0").val(),
			calorias:$(""+col+"-1").val(),
			grasas:$(""+col+"-2").val(),
			proteinas:$(""+col+"-3").val(),
			carbohidratos:$(""+col+"-4").val()}
//$.get("Formulario2", datos, procesar)
//document.formulario.submit();
};

function Cancelar(){
window.location.reload();
}