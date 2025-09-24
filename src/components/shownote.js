import { globalState } from "..";

export function AddNote(newNote){
  globalState.tasks.push(newNote)
  console.log(globalState)
  NoteSort()
}

// Bubble Sort 
function NoteSort(){
  if (globalState.tasks.length > 1){
    let index = 0 
    while (index < globalState.tasks.length - 1){
      if (globalState.tasks[index].priority > globalState.tasks[index + 1].priority){
        const temp = globalState.tasks[index + 1]
        globalState.tasks[index + 1] = globalState.tasks[index]
        globalState.tasks[index] = temp 
      }
      index += 1
    } 
  }
  ShowNote()
} 

function ShowNote(){

  // Delete form
  const formDelete = document.querySelectorAll("#note-form")
  formDelete.forEach(element => {
    element.remove()
  });

  // Delete previous notes
  const noteDelete = document.querySelectorAll(".note")
  noteDelete.forEach(element => {
    element.remove()
  })

  globalState.tasks.forEach(element => {
    // Whole note
    const gridContainer = document.getElementById("grid-container")
    const note = document.createElement("div")
    note.classList.add("note")
    gridContainer.appendChild(note)

    // Title 
    const noteTitle = document.createElement("h1")
    noteTitle.textContent = element.title
    note.appendChild(noteTitle)

    // Description
    const noteDesc = document.createElement("p")
    noteDesc.textContent = element.desc
    note.appendChild(noteDesc)

    // Due Date
    const noteDueDate = document.createElement("p")
    noteDueDate.textContent = element.dueDate
    note.appendChild(noteDueDate)

    // Priority
    const notePriority = document.createElement("p")
    if (element.priority === "1"){
      notePriority.textContent = "High Priority"
    } else if (element.priority === "2"){ 
      notePriority.textContent = "Medium Priority"
    } else if (element.priority === "3"){
      notePriority.textContent = "Low Priority"
    }
    note.appendChild(notePriority)
  })
}


