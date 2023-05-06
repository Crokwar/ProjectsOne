const mensajeEncriptado = document.querySelector(".mensaje-encriptado");


function botonEncriptar(){
  let mensajeEntrada = document.querySelector(".mensaje-ingresado").value;

  if(/^[a-zñáéíóúü\s]*$/.test(mensajeEntrada)){
    mensajeEntrada = mensajeEntrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/a/g, "ai");
    document.querySelector(".mensaje-encriptado").value = mensajeEntrada;
  } else{
    alert("El texto contiene mayusculas y minusculas");
  }
}

function botonDesencriptar(){
  let mensajeEntrada = document.querySelector(".mensaje-ingresado").value;

  if(/^[a-zñáéíóúü\s]*$/.test(mensajeEntrada)){
    mensajeEntrada = mensajeEntrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ai/g, "a").replace(/ufat/g, "u");
    document.querySelector(".mensaje-encriptado").value = mensajeEntrada;
  } else{
    alert("El texto contiene mayusculas y minusculas");
  }
}


function botonCopiar(){
  mensajeEncriptado.select();
  navigator.clipboard.writeText(mensajeEncriptado.value)
  mensajeEncriptado.value = "";
  alert("Texto Copiado")
}


