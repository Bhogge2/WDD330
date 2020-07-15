'use strict';
import ToDo from "./todo.js";

let todo = new ToDo;
todo.displayList("toDoList", true);
addEventListenersToDo();

document.querySelector("#allItems").addEventListener("touchend", displayAll);
document.querySelector("#currentItems").addEventListener("touchend", displayActive);
document.querySelector("#completedItems").addEventListener("touchend", displayCompleted);
document.querySelector("#clearItems").addEventListener("touchend", clearItems);
document.querySelector("#addToDo").addEventListener("submit", addItem);

function addEventListenersToDo() {
    document.querySelectorAll(".statusItem").forEach(element => {
        element.addEventListener("touchend", toggleStatus);
    });
    
    document.querySelectorAll(".deleteItem").forEach(element => {
        element.addEventListener("touchend", deleteItem);
    });
}

function deleteItem(event){
    if(confirm(`Are you sure you want to delete this item?`)){
        todo.delete(event.path[2].id);
        resetPage();
    } else { }
}

function statusItem(event){
    if(todo.toggle(event.path[2].id)){
        event.path[1].classList.toggle("completed");
    }
}

function addItem(event){
    if(event.target[0].value !== null){
        todo.addToDo(event.target[0].value);
    }
}

function displayAll(){
    setActive("#allItems");
    resetPage();
}

function displayActive(){
    setActive("#currentItems");
    resetPage();
}

function displayCompleted(){
    setActive("#completedItems");
    resetPage();
}

function clearItems(){
    todo.deleteAll();
    resetPage();
}

function toggleStatus(event){
    if(todo.toggle(event.path[2].id)){
        event.path[1].classList.toggle("completed");
    }
    console.log("toggled");
}

function getActive(){

    if(document.querySelector("#allItems").className.includes("active")){
        return "#allItems";
    } else if (document.querySelector("#currentItems").className.includes("active")){
       return "#currentItems"; 
    } else if (document.querySelector("#completedItems").className.includes("active")){
        return "#completedItems"; 
    } else {
        return "#what";
    }
}

function setActive(change_to_active){
    try {
        let currently_active = getActive();
        console.log(change_to_active);

        document.querySelector(currently_active).classList.toggle("active");
        document.querySelector(change_to_active).classList.toggle("active");
    } catch (error) {
        console.log("There was an Error:" + error);
    }
    
}

function resetPage(){
    let currently_active = getActive();
    console.log(currently_active);

    document.getElementById("#allItems")

    switch(currently_active){
        case "#allItems":
            todo.displayList("toDoList");
            break;
        case "#currentItems":
            todo.filterList("toDoList", false);
            break;
        case "#completedItems":
            todo.filterList("toDoList", true);
            break;
    }
    addEventListenersToDo();
}
