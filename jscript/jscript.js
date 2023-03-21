//create elements
const form = document.getElementById('todoform');
const todo = document.getElementById('newtodo');
const todoListEl = document.getElementById('todos-list');
//const notificationEl = document.querySelector('.notification');

let todos = JSON.parse(localStorage.getItem('todos'))|| [];
//let EditTodoId = -1
form.addEventListener('submit',function(event){
  event.preventDefault();

  console.log('submit')
})