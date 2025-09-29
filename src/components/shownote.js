import { globalState } from "..";
import { format } from 'date-fns';

export function AddNote(newNote) {
  globalState.sections[globalState.activeSection].push(newNote);
  NoteSort();
}

// Bubble Sort
function NoteSort() {
  const x = globalState.activeSection;
  if (globalState.sections[x].length > 1) {
    let index = 0;
    while (index < globalState.sections[x].length - 1) {
      if (
        globalState.sections[x][index].priority >
        globalState.sections[x][index + 1].priority
      ) {
        const temp = globalState.sections[x][index + 1];
        globalState.sections[x][index + 1] = globalState.sections[x][index];
        globalState.sections[x][index] = temp;
      }
      index += 1;
    }
  }
  ShowNote();
}

export function ShowNote() {
  // Delete form
  const formDelete = document.querySelectorAll("#note-form");
  formDelete.forEach((element) => {
    element.remove();
  });

  // Delete previous notes
  const noteDelete = document.querySelectorAll(".note");
  noteDelete.forEach((element) => {
    element.remove();
  });

  globalState.sections[globalState.activeSection].forEach((element) => {
    // Whole note
    const gridContainer = document.getElementById("grid-container");
    const note = document.createElement("div");
    note.classList.add("note");
    gridContainer.appendChild(note);

    // Title
    const noteTitle = document.createElement("p");
    noteTitle.textContent = element.title;
    noteTitle.classList.add("note-show-title")
    note.appendChild(noteTitle);
    
    if (element.done) {
      noteTitle.style.color = "grey";
      noteTitle.style.textDecoration = "line-through";
      note.style.boxShadow = "none"
    }

    noteTitle.addEventListener("click", () => {
      element.done = !element.done; 
      if (element.done) {
        noteTitle.style.color = "grey";
        noteTitle.style.textDecoration = "line-through";
        note.style.boxShadow = "none"
      } else {
        noteTitle.style.color = "black";
        noteTitle.style.textDecoration = "none";
        note.style.boxShadow = "4px 6px 7px -1px rgba(0,0,0,0.33)"
      }
    });

    // Container
    const noteButtonContainer = document.createElement("div")
    noteButtonContainer.classList.add("note-button-container")
    note.appendChild(noteButtonContainer)

    // Description and Due Date
    const noteDesc = document.createElement("button");
    noteDesc.textContent = "i"
    noteDesc.classList.add("note-desc-button")
    noteButtonContainer.appendChild(noteDesc);


    noteDesc.addEventListener("click", () => {
      ShowNoteInfo(element)
    })

    // Priority
    const notePriority = document.createElement("button");
    if (element.priority === "1") {
      notePriority.style.backgroundColor = "green"
    } else if (element.priority === "2") {
      notePriority.style.backgroundColor = "orange"
    } else if (element.priority === "3") {
      notePriority.style.backgroundColor = "red"
    }
    notePriority.classList.add("note-priority-button")
    noteButtonContainer.appendChild(notePriority);

  });

}

function ShowNoteInfo(element){
  const formDelete = document.querySelectorAll(".info-dialog");
  formDelete.forEach((element) => {
    element.remove();
  });

  const main = document.getElementById("main")
  const infoDialog = document.createElement("dialog")
  infoDialog.classList.add("info-dialog")
  main.appendChild(infoDialog)

  const textDiv = document.createElement("div")
  textDiv.classList.add("dialog-desc-div")
  infoDialog.appendChild(textDiv)

  const dialogDesc = document.createElement("p")
  if (element.desc === ""){
    dialogDesc.textContent = "No description added"
  } else {
    dialogDesc.textContent = element.desc
  }
  textDiv.appendChild(dialogDesc)

  const dialogDate = document.createElement("p")
  if (element.dueDate === ""){
    dialogDate.textContent = "No date added"
  } else {
    dialogDate.textContent = format(element.dueDate, 'yyyy-MM-dd')
  }
  textDiv.appendChild(dialogDate)

  const closeButton = document.createElement("button");
  closeButton.id = "close-note";
  closeButton.textContent = "Close";
  textDiv.appendChild(closeButton)

  closeButton.addEventListener("click", () => {
    infoDialog.close()
    infoDialog.remove()
  })

  infoDialog.showModal()
}
