todoMain();

function todoMain(){
  let inputElem,
       ulElem,
       button,
       todolist = [];
       

  getElements();
  addEventListener();
  load();
  render();
  


  function getElements(){
    inputElem = document.getElementsByTagName("input")[0];
    ulElem = document.getElementsByTagName("ul")[0];
    button = document.getElementById("add");
    console.log(inputElem)
  }

  function addEventListener(){
    button.addEventListener("click",onChange,false);
  }
  
  function onChange(event){
   // let lineT = true
    let inputValue = inputElem.value;

    inputElem.value = " ";

    let liElem = document.createElement("li");
    let checkBox = document.createElement("input");

    checkBox.type = "checkbox";
    liElem.appendChild(checkBox)

    let textElem = document.createElement("span");
    textElem.innerText = inputValue;
    liElem.appendChild(textElem);

    //liElem.innerText = inputValue;
    //liElem.addEventListener("click",onclick,false);

   
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";

    let spanElem1 = document.createElement("span");
        spanElem1.innerText = "edit";
        spanElem1.className = "material-icons";
    
    let spanElem2 = document.createElement("span");
        spanElem2.innerText ="save";
        spanElem2.className = "material-icons";

    spanElem.addEventListener("click",deleteItem,false);
    spanElem1.addEventListener("click",editItem,false);
    spanElem2.addEventListener("click",saveItem,false);

 
    liElem.appendChild(spanElem1);    
    ulElem.appendChild(liElem)
    liElem.appendChild(spanElem);    
    ulElem.appendChild(liElem)
    liElem.appendChild(spanElem2);    
    ulElem.appendChild(liElem)

    todolist.push(inputValue);
    save();
    

    function deleteItem(){
      this.parentNode.remove()
    }
    

    function editItem(){
      this.parentNode.contentEditable = true;
      spanElem1.contentEditable = false;
      spanElem1 = spanElem1;
      
      
    }

    function saveItem(){
      this.parentNode.contentEditable = true;
      
    }

    //function onclick(){
   //   if (lineT) {
    //    this.classlist.add("box");
    //    lineT = !lineT;
   //   } else {
    //    this.classlist.remove("box");
   //     lineT=!lineT
    //  }
      
      
   // }
  
    }
    function save(){
      let string = localStorage.setItem("todolist", todolist);
      localStorage.setItem("todolist",string);
      
    }
   function load(){
    localStorage.getItem("todolist");
    if(todolist== null)
    todolist = [];
    }
   function render(){
    todolist.forEach(todo=>{
      render(todo,null);
    })
   }
}



