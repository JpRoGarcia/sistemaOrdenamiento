// Credentials.js

// Clase que representa las credenciales de un usuario.
class Credentials {
  constructor(username, password) {
    this.username = username; // Almacena el nombre de usuario.
    this.password = password; // Almacena la contraseña del usuario.
  }

  // Retorna el nombre de usuario.
  getUsername() {
    return this.username;
  }

  // Retorna la contraseña del usuario.
  getPassword() {
    return this.password;
  }
}

module.exports = Credentials;

