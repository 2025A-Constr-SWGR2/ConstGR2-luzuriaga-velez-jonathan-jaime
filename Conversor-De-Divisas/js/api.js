/**
 * @file Módulo para manejar las tasas de cambio.
 * Simula una llamada a una API externa.
 *
 * Conceptos de Clean Code aplicados:
 * - Variables con nombres que revelan la intención (Meaningful Names).
 * - Usar constantes para valores que no cambian (Use const for variables that aren't reassigned).
 * - Funciones que hacen una sola cosa (Functions should do one thing).
 */

const exchangeRatesAPI = {
    /**
     * Obtiene las tasas de cambio actuales con base en USD.
     * @returns {Promise<object>} Un objeto con las tasas de cambio.
     */
    async getRates() {
        // Simulamos un retraso de red para imitar una llamada a API real.
        await new Promise(resolve => setTimeout(resolve, 500));

        // En una aplicación real, aquí haríamos una llamada con fetch() a una API.
        // ej: const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
        const rates = {
            'USD': 1,    // Base
            'EUR': 0.92, // 1 USD = 0.92 EUR
            'COP': 4100.50 // 1 USD = 4100.50 COP
        };

        return rates;
    }
};