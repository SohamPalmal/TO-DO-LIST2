document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            taskItem.addEventListener('click', function(e) {
                if (e.target.classList.contains('delete-button')) {
                    taskItem.remove();
                } else if (e.target.classList.contains('edit-button')) {
                    const span = taskItem.querySelector('span');
                    const newText = prompt("Edit task:", span.textContent);
                    if (newText !== null) {
                        span.textContent = newText;
                    }
                } else {
                    taskItem.querySelector('span').classList.toggle('completed');
                }
            });
        }
    }
});