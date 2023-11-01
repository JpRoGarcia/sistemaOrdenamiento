// Verifier.js

// Clase abstracta que representa un verificador en una cadena de verificación.
class Verifier {
  setNext(verifier) {
    this.nextVerifier = verifier; // Configura el siguiente verificador en la cadena.
  }

  processRequest(request) {
    // Implementación de procesamiento de solicitud aquí.
    return true; // Reemplazar con la lógica real.
  }
}

module.exports = Verifier;

  