import "./styles.css"
import { AddTaskListener } from "./components/createnote"
import { ShowMainContent, AddSectionListener, MainContentListener } from "./components/notesection"

export const globalState = {
  sections: {
    "main": [], 
  }, 
  activeSection: null
}

document.addEventListener("DOMContentLoaded", () => {
  ShowMainContent()
  MainContentListener()
  AddTaskListener()
  AddSectionListener()
})


