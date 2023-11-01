// Definición de la interfaz Verifier (Verificador)
class Verifier {
  constructor() {
    if (this.constructor === Verifier) {
      throw new Error("No se puede instanciar una interfaz.");
    }
  }

  // Método que debe ser implementado por las clases concretas
  processRequest(request) {
    throw new Error("El método 'processRequest' debe ser implementado.");
  }
}
  
  module.exports = Verifier;
  