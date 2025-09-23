import './styles.css'
import { AddNoteSectionForm } from './components/notesection'

function DOMElements(){
  const addButton = document.getElementById("add-button")
  addButton.addEventListener("click", () => AddNoteSectionForm(addButton))
}

DOMElements()