export default class ToDoItem {
    constructor(todo_name){
        this.timestamp = Date.now();
        this.name = todo_name;
        this.completed = false;
    }

    getTimestamp(){
        return this.timestamp;
    }

    getName(){
        return this.name;
    }

    getStatus(){
        return this.completed;
    }

    setName(new_name){
        this.name = new_name;
    }

    setStatus(complete){
        this.completed = complete;
    }

    toString(){
        let output = "Timestamp: " + this.timestamp + "Name: " + this.name + "Status: " + this.completed;
        return output;
    }

}