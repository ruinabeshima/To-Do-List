import "./styles.css";
import { AddTaskListener } from "./components/createnote";
import {
  ShowMainContent,
  AddSectionListener,
  MainContentListener,
  HighlightSection
} from "./components/notesection";

export const globalState = {
  sections: {
    main: [],
  },
  activeSection: null,
};

// localStorage utility functions
function saveToLocalStorage() {
  try {
    localStorage.setItem('todoAppData', JSON.stringify(globalState));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

function loadFromLocalStorage() {
  try {
    const savedData = localStorage.getItem('todoAppData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      globalState.sections = parsedData.sections || { main: [] };
      globalState.activeSection = parsedData.activeSection || 'main';
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    // Reset to default state if loading fails
    globalState.sections = { main: [] };
    globalState.activeSection = 'main';
  }
}

// Make saveToLocalStorage available globally
window.saveToLocalStorage = saveToLocalStorage;

document.addEventListener("DOMContentLoaded", () => {
  // Load saved data first
  loadFromLocalStorage();
  
  ShowMainContent();
  HighlightSection()
  MainContentListener();
  AddTaskListener();
  AddSectionListener();
});
