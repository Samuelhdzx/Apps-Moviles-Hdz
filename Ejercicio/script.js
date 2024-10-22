document.addEventListener('DOMContentLoaded', () => {
    let tasks = []; // Se declara un arreglo vacío para almacenar las tareas.

    const taskForm = document.getElementById('taskForm'); // Se obtiene el formulario de tareas del DOM.
    const taskList = document.getElementById('taskList'); // Se obtiene la lista de tareas del DOM.

    const addTask = (e) => { // Se define una función para añadir una tarea.
        e.preventDefault(); // Se previene el comportamiento por defecto del formulario.
        const task = document.getElementById('taskInput').value; // Se obtiene el valor del input de tarea.
        if (task) { // Si hay una tarea ingresada.
            tasks.push(task); // Se añade la tarea al arreglo de tareas.
            console.log(task); // Se imprime la tarea en la consola.
            renderTasks(); // Se llama a la función para renderizar la lista de tareas.
            document.getElementById('taskInput').value = ''; // Se limpia el campo de entrada.
        }
    };

    const renderTasks = () => { // Función para renderizar las tareas en el DOM.
        // Se une todo el HTML generado en una sola cadena.
        console.log(tasks); // Se imprime el arreglo de tareas en la consola.
    };

    taskForm.addEventListener('submit', addTask); // Se añade un event listener al formulario.
});
