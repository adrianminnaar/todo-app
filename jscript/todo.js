// todo list will be stored in local storage//
//created array to store todo list//
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//creating todo items//
document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})
//creating todo items using enter key//
//if enter key is pressed, create item//
document.querySelector("#item").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const item = document.querySelector("#item")
    createItem(item)
  }
})
//Displayed date//
function displayDate(){
  let date = new Date()
  date = date.toString().split(" ")
  date = date[1] + " " + date[2] + " " + date[3] 
  document.querySelector("#date").innerHTML = date 
}
//Display todo list using tempr 
function displayItems(){
  let items = ""
  for(let i = 0; i < itemsArray.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                    <i class="fa-sharp fa-solid fa-trash"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                    <i class="fa-solid fa-square-check"></i>
                    <i class="fa-solid fa-calendar"></i>
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  }
  document.querySelector(".to-do-list").innerHTML = items
  DeleteListeners()
  EditListeners()
  SaveListeners()
  CancelListeners()
  CheckboxListeners()
  DateListeners()
  SortListeners()
}
//Delete function//
function DeleteListeners(){
  let deleteBtn = document.querySelectorAll(".fa-trash")
  deleteBtn.forEach((deleteBtn, i) => {
    deleteBtn.addEventListener("click", () => { deleteItem(i) })
  })
}
//Edit function//
function EditListeners(){
  const editBtn = document.querySelectorAll(".editBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  editBtn.forEach((editBtn, i) => {
    editBtn.addEventListener("click", () => { 
      updateController[i].style.display = "block"
      inputs[i].disabled = false })
  })
}
//Save function//
function SaveListeners(){
  const saveBtn = document.querySelectorAll(".saveBtn")
  const inputs = document.querySelectorAll(".input-controller textarea")
  saveBtn.forEach((saveBtn, i) => {
    saveBtn.addEventListener("click", () => {
      updateItem(inputs[i].value, i)
    })
  })
}
//Cancel function//
function CancelListeners(){
  const cancelBtn = document.querySelectorAll(".cancelBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  cancelBtn.forEach((cancelBt, i) => {
    cancelBt.addEventListener("click", () => {
      updateController[i].style.display = "none"
      inputs[i].disabled = true
      inputs[i].style.border = "none"
    })
  })
}
//checkbox function//
//line through for completetion//
function CheckboxListeners(){
    const checkbox = document.querySelectorAll(".fa-square-check")
    const inputs = document.querySelectorAll(".input-controller textarea")
    

    checkbox.forEach((checkbox, i) => {
      checkbox.addEventListener("click", () => {         
                   
          if(checkbox.value === "checked"){
            checkbox.value = "unchecked"
            checkbox.style.color = "green"
            inputs[i].style.textDecoration = "line-through"
            inputs[i].style.color = "none"
            this.value="unchecked"
                    
            
          }
          else{
            checkbox.value = "checked"
            checkbox.style.color = "green"
            inputs[i].style.textDecoration = "none" 
            this.value="checked" 
           
          }
          console.log(checkbox.value)
        })
    })
        
    }
//add due date to todo list//
function DateListeners(){
    const date = document.querySelectorAll(".fa-calendar")
    const inputs = document.querySelectorAll(".input-controller textarea")
    date.forEach((date, i) => {
      date.addEventListener("click", () => { 
            let date = prompt("Enter a due date")
            if(date ==""){
                date = alert("no date entered")
                date = " "
            }

            document.querySelector(".input-controller textarea"),inputs[i].innerHTML += "  "+ date

            

        })
    })}
    //Sort do list alphabetically//
    function SortListeners(){
      const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        const sortAl = document.querySelectorAll("#sort")
        
        sortAl.forEach((sortAl, i) => {
            sortAl.addEventListener("click", () => { 
              itemsArray.sort()
              localStorage.setItem('items', JSON.stringify(itemsArray))
              location.reload()
                
                console.log(itemsArray)

            })
        })
    }

//Create, delete, update functions//
//created item and saved to local storage//
function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}
//deleted item from local storage//
function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}
//updated item that were updated, in local storage//
function updateItem(text, i){
  itemsArray[i] = text
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}
//display date and todo list//
//create Methods to display date and todo list//
window.onload = function() {
  displayDate()
  displayItems()
};