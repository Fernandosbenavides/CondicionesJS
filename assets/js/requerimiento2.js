const sumarBoton = document.getElementById("resultbutton");
const sumarParrafo = document.getElementById("advice");

sumarBoton.addEventListener("click", function () {
  const cantred = parseInt(document.getElementById("cantidad-red").value);
  const cantblue = parseInt(document.getElementById("cantidad-blue").value);
  const cantgreen = parseInt(document.getElementById("cantidad-green").value);

  if (cantred >= 0 && cantblue >= 0 && cantgreen >= 0) {
    const suma = cantred + cantblue + cantgreen;
    if (suma > 10) {
      sumarParrafo.innerHTML = "Llevas demasiadas cartas";
    } else {
      sumarParrafo.innerHTML = "Llevas " + suma + " cartas";
    }
  } else {
    sumarParrafo.innerHTML =
      "Por favor, ingresa una cantidad válida en todos los campos.";
  }
});
