let numeroMagico = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function intentar() {
  const input = document.getElementById("numeroInput");
  const mensaje = document.getElementById("mensaje");
  const intentosTexto = document.getElementById("intentos");

  const valor = input.value;

  if (valor === "") {
    alert("⚠️ Por favor ingresa un número.");
    return;
  }

  const numero = parseInt(valor);
  intentos++;

  if (numero < numeroMagico) {
    mensaje.textContent = "🔼 El número mágico es mayor.";
  } else if (numero > numeroMagico) {
    mensaje.textContent = "🔽 El número mágico es menor.";
  } else {
    mensaje.textContent = `🎉 ¡Correcto! Adivinaste el número mágico (${numeroMagico})`;
    intentosTexto.textContent = `Lo lograste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`;
  }

  input.value = "";
}

function reiniciar() {
  numeroMagico = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  document.getElementById("mensaje").textContent = "";
  document.getElementById("intentos").textContent = "";
  document.getElementById("numeroInput").value = "";
}
