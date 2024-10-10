// Función para añadir un valor al display de la calculadora
function appendToDisplay(value) {
    // Obtiene el elemento de display por su ID y añade el valor al final
    document.getElementById('display').value += value;
}

// Función para limpiar el display de la calculadora
function clearDisplay() {
    // Obtiene el elemento de display por su ID y establece su valor como una cadena vacía
    document.getElementById('display').value = '';
}

// Función para borrar el último carácter del display
function deleteLast() {
    // Obtiene el valor actual del display
    let displayValue = document.getElementById('display').value;
    // Actualiza el display con todos los caracteres excepto el último
    document.getElementById('display').value = displayValue.slice(0, -1);
}

// Función para calcular el resultado de la expresión en el display
function calculateResult() {
    try {
        // Intenta evaluar la expresión en el display
        let result = eval(document.getElementById('display').value);
        // Si tiene éxito, muestra el resultado en el display
        document.getElementById('display').value = result;
    } catch (error) {
        // Si hay un error (expresión inválida), muestra una alerta
        alert('Expresión inválida');
    }
}