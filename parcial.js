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
		//let text = $(this).text();
		$(this).replaceWith("<td class='texto'><input value=" +$(this).text()+"></input></td>");
		//$("<input value=" +text+"></input>").appendTo($(this));
	}
	);
	$("."+columna+">.emoticon").each(function(index){
		//let text = $(this).text();
		$(this).replaceWith("<td class='emoticon'><select><option value='bien'>bien</option><option value='mal'>mal</option></select></input></td>");
		//$("<input value=" +text+"></input>").appendTo($(this));
	}
	);
	$("."+columna+">.editor").each(function(index){
		//let text = $(this).text();
		$(this).replaceWith("<td class='editando'>En edicion</input></td>");
		//$("<input value=" +text+"></input>").appendTo($(this));
	}
	);
}
