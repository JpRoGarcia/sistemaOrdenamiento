class Request {
    constructor(rawData, ipAddress) {
      this.rawData = rawData;
      this.ipAddress = ipAddress;
      this.sanitizedData = null;
      this.cached = false;
    }
  
    getSanitizedData() {
      // Implementar lógica de saneamiento de datos
    }
  
    getIpAddress() {
      return this.ipAddress;
    }
  
    isCached() {
      return this.cached;
    }
  
    setCached() {
      this.cached = true;
    }
  }
  
  module.exports = Request;
  