document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyimage = document.querySelector('.empty');
    const todoapp = document.querySelector('.todo-app');

   const toggleEmptyImage = () => {
    const hasTasks = taskList.querySelectorAll('li').length > 0;
    if (emptyimage) emptyimage.style.display = hasTasks ? 'none' : 'block';
    if (todoapp) todoapp.style.width = hasTasks ? '100%' : '50%';
};

    const addTask = (text, completed = false) => {
        const taskText = text || taskInput.value.trim();
        if (!taskText) {
            return; 
        }
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''} />
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;

        const editBtn = li.querySelector('.edit-btn');
        const checkbox = li.querySelector('.checkbox');

        if (completed) {
            li.classList.add('completed');
            editBtn.disabled = true;
            editBtn.style.opacity = '0.5';
            editBtn.style.pointerEvents = 'none';

        }

        checkbox.addEventListener('change', () => {
            const ischecked = checkbox.checked;
            li.classList.toggle('completed', ischecked);
            editBtn.disabled = ischecked;
            editBtn.style.opacity = ischecked ? '0.5' : '1';
            editBtn.style.pointerEvents = ischecked ? 'none' : 'auto';
        });

        editBtn.addEventListener('click', () => {
            if(!checkbox.checked) {
                taskInput.value = li.querySelector('span').textContent;
                li.remove();
                toggleEmptyImage();
            }
        })
        
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            toggleEmptyImage();
        })

        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptyImage();
    };
    
    addTaskButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask();
        }
    }); 
});