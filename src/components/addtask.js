export function TaskForm(calendar){
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
  taskTitle.required = true

  const taskDesc = document.createElement("input")
  taskDesc.type = "input"
  taskDesc.id = "task-desc-input"
  taskDesc.placeholder = "Description"

  const taskDue = document.createElement("input")
  taskDue.value = ""

  const calendarIMG = document.createElement("img")
  calendarIMG.src = calendar
  calendarIMG.id = "calendar-button"

  // DOM manipulation
  const inputs = [taskTitle, taskDesc, taskDue, calendarIMG]
  inputs.forEach(element => {
    taskForm.appendChild(element)
  })
}

export function ShowCalendar(){
  console.log("Hleo")
}