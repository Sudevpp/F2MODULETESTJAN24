document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const taskName = document.getElementById('taskName').value;
      const dueDate = document.getElementById('dueDate').value;
  
      if (taskName && dueDate) {
        addTask(taskName, dueDate);
        taskForm.reset();
      }
    });
  
    function addTask(taskName, dueDate) {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');
  
      const taskInfo = document.createElement('span');
      taskInfo.innerHTML = `<strong>${taskName}</strong> - Due Date: ${dueDate}`;
  
      const editButton = document.createElement('button');
      editButton.innerText = 'Edit';
      editButton.addEventListener('click', function () {
        editTask(taskDiv, taskName, dueDate);
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function () {
        taskDiv.remove();
      });
  
      taskDiv.appendChild(taskInfo);
      taskDiv.appendChild(editButton);
      taskDiv.appendChild(deleteButton);
  
      taskList.appendChild(taskDiv);
    }
  
    function editTask(taskDiv, taskName, dueDate) {
      const newTaskName = prompt('Edit Task Name:', taskName);
      const newDueDate = prompt('Edit Due Date:', dueDate);
  
      if (newTaskName !== null && newDueDate !== null) {
        taskDiv.querySelector('strong').innerText = newTaskName;
        taskDiv.querySelector('span').innerText = `Due Date: ${newDueDate}`;
      }
    }
  });
  