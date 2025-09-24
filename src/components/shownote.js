import { globalState } from "..";


export function AddNote(newNote){
  globalState.sections[globalState.activeSection].push(newNote)
  NoteSort()
}


// Bubble Sort 
function NoteSort(){
  const x = globalState.activeSection
  if (globalState.sections[x].length > 1){
    let index = 0 
    while (index < globalState.sections[x].length - 1){
      if (globalState.sections[x][index].priority > globalState.sections[x][index + 1].priority){
        const temp = globalState.sections[x][index + 1]
        globalState.sections[x][index + 1] = globalState.sections[x][index]
        globalState.sections[x][index] = temp 
      }
      index += 1
    } 
  }
  ShowNote()
} 


export function ShowNote(){

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

  globalState.sections[globalState.activeSection].forEach(element => {
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


