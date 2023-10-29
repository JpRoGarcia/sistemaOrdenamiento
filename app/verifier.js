class Verifier {
    constructor() {
      this.nextVerifier = null;
    }
  
    setNext(verifier) {
      this.nextVerifier = verifier;
    }
    processRequest(request) {
      // Implementa la lógica de verificación común aquí.
      // Puedes realizar verificaciones que se aplican a todos los verificadores.
      // Luego, pasa la solicitud al siguiente verificador en la cadena, si existe.
      if (this.nextVerifier) {
        return this.nextVerifier.processRequest(request);
      } else {
        // Si no hay más verificadores en la cadena, devuelve true para indicar que la solicitud ha pasado todas las verificaciones.
        return true;
      }
    }
  }
  
  module.exports = Verifier;
  