document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyimage = document.querySelector('.empty');

    const toggleEmptyImage = () => {
    const hasTasks = taskList.querySelectorAll('li').length > 0;
    emptyimage.style.display = hasTasks ? 'none' : 'block';
};

    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (!taskText) {
            return; 
        }
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptyImage();
    };
    
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(e);
        }
    }); 
});