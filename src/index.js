import "./styles.css"
import { AddTaskListener } from "./components/createnote"

export const globalState = {
  tasks: []
}

document.addEventListener("DOMContentLoaded", () => {
  AddTaskListener()
})


