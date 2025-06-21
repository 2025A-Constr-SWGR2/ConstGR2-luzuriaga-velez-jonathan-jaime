/**
 * @file Archivo principal de la aplicación. Orquesta los módulos de UI y API.
 *
 * Conceptos de Clean Code aplicados:
 * - Usar funciones en lugar de clases cuando no se necesita estado complejo (Use functions).
 * - Manejo de errores (Don't ignore caught errors).
 * - Código organizado y verticalmente denso (Vertical Density).
 * - Evitar comentarios obvios (Comments).
 */

// Función principal que se autoejecuta para iniciar la aplicación.
(function(api, ui) {

    const form = ui.domElements.form;

    /**
     * Calcula la conversión de USD a otras monedas.
     * @param {number} amount - El monto en USD.
     * @param {object} rates - El objeto con las tasas de cambio.
     * @returns {object} Un objeto con los valores convertidos.
     */
    function calculateConversion(amount, rates) {
        const eur = amount * rates.EUR;
        const cop = amount * rates.COP;
        return { eur, cop };
    }

    /**
     * Manejador del evento de envío del formulario.
     * @param {Event} event - El objeto del evento.
     */
    async function handleConversion(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario.

        const amountUSD = ui.getAmount();
        if (isNaN(amountUSD)) {
            ui.clearResults();
            return;
        }

        try {
            const rates = await api.getRates();
            const conversions = calculateConversion(amountUSD, rates);
            ui.displayResults(conversions);
        } catch (error) {
            console.error("Error al obtener las tasas de cambio:", error);
            // Podríamos mostrar un mensaje de error en la UI.
        }
    }

    // Asignar el manejador de eventos al formulario.
    form.addEventListener('submit', handleConversion);

})(exchangeRatesAPI, ui); // Inyectamos las dependencias (API y UI).