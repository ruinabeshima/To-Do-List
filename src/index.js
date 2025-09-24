import './styles.css'
import { AddNoteSectionForm } from './components/notesection'
import calendar from "./assets/calendar.svg"
import { TaskForm, ShowCalendar } from './components/addtask'

(function DOMElements(){
  const addButton = document.getElementById("add-button")
  addButton.addEventListener("click", () => AddNoteSectionForm(addButton))

  const addTask = document.getElementById("add-task")
  addTask.addEventListener("click", () => TaskForm(calendar))

  const calendarButton = document.getElementById("calendar-button")
  calendarButton.addEventListener("click", () => ShowCalendar())
})()

