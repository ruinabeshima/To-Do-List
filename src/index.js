import './styles.css'

function AddNoteSection(){
  //
}

function AddNoteSectionForm(addButton){
  // Delete pre-existing forms 
  const formDelete = document.querySelectorAll("#section-input")
  formDelete.forEach(element => {
    element.remove()
  });

  // Creates a form to make a new note section  
  const navBar = document.getElementById("navbar")
  const navForm = document.createElement("form")
  navBar.insertBefore(navForm, addButton)
  
  const formInput = document.createElement("input")
  formInput.type = "text"
  formInput.id = "section-input"
  formInput.required = true
  navForm.appendChild(formInput)

  const submitForm = document.createElement("button")
  submitForm.id = "submit-section"
  navForm.appendChild(submitForm)

  const tickMark = document.createElement("p")
  tickMark.textContent = "✓"
  submitForm.appendChild(tickMark)

  // Event listener for submitting form 
  tickMark.addEventListener("click", () => AddNoteSection())
}

function DOMElements(){
  const addButton = document.getElementById("add-button")
  addButton.addEventListener("click", () => AddNoteSectionForm(addButton))
}

DOMElements()