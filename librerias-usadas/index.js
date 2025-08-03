const paqueteSuma = require('2025a-swgr2-cavc-suma');
const paqueteResta = require('2025a-swgr2-jjlv-resta');
const paqueteMultiplicacion = require('2025a-swgr2-jdxc-multiplicacion');
const paqueteDivision = require('2025a-swgr2-jjlv-division');

const resultadoSuma = paqueteSuma.suma(2, 1);
const resultadoResta = paqueteResta.resta(3, 2);
const resultadoMultiplicacion = paqueteMultiplicacion.multiplicacion(2, 5);
const resultadoDivision = paqueteDivision.division(9, 3);

console.log('Resultado de la suma:', resultadoSuma);
console.log('Resultado de la resta:', resultadoResta);
console.log('Rltado de la multiplicación:', resultadoMultiplicacion);
console.log('Resultado de la división:', resultadoDivision);