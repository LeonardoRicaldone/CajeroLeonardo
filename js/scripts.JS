document.addEventListener("DOMContentLoaded", function () {
  const calcularBilletesBtn = document.getElementById("calcularBilletes");

  calcularBilletesBtn.addEventListener("click", function () {
      const nombreUsuario = document.getElementById("nombreUsuario").value;
      const cantidadRetiro = parseFloat(document.getElementById("cantidadRetiro").value);

      if (nombreUsuario && !isNaN(cantidadRetiro) && cantidadRetiro > 0) {
          calcularBilletes(nombreUsuario, cantidadRetiro);
      } else {
          alert("Por favor, ingresa un nombre de usuario válido y una cantidad válida.");
      }
  });
});

function calcularBilletes(nombreUsuario, cantidadRetiro) {
  const billetes = [100, 50, 20, 10, 5, 1];
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `<h3>Retiro para ${nombreUsuario}:</h3>`;

  for (const billete of billetes) {
      const cantidad = Math.floor(cantidadRetiro / billete);
      if (cantidad > 0) {
          resultadoDiv.innerHTML += `<p>Billetes de ${billete}$: ${cantidad}</p>`;
          cantidadRetiro %= billete;
      }
  }
}
