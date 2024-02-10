// // get the add button

// let variable = document.getElementById("add-button");

// // attach a click listener addTodo
// variable.addEventListener('click', addTodo);

// // Define addTodo
// function addTodo(){
//     // get the input tag
//     let inputTag=document.getElementById("todo-input");



// // get the data from the input tag

// const data=inputTag.value;


// if(data == "") return;
// // create a new list element
// const todoItem = document.createElement("li");

// // set the content to the data received from the input
// todoItem.textContent=data;
// // get the ul object reference
// let todoList =document.getElementById("todo-list");

// // append the li item to the ul object
// todoList.appendChild(todoItem);
// }


// Define addTodo
function addTodo(){
    // get the input tag
    let inputTag=document.getElementById("todo-input");

    // get the data from the input tag
    const data=inputTag.value;

    if(data === "") return; // Check if input is empty

    // create a new list element
    const todoItem = document.createElement("li");

    // set the content to the data received from the input
    todoItem.textContent = data;

    // create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌"; // You can use any symbol for delete button

    // add click event listener to delete button
    deleteButton.addEventListener('click', function() {
        todoItem.remove(); // Remove the todo item when delete button is clicked
    });

    // append delete button to todo item
    todoItem.appendChild(deleteButton);

    // get the ul object reference
    let todoList = document.getElementById("todo-list");

    // append the li item to the ul object
    todoList.appendChild(todoItem);

    // clear the input field
    inputTag.value = "";
}

// get the add button
let variable = document.getElementById("add-button");

// attach a click listener addTodo
variable.addEventListener('click', addTodo);
