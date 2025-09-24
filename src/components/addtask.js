export function TaskForm(){
  const gridContainer = document.getElementById("grid-container")

  // Delete existing forms 
  const formDelete = document.querySelectorAll(".task-form")
  formDelete.forEach(element => {
    element.remove()
  });

  // Create a form 
  const taskForm = document.createElement("form")
  taskForm.classList.add("task-form")
  gridContainer.appendChild(taskForm)

  // Form inputs
  const taskTitle = document.createElement("input")
  taskTitle.type = "input"
  taskTitle.id = "task-title-input"
  taskTitle.placeholder = "Title"
  const taskDesc = document.createElement("input")
  taskDesc.type = "input"
  taskDesc.id = "task-desc-input"
  taskDesc.placeholder = "Description"
  const taskDue = document.createElement("input")
  taskDue.type = "datetime-local"
  taskDue.id = "task-due-input"
  const taskPriority = document.createElement("input")
  taskPriority.setAttribute("list", "priorities") 
  taskPriority.id = "task-priority-input"

  // DOM manipulation
  const inputs = [taskTitle, taskDesc, taskDue, taskPriority]
  inputs.forEach(element => {
    taskForm.appendChild(element)
  })
}