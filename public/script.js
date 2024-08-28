function encriptar (){
    var texto = document.querySelector("#texto_imput").value;
    var textoCifrado = texto.replace(/e/gi, "enen").replace(/i/gi, "imssi").replace(/a/gi, "aia").replace(/o/gi, "obort").replace(/u/gi, "ufuaa");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#texto_imput").value;
    }


    
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){
    var texto = document.querySelector("#texto_imput").value; 
    var textoCifrado = texto.replace(/enen/gi, "e").replace(/imssi/gi, "i").replace(/aia/gi, "a").replace(/obort/gi, "o").replace(/ufuaa/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#texto_imput").value;

}

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

function copiar(){
    navigator.clipboard
    .readText()
    .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
}
var boton_copiar = document.querySelector("#btn-copiar"); boton_copiar.onclick = copiar;