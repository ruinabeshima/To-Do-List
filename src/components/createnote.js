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
  const notePriority = document.createElement("input")
  notePriority.type = "text"
  notePriority.id = "note-priority"

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
  ShowNote(newNote)
}

function ShowNote(newNote){
  // Delete form
  const formDelete = document.querySelectorAll("#note-form")
  formDelete.forEach(element => {
    element.remove()
  });

  // Whole note
  const gridContainer = document.getElementById("grid-container")
  const note = document.createElement("div")
  note.class = "note"
  gridContainer.appendChild(note)

  // Title 
  const noteTitle = document.createElement("h1")
  noteTitle.textContent = newNote.title
  note.appendChild(noteTitle)

  // Description
  const noteDesc = document.createElement("p")
  noteDesc.textContent = newNote.desc
  note.appendChild(noteDesc)

  // Due Date
  const noteDueDate = document.createElement("p")
  noteDueDate.textContent = newNote.dueDate
  note.appendChild(noteDueDate)

  // Priority
  const notePriority = document.createElement("p")
  notePriority.textContent = newNote.priority
  note.appendChild(notePriority)
}

