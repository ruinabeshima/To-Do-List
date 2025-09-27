import { AddNote } from "./shownote";

export function AddTaskListener() {
  // Event listener for add button
  const addTask = document.getElementById("add-task");
  addTask.addEventListener("click", () => {
    CreateNoteForm();
  });
}

function CreateNoteForm() {
  // Delete previous forms
  const formDelete = document.querySelectorAll("#new-dialog");
  formDelete.forEach((element) => {
    element.remove();
  });

  // Dialog
  const main = document.getElementById("main");
  const newDialog = document.createElement("dialog")
  newDialog.id = "new-dialog"
  main.appendChild(newDialog)

  // Form
  const noteForm = document.createElement("form");
  noteForm.id = "note-form";
  newDialog.appendChild(noteForm);

  const newNote = document.createElement("p")
  newNote.textContent = "New Note"
  newNote.id = "create-note-title"

  // Title
  const noteTitle = document.createElement("input");
  noteTitle.type = "text";
  noteTitle.id = "note-title";
  noteTitle.placeholder = "Title";
  noteTitle.required = true;

  // Description
  const noteDesc = document.createElement("textarea");
  noteDesc.id = "note-desc";
  noteDesc.placeholder = "Description";

  // Due Date
  const noteDueDate = document.createElement("input");
  noteDueDate.type = "datetime-local";
  noteDueDate.id = "note-duedate";

  // Priority
  const notePriority = document.createElement("select");
  notePriority.id = "note-priority";
  const option1 = document.createElement("option");
  option1.value = "1";
  option1.textContent = "High Priority";
  const option2 = document.createElement("option");
  option2.value = "2";
  option2.textContent = "Medium Priority";
  const option3 = document.createElement("option");
  option3.value = "3";
  option3.textContent = "Low Priority";

  const options = [option1, option2, option3];
  options.forEach((element) => {
    notePriority.appendChild(element);
  });

  // Create Button
  const createButton = document.createElement("input");
  createButton.type = "submit"
  createButton.id = "create-note";
  createButton.value = "Create";

  // Adding elements to form
  const elements = [
    newNote,
    noteTitle,
    noteDesc,
    notePriority,
    noteDueDate,
    createButton,
  ];
  elements.forEach((element) => {
    noteForm.append(element);
  });

  newDialog.showModal()

  CreateTaskListener();
}

function CreateTaskListener() {
  // Event listener for create button
  const title = document.getElementById("note-title");
  const desc = document.getElementById("note-desc");
  const dueDate = document.getElementById("note-duedate");
  const priority = document.getElementById("note-priority");
  const noteForm = document.getElementById("note-form");
  const newDialog = document.getElementById("new-dialog")

  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newDialog.close()
    CreateNote(title.value, desc.value, dueDate.value, priority.value);
  });
}

function CreateNote(title, desc, dueDate, priority) {
  const newNote = (function NoteObject() {
    const uniqueID = crypto.randomUUID();
    const done = false
    return { uniqueID, title, desc, dueDate, priority, done };
  })();
  AddNote(newNote);
}
