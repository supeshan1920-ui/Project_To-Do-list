document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (!taskText) {
            return; 
        }
        const li = document.createElement('li');
        li.textContent = taskText; 
        taskList.appendChild(li);
        taskInput.value = '';
    };
    
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }); 

});