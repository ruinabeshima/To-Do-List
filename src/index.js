import './styles.css'
import { AddNoteSectionForm } from './components/notesection'
import { TaskForm } from './components/addtask'

(function DOMElements(){
  const addButton = document.getElementById("add-button")
  addButton.addEventListener("click", () => AddNoteSectionForm(addButton))

  const addTask = document.getElementById("add-task")
  addTask.addEventListener("click", () => TaskForm())
})()

