const Credentials = require('./credentials');
const Request = require('./request');
const AuthenticationVerifier = require('./authenticationVerifier');
const DataSanitizationVerifier = require('./dataSanitizationVerifier');
const BruteForceProtectionVerifier = require('./bruteForceProtectionVerifier');
const CachingVerifier = require('./cachingVerifier');

// Crear una solicitud con datos de prueba
const rawData = 'Datos sin procesar de la solicitud';
const ipAddress = '127.0.0.1';
const credentials = new Credentials('nombre_de_usuario', 'contraseña');
const request = new Request(rawData, ipAddress);
request.setCredentials(credentials);

// Configurar la cadena de verificación
const authenticationVerifier = new AuthenticationVerifier();
const sanitizationVerifier = new DataSanitizationVerifier();
const bruteForceVerifier = new BruteForceProtectionVerifier();
const cachingVerifier = new CachingVerifier();

authenticationVerifier.setNext(sanitizationVerifier);
sanitizationVerifier.setNext(bruteForceVerifier);
bruteForceVerifier.setNext(cachingVerifier);

// Realizar la verificación de la solicitud
const isAuthorized = authenticationVerifier.processRequest(request);

if (isAuthorized) {
  console.log('Acceso autorizado');
  // Continuar con la lógica de la aplicación, como enviar la solicitud al servidor de órdenes.
} else {
  console.log('Acceso no autorizado');
  // Tomar medidas apropiadas en caso de acceso no autorizado.
}
