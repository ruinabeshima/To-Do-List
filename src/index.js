import './styles.css'

function AddNoteSection(addButton, navBar, inputValue){
  // Delete form 
  const formDelete = document.querySelectorAll("#new-section-form")
  formDelete.forEach(element => {
    element.remove()
  });

  // Create new section 
  const newButton = document.createElement("button")
  newButton.textContent = inputValue
  newButton.id = inputValue.toLowerCase() + "-button"
  newButton.classList.add("nav-button")
  navBar.insertBefore(newButton, addButton)
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
  navForm.id = "new-section-form"
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
  submitForm.addEventListener("click", () => AddNoteSection(addButton, navBar, formInput.value))
}

function DOMElements(){
  const addButton = document.getElementById("add-button")
  addButton.addEventListener("click", () => AddNoteSectionForm(addButton))
}

DOMElements()