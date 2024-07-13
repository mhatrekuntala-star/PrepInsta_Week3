// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const clearCompletedButton = document.getElementById('clear-completed-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    clearCompletedButton.addEventListener('click', clearCompletedTasks);

    function addTask(task) {
        if (task.trim() === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = task;

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskList.appendChild(taskItem);
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('#task-list .completed');
        completedTasks.forEach(task => task.remove());
    }
});
