//var elementos = document.getElementsByClassName(emoticon);
$(document).ready(
	function CambiarEmojis(){
		console.log('Hola');
		console.log($(".columna1>td"));
		//let emojis = document.querySelector('.emoticon');
			//console.log(emojis);
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
	$("#espacio").append("<div>Pulse Aceptar para guardar los cambios o cancelar para anularlos</div>");
	$("#espacio").append("<span><button id='aceptar' onclick='Aceptar("+parametro+")'>Aceptar</button></span>");
	$("#espacio").append("<span><button id='cancelar' onclick='Cancelar()'>Cancelar</button></span>");
		var nodoContenedorForm = document.getElementById('mostrarCambio');
	nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
'<form name = "formulario" action="http://aprenderaprogramar.com" method="get" onsubmit="Aceptar('+parametro+')" onreset="anular()">';

};
function Aceptar(col){
	var nodoContenedorForm = document.getElementById('mostrarCambio');
	nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
'<form name = "formulario" action="http://aprenderaprogramar.com" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
'<input type="hidden" name="alimento" value="'+document.querySelector('#'+col+'-0').value+'">'+
'<input type="hidden" name="calorias" value="'+document.querySelector('#'+col+'-1').value+'">'+
'<input type="hidden" name="grasas" value="'+document.querySelector('#'+col+'-2').value+'">'+
'<input type="hidden" name="proteina" value="'+document.querySelector('#'+col+'-3').value+'">'+
'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#'+col+'-4').value+'">';
document.formulario.submit();
};
function Cancelar(){

window.location.reload();

}