import { globalState } from "..";
import { format } from 'date-fns';

export function AddNote(newNote) {
  globalState.sections[globalState.activeSection].push(newNote);
  NoteSort();
  // Save to localStorage after adding note
  if (window.saveToLocalStorage) {
    window.saveToLocalStorage();
  }
}

// Bubble Sort
function NoteSort() {
  const x = globalState.activeSection;
  let notes = globalState.sections[x];

  if (notes.length > 1) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < notes.length - 1; i++) {
        if (notes[i].priority > notes[i + 1].priority) {
          const temp = notes[i];
          notes[i] = notes[i + 1];
          notes[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
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
      // Save to localStorage after toggling done status
      if (window.saveToLocalStorage) {
        window.saveToLocalStorage();
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
