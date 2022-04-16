function encrytarMensaje(){
	var textarea = document.querySelector("textarea[name=mensaje]");
	var texto = textarea.value; 
	if(isNaN(texto)){
		if(texto.includes("e")){
			texto = texto.replace("e", "enter");
		}if(texto.includes("i")){
			texto = texto.replace("i", "imes");
		}if(texto.includes("a")){
			texto = texto.replace("a", "ai");
		}if(texto.includes("o")){
			texto = (textarea.value).replace("o", "ober");
		}if(texto.includes("u")){
			texto = texto.replace("u", "ufat");
		}
		var textareaResultado = document.querySelector("textarea.textarea-resultado");
		textareaResultado.value = texto;
	}

	
}

function desencrytarMensaje(){
	var textarea = document.querySelector("textarea[name=mensaje]");
	var texto = textarea.value; 
	if(isNaN(texto)){
		if(texto.includes("enter")){
			texto = texto.replace("enter", "e");
		}if(texto.includes("imes")){
			texto = texto.replace("imes", "i");
		}if(texto.includes("ai")){
			texto = texto.replace("ai", "a");
		}if(texto.includes("ober")){
			texto = texto.replace("ober", "o");
		}if(texto.includes("ufat")){
			texto = texto.replace("ufat", "u");
		}
		var textareaResultado = document.querySelector("textarea.textarea-resultado");
		textareaResultado.value = texto;
	}
}
