import { AddNote } from "./shownote"


export function AddTaskListener(){
  // Event listener for add button
  const addTask = document.getElementById("add-task")
  addTask.addEventListener("click", () => {
    CreateNoteForm()
  })
}

function CreateNoteForm(){  
  // Delete previous forms 
  const formDelete = document.querySelectorAll("#note-form")
  formDelete.forEach(element => {
    element.remove()
  });
   
  // Form 
  const gridContainer = document.getElementById("grid-container")
  const noteForm = document.createElement("form")
  noteForm.id = "note-form"
  gridContainer.appendChild(noteForm)

  // Title 
  const noteTitle = document.createElement("input")
  noteTitle.type = "text"
  noteTitle.id = "note-title"
  noteTitle.required = true

  // Description
  const noteDesc = document.createElement("input")
  noteDesc.type = "text"
  noteDesc.id = "note-desc"

  // Due Date
  const noteDueDate = document.createElement("input")
  noteDueDate.type = "datetime-local"
  noteDueDate.id = "note-duedate"

  // Priority
  const notePriority = document.createElement("select")
  notePriority.id = "note-priority"
  const option1 = document.createElement("option")
  option1.value = "1"
  option1.textContent = "High Priority"
  const option2 = document.createElement("option")
  option2.value = "2"
  option2.textContent = "Medium Priority"
  const option3 = document.createElement("option")
  option3.value = "3"
  option3.textContent = "Low Priority"

  const options = [option1, option2, option3]
  options.forEach(element => {
    notePriority.appendChild(element)
  });

  // Create Button 
  const createButton = document.createElement("button")
  createButton.id = "create-note"
  createButton.textContent = "Create"

  // Adding elements to form 
  const elements = [noteTitle, noteDesc, noteDueDate, notePriority, createButton]
  elements.forEach(element => {
    noteForm.append(element)
  });

  CreateTaskListener()
}

function CreateTaskListener(){
  // Event listener for create button
  const title = document.getElementById("note-title")
  const desc = document.getElementById("note-desc")
  const dueDate = document.getElementById("note-duedate")
  const priority = document.getElementById("note-priority")
  const createNote = document.getElementById("create-note")

  createNote.addEventListener("click", () => {
    event.preventDefault()
    CreateNote(title.value, desc.value, dueDate.value, priority.value)
  })
}

function CreateNote(title, desc, dueDate, priority){
  const newNote = function NoteObject(){
    const uniqueID = crypto.randomUUID()
    return {uniqueID, title, desc, dueDate, priority}
  }()
  AddNote(newNote)
}



