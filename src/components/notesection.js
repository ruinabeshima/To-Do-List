import { globalState } from "..";
import { ShowNote } from "./shownote";

export function ShowMainContent() {
  // Adding grid container
  const mainContent = document.getElementById("main");
  const gridContainer = document.createElement("div");
  const buttonContainer = document.getElementById("button-container");
  gridContainer.id = "grid-container";
  mainContent.insertBefore(gridContainer, buttonContainer);

  // Setting active section
  globalState.activeSection = "main";
  ShowNote(globalState.activeSection);
}

function ShowOtherContent(sectionName) {
  // Deletes previous grid
  const gridContainerRemove = document.querySelector("#grid-container");
  gridContainerRemove.remove();

  // New grid container
  const mainContent = document.getElementById("main");
  const gridContainer = document.createElement("div");
  const buttonContainer = document.getElementById("button-container");
  gridContainer.id = "grid-container";
  mainContent.insertBefore(gridContainer, buttonContainer);

  globalState.activeSection = sectionName;
  ShowNote(globalState.activeSection);
}

export function MainContentListener() {
  const mainButton = document.getElementById("main-button");
  mainButton.addEventListener("click", () => {
    ShowOtherContent("main");
  });
}

export function AddSectionListener() {
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", () => {
    NoteSectionForm(addButton);
  });
}

function NoteSectionForm(addButton) {
  // Delete pre-existing forms
  const formDelete = document.querySelectorAll("#section-input");
  formDelete.forEach((element) => {
    element.remove();
  });

  // Creates a form to make a new note section
  const navBar = document.getElementById("navbar");
  const navForm = document.createElement("form");
  navForm.id = "new-section-form";
  navBar.insertBefore(navForm, addButton);

  const formInput = document.createElement("input");
  formInput.type = "text";
  formInput.id = "section-input";
  formInput.required = true;
  navForm.appendChild(formInput);

  // Event listener for submitting form
  navForm.addEventListener("submit", () =>
    AddNoteSection(addButton, navBar, formInput.value),
  );
}

function AddNoteSection(addButton, navBar, inputValue) {
  // Delete form
  const formDelete = document.querySelectorAll("#new-section-form");
  formDelete.forEach((element) => {
    element.remove();
  });

  // Create new section button
  const newButton = document.createElement("button");
  newButton.textContent = inputValue;
  newButton.id = inputValue.toLowerCase() + "-button";
  newButton.classList.add("nav-button");
  navBar.insertBefore(newButton, addButton);

  // Create new sections object with array
  globalState.sections[inputValue.toLowerCase()] = [];

  // Event listener
  newButton.addEventListener("click", () => {
    ShowOtherContent(inputValue.toLowerCase());
  });
}
