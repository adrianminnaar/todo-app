const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")      

  
createItem(item)

 
 
})

document.querySelector("#item",).addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const item = document.querySelector("#item")   

    createItem(item) 
  
 
   

  
  }
})

function displayDate(){
  let date = new Date()
  date = date.toString().split(" ")
  date = date[1] + " " + date[2] + " " + date[3] 
  document.querySelector("#date").innerHTML = date 
}

function displayItems(){
  let items = ""
  for(let i = 0; i < itemsArray.length; i++){
    items += `<div class="item">
                <div class="input-controller">
   <input onclick= "updateStatus(this)" type = checkbox id= "checkbox"><br><br>
   <input type="datetime-local"  id="taskdate">
   <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                  <i class="fa-sharp fa-solid fa-trash"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                                       

                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>                  
                  
                  
                  
                </div>
              </div>`
  }
  document.querySelector(".to-do-list").innerHTML = items
  activateDeleteListeners()
  activateEditListeners()
  activateSaveListeners()
  activateCancelListeners()
  activateDatelisteners()
  
 
}


function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".fa-trash")
  deleteBtn.forEach((deleteBtn, i) => {
    deleteBtn.addEventListener("click", () => { deleteItem(i) })
  })
}

function activateEditListeners(){
  const editBtn = document.querySelectorAll(".editBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  editBtn.forEach((editBtn, i) => {
    editBtn.addEventListener("click", () => { 
      updateController[i].style.display = "block"
      inputs[i].disabled = false })
  })
}

function activateSaveListeners(){
  const saveBtn = document.querySelectorAll(".saveBtn")
  const inputs = document.querySelectorAll(".input-controller textarea")
  
  saveBtn.forEach((saveBtn, i) => {
    saveBtn.addEventListener("click", () => {
      updateItem(inputs[i].value, i,)
    })
  })
}

function activateCancelListeners(){
  const cancelBtn = document.querySelectorAll(".cancelBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  cancelBtn.forEach((cancelBtn, i) => {
    cancelBtn.addEventListener("click", () => {
      updateController[i].style.display = "none"
      inputs[i].disabled = true
      inputs[i].style.border = "none"
    })
  })
}

function activateDatelisteners(){
    const date = document.querySelectorAll(".taskdate")
    
    
}


function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

function updateItem(text, i){
  itemsArray[i] = text
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

window.onload = function() {
  displayDate()
  displayItems()
};
