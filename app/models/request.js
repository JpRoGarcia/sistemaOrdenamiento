// Request.js

// Clase que representa una solicitud con datos y dirección IP.
class Request {
  constructor(rawData, ipAddress) {
    this.rawData = rawData; // Almacena la información de la solicitud.
    this.ipAddress = ipAddress; // Almacena la dirección IP de la solicitud.
  }

  // Retorna los datos de la solicitud.
  getRawData() {
    return this.rawData;
  }

  // Retorna la dirección IP de la solicitud.
  getIpAddress() {
    return this.ipAddress;
  }
}

module.exports = Request;


