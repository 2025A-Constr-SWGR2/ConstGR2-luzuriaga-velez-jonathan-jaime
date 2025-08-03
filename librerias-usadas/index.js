const paqueteSuma = require('2025a-swgr2-cavc-suma');
const paqueteResta = require('2025a-swgr2-jjlv-resta');
const paqueteMultiplicacion = require('2025a-swgr2-jdxc-multiplicacion');
const paqueteDivision = require('2025a-swgr2-jjlv-division');

const resultadoSuma = paqueteSuma.suma(5, 7);
const resultadoResta = paqueteResta.resta(10, 2);
const resultadoMultiplicacion = paqueteMultiplicacion.multiplicacion(3, 4);
const resultadoDivision = paqueteDivision.division(12, 3);

console.log('Resultado de la suma:', resultadoSuma);
console.log('Resultado de la resta:', resultadoResta);
console.log('Rltado de la multiplicación:', resultadoMultiplicacion);
console.log('Resultado de la división:', resultadoDivision);