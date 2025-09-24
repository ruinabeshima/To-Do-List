export function ShowNote(newNote){
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
  if (newNote.priority === "high"){
    notePriority.textContent = "High Priority"
  } else if (newNote.priority === "medium"){ 
    notePriority.textContent = "Medium Priority"
  } else if (newNote.priority === "low"){
    notePriority.textContent = "Low Priority"
  }
  
  note.appendChild(notePriority)
}

