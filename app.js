// //selector
// const todoInput = document.querySelector(".todo-input")
// const todoButton = document.querySelector(".todo-button")
// const todoList = document.querySelector(".todo-list")

// //Event listener

// todoButton.addEventListener("click", addTodo);

// //function
// function addTodo(event) {
// 	event.preventDefault();
	
// 	const todoDiv = document.createElement("div")
// 	todoDiv.classList.add("todo")
// 	//create li
// 	const newTodo = document.createElement("li")
// 	newTodo.innerHTML = 'hey'
// 	newTodo.classList.add("todo-item")
// 	todoDiv.appendChild(newTodo)
// 	//checkmark button
// 	const completeButton = document.createElement("button")
// 	completeButton.innerHTML ='<i class="fas fa-check"></i>'
// 	completeButton.classList.add("complete-btn")
// 	todoDiv.appendChild(completeButton)
// 	//trash todoButton
// 	const trashButton = document.createElement("button")
// 	trashButton.innerHTML ='<i class="fas fa-trash"></i>'
// 	trashButton.classList.add("trash-btn")
// 	todoDiv.appendChild(trashButton)

// 	todoList.appendChild(todoDiv)
// }
//selector
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// console.log(todoInput, todoButton, todoList)
//Event listener
todoButton.addEventListener("click", addTodo)
todoButton.ac

//function
function addTodo(event) { 
	event.preventDefault();
	//console.log("clicked by johnny")
	const todoDiv = document.createElement("div")
	todoDiv.classList.add('todo');
	//create li
	const newTodo = document.createElement("li")
	newTodo.innerText = "new todo"
	newTodo.classList.add("todo-item")
	todoDiv.appendChild(newTodo);
	//create button
	const completeButton = document.createElement("button")
	completeButton.innerHTML = '<i class= "fas fa-check" ></i>'
	completeButton.classList.add("complete-btn")
	todoDiv.appendChild(completeButton)
	const completeButton = document.createElement("button")
	completeButton.innerHTML = '<i class= "fas fa-check" ></i>'
	completeButton.classList.add("complete-btn")
	todoDiv.appendChild(completeButton)

	todoList.appendChild(todoDiv)
	
}