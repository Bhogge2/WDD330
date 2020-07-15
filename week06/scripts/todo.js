import ToDoItem from "./listItem.js";

export default class ToDO {
    constructor() {
        if(localStorage.getItem("toDoList") === null) {
            this.list = [];
        } else {
            this.list = JSON.parse(localStorage.getItem("toDoList"));
        }
    }

    displayList(elementId) {
        clearElement(elementId);
        if(this.list.length < 1) {
            document.getElementById(elementId).appendChild(buildEmptyItem());
        } else {
            this.list.forEach(element => {
                document.getElementById(elementId).appendChild(buildToDoItem(element));
            });
        }
    }

    filterList(elementId, filter){
        clearElement(elementId);
        if(this.list.length < 1){
            document.getElementById(elementId).appendChild(buildEmptyItem());
        } else {
            this.list.forEach(item => {
                if(item.completed === filter){
                    document.getElementById(elementId).appendChild(buildToDoItem(item));
                }
            });
        }
    }

    addToDo(listItem) {
        this.list.push(new ToDoItem(listItem));
        updateLocalStorage(this.list);
    }

    clearList() {
        this.list = [];
        updateLocalStorage(this.list);
    }

    indexOf(timestamp){
        for (let i = 0; i < this.list.length; i++){
            if(this.list[i].timestamp == timestamp){
                return i;
            }
        }

        return -1;
    }

    delete(timestamp){
        if(this.indexOf(timestamp) != -1){
            this.list.splice(this.indexOf(timestamp), 1);
            updateLocalStorage(this.list);
            return true;
        } else {
            return false;
        }
    }

    deleteAll(){
        this.list = [];
        updateLocalStorage(this.list);
    }

    getNameByTimestamp(timestamp){
        return this.list[this.indexOf(timestamp)].Name;
    }

    toggle(timestamp){
        if(this.indexOf(timestamp) != -1){
            this.list[this.indexOf(timestamp)].completed = !this.list[this.indexOf(timestamp)].completed;
            updateLocalStorage(this.list);
            return true;
        } else {
            return false;
        }
    }
}

function clearElement(elementId){
    document.getElementById(elementId).innerHTML = "";
}

function buildToDoItem(item){
    let output = document.createElement("li");

    let checked = "";
    let completed = "";
    if(item.completed === true){
        checked = "checked";
        completed = "completed";
    }

    //Add the timestamp id
    output.id = item.timestamp;

    output.innerHTML = `<div class="statusItem ${completed}">
        <input type="checkbox" id="td-${item.timestamp}" value="${item.completed}" ${checked}>
        <label for="td-${item.timestamp}" >${item.name}</label>
    </div>
    <div>
        <p class="deleteItem">Delete</p>
    </div>`;
    
    //console.log(output);
    return output;
}

function updateLocalStorage(list) {
    localStorage.setItem("toDoList", JSON.stringify(list));
}

function buildEmptyItem(){
    let output = document.createElement("li");
    output.innerHTML = "Nothing on your list.";
    return output;
}
