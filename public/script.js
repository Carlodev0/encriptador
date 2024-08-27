function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function encriptar(){
    var texto = document.querySelector('#cuadro__encriptacion').value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "aiyuyy").replace(/o/gi, "oberfoo").replace(/u/gi, "uninun");
    document.querySelector("texto").value = textoCifrado;
    document.querySelector("#cuadro__encriptacion").value;
    }
    console.log(`el texto encriptado es ${textoCifrado}`);

function desencriptar(){

}


