# Proyecto: Conversor de Divisas - Aplicando Clean Code

Este es un pequeño aplicativo web para convertir divisas que sirve como ejemplo práctico de la aplicación de los principios de "Clean Code" descritos en el repositorio [clean-code-javascript-es](https://github.com/andersontr15/clean-code-javascript-es).

## Principios de Clean Code Aplicados

A continuación se detallan los conceptos aplicados y los archivos donde se pueden observar.

### 1. Variables con Nombres que Revelan la Intención (Meaningful Names)

- **Archivos**: `js/api.js`, `js/ui.js`, `js/app.js`
- **Descripción**: Se utilizaron nombres de variables y funciones descriptivos para que el propósito del código sea evidente sin necesidad de comentarios.
- **Ejemplos**:
  - `exchangeRatesAPI` en `js/api.js` describe claramente un objeto que maneja la API de tasas de cambio.
  - `handleConversion` en `js/app.js` es una función que, como su nombre indica, maneja el proceso de conversión.
  - `domElements` en `js/ui.js` agrupa referencias a elementos del DOM.

### 2. Funciones que Hacen una Sola Cosa (Single Responsibility Principle)

- **Archivos**: `js/api.js`, `js/ui.js`, `js/app.js`
- **Descripción**: Cada función tiene una única y clara responsabilidad. Esto hace que el código sea más fácil de entender, probar y mantener.
- **Ejemplos**:
  - `getRates()` en `js/api.js` solo se encarga de obtener las tasas.
  - `getAmount()` y `displayResults()` en `js/ui.js` se dedican exclusivamente a interactuar con el DOM para obtener datos o para mostrarlos.
  - `calculateConversion()` en `js/app.js` solo realiza el cálculo matemático.

### 3. Separación de Responsabilidades (Modularity)

- **Archivos**: `js/api.js`, `js/ui.js`, `js/app.js`
- **Descripción**: El código se ha modularizado en tres archivos JavaScript distintos, cada uno con una responsabilidad clara:
  - `api.js`: Lógica de negocio y datos (simulación de API).
  - `ui.js`: Manipulación de la interfaz de usuario (DOM).
  - `app.js`: Orquestación y lógica de la aplicación.
- **Beneficio**: Esta separación facilita la reutilización y las pruebas. Por ejemplo, podríamos cambiar la UI por completo sin tocar la lógica de `api.js`.

### 4. Argumentos de Función (Idealmente 2 o menos)

- **Archivos**: `js/ui.js`
- **Descripción**: Se evitó pasar un número excesivo de parámetros a las funciones. Cuando una función necesitaba múltiples datos relacionados, se pasó un objeto.
- **Ejemplo**:
  - La función `displayResults({ eur, cop })` en `js/ui.js` recibe un solo objeto como parámetro. Esto es más legible y extensible que `displayResults(eur, cop)`. Si en el futuro quisiéramos añadir otra moneda, solo modificaríamos el objeto.

### 5. No Usar Números Mágicos (No Magic Numbers)

- **Archivos**: `js/api.js`
- **Descripción**: Los valores fijos con un significado específico se asignan a constantes con nombres descriptivos.
- **Ejemplo**:
  - En `js/api.js`, las tasas de cambio `EUR: 0.92` y `COP: 4100.50` están dentro de un objeto llamado `rates`, dándoles un contexto claro en lugar de ser números "mágicos" en medio del código.

### 6. Manejo de Errores (Don't ignore caught errors)

- **Archivos**: `js/app.js`
- **Descripción**: Las operaciones que pueden fallar (como las llamadas a una API) se envuelven en un bloque `try...catch`. Los errores se capturan y se informa de ellos en la consola.
- **Ejemplo**:
  - En la función `handleConversion` de `js/app.js`, la llamada `await api.getRates()` está dentro de un `try...catch` para manejar posibles fallos de red o de la API.

### 7. Comentarios que Aclaran, no que Balbucean (Comments)

- **Archivos**: Todos los archivos `.js`
- **Descripción**: Se evitaron comentarios que simplemente repiten lo que el código ya dice. En su lugar, se usaron para explicar el "porqué" de ciertas decisiones o para documentar la finalidad de un módulo o una función compleja (usando JSDoc).
- **Ejemplo**:
  - El comentario en `js/api.js` `// Simulamos un retraso de red...` explica por qué se usa `setTimeout`, algo que el código por sí solo no revela.