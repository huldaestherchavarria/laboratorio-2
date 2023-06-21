const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Eliminar</button>
    `;
    taskList.appendChild(taskItem);
taskInput.value = '';
// Agregar efecto al agregar una tarea
taskItem.classList.add('fade-in');
setTimeout(() => {
taskItem.classList.remove('fade-in');
}, 500);
}
}
// Evento para agregar una tarea al hacer clic en el botón "Agregar"
addTaskBtn.addEventListener('click', addTask);
// Evento para agregar una tarea al presionar la tecla "Enter" en el campo de entrada
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    addTask();
    }
    });
    // Evento para eliminar una tarea al hacer clic en el botón "Eliminar"
    taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
    }
    });