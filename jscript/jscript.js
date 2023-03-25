todoMain();

function todoMain(){
  let inputElem,
       ulElem;

  getElements();
  addEventListener();

  function getElements(){
    inputElem = document.getElementsByTagName("input")[0];
    ulElem = document.getElementsByTagName("ul")[0];
    console.log(inputElem)
  }

  function addEventListener(){
    inputElem.addEventListener("change",onChange,false);
  }
  
  function onChange(event){
    let inputValue = inputElem.value;

    inputElem.value = " ";

    let liElem = document.createElement("li");
    liElem.innerText = inputValue;
   
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";

    let spanElem1 = document.createElement("span");
        spanElem1.innerText = "edit";
        spanElem1.className = "material-icons"

    spanElem.addEventListener("click",deleteItem,false);
    spanElem1.addEventListener("click",editItem,false);

    liElem.appendChild(spanElem1);    
    ulElem.appendChild(liElem)
    liElem.appendChild(spanElem);    
    ulElem.appendChild(liElem)

    function deleteItem(){
      this.parentNode.remove()
    }
    console.log("inputValue");

    function editItem(){
      this.liElem.
      
    }
  }
}



