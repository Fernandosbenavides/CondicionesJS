const ingresarBtn = document.getElementById("boton-validar");
const validacion = document.getElementById("texto-validar");

ingresarBtn.addEventListener("click", function () {
  const key1 = document.getElementById("1digito").value;
  const key2 = document.getElementById("2digito").value;
  const key3 = document.getElementById("3digito").value;
  const password = key1 + key2 + key3;
  if (password === "911") {
    validacion.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    validacion.innerHTML = "Password 2 correcto";
  } else {
    validacion.innerHTML = "Password incorrecto";
  }
});
