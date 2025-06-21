/**
 * @file Módulo para la manipulación del DOM y la interfaz de usuario.
 *
 * Conceptos de Clean Code aplicados:
 * - Separación de responsabilidades (Single Responsibility Principle): Este módulo solo maneja el DOM.
 * - Nombres de funciones que describen lo que hacen (Use long, descriptive names).
 * - Evitar números mágicos (No Magic Numbers).
 * - Usar parámetros de objeto para funciones con muchos argumentos (Function arguments (2 or fewer ideally)).
 */

const ui = {
    // Guardamos las referencias a los elementos del DOM en un solo lugar.
    domElements: {
        form: document.querySelector('#conversion-form'),
        amountInput: document.querySelector('#amount-usd'),
        resultContainer: document.querySelector('#result-container')
    },

    /**
     * Obtiene el monto ingresado por el usuario.
     * @returns {number} El monto en USD.
     */
    getAmount() {
        return parseFloat(this.domElements.amountInput.value);
    },

    /**
     * Muestra los resultados de la conversión en la página.
     * @param {object} conversions - Un objeto con los montos convertidos.
     * @param {number} conversions.eur - Monto en Euros.
     * @param {number} conversions.cop - Monto en Pesos Colombianos.
     */
    displayResults({ eur, cop }) {
        this.domElements.resultContainer.innerHTML = `
            <p><strong>EUR:</strong> €${eur.toFixed(2)}</p>
            <p><strong>COP:</strong> $${cop.toFixed(2)}</p>
        `;
    },

    /**
     * Limpia los resultados anteriores.
     */
    clearResults() {
        this.domElements.resultContainer.innerHTML = '';
    }
};