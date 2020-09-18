const formElement = document.querySelector("#form");
const todoListElement = document.querySelector(".todolist");
const textInput = document.querySelector("#textInput");
const hiddenInput = document.querySelector(".hiddenInput");

let count = 1;
hiddenInput.value = "";
formElement.addEventListener("submit", addTodoItem);
todoListElement.addEventListener("click", checkAction);

// funtions

// add / update todoItem
function addTodoItem(event) {
  event.preventDefault();
  if (hiddenInput.value == "") createTodoItem(textInput.value);
  else updateTodoItem(textInput.value);
  form.reset();
}

function checkAction(event) {
  if (event.target.classList.contains("text")) markComplete(event);
  else if (event.target.classList.contains("btn-edit")) updateForm(event);
  else if (event.target.classList.contains("btn-del")) delTodoItem(event);
}

// create a new todoitem
function createTodoItem(textInput) {
  const todoItem = `
 <div class="todo-item" id=${count}>
   <p class="text">${textInput}</p>
   <button class="fa fa-pencil-square-o btn-edit">
   </button>
   <button class="fa fa-trash-o btn-del">
   </button>
 </div>
 `;
  count++;
  todoListElement.insertAdjacentHTML("afterbegin", todoItem);
}

// strike off the todo item
function markComplete(event) {
  event.target.classList.toggle("complete");
}

// populate the form
function updateForm(event) {
  const text = event.target.parentElement.querySelector(".text").textContent;
  hiddenInput.value = event.target.parentElement.id;
  textInput.value = text;
}

// update the todo item
function updateTodoItem(textInput) {
  const childrenArray = [...todoListElement.children];
  const item = childrenArray.filter((item) => item.id === hiddenInput.value)[0];
  item.firstElementChild.textContent = textInput;
  hiddenInput.value = "";
}

// delete todo item
function delTodoItem(event) {
  todoListElement.removeChild(event.target.parentElement);
}
