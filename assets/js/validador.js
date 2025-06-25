document
  .querySelector("#formularioRegistro")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = this.querySelector("#nombre").value.trim();
    const correo = this.querySelector("#correo").value.trim();
    const contrasenia = this.querySelector("#contrasenia").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "") {
      alert("Por favor, ingresa tu nombre completo.");
      return;
    }

    if (!emailRegex.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (contrasenia.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    alert("Registro exitoso.");
    
  });
