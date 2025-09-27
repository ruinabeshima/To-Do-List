import { globalState } from "..";

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
    note.appendChild(noteTitle);

    // Container
    const noteButtonContainer = document.createElement("div")
    noteButtonContainer.classList.add("note-button-container")
    note.appendChild(noteButtonContainer)

    // Description and Due Date
    const noteDesc = document.createElement("button");
    noteDesc.textContent = "i"
    noteDesc.classList.add("note-desc-button")
    noteButtonContainer.appendChild(noteDesc);

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
