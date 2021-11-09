const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click",()=>{
  const inputMensaje = document.getElementById("mensaje-input").value;
  const mensaje = document.getElementById("mensaje-output");

  mensaje.innerHTML = inputMensaje;
});