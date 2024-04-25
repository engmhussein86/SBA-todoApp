
    // Cache elements
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');
    const taskList = document.getElementById('taskList');
  
// Function to create a new task item using DocumentFragment
function createTaskItemFragment(taskContent) {
    // Create a DocumentFragment
    const fragment = document.createDocumentFragment();
      const li = document.createElement('li');
      li.classList.add('task-item');
      li.textContent = taskContent;
  
      // Create delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete';
  
      // Event listener to delete task
      deleteBtn.addEventListener('click', function() {
        if(confirm("Are you sure you want to delete this task?")){
            const listItem = this.parentNode; // Get the parent li element
            listItem.remove(); // Remove the parent li element
        }
      });
  
      li.appendChild(deleteBtn);
      // Append task item to fragment
    fragment.appendChild(li);

    return fragment;

    }
  
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
      const taskContent = taskInput.value.trim();
      if (taskContent !== '') {
        const taskFragment = createTaskItemFragment(taskContent);
      taskList.appendChild(taskFragment); // Append task item fragment to task list
      
        taskInput.value = ''; // Clear input field
        taskInput.focus();
      } else {
        alert('Please enter a task.');
      }
    });

      // Event listener for clearing completed tasks
  clearCompletedBtn.addEventListener('click', function() {
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach(taskItem => {
      if (taskItem.classList.contains('completed')) {
        taskItem.remove(); // Remove the completed task item
      }
    });
  });
  
    // Event listener for marking task as completed
    taskList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
      }
    });
  