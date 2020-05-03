


/* TeamActivity */

function calculate(){
    var input = document.getElementById("usrInput").value;
    
    if(!checkNum(input)){
        return;
    }

    var output = addNumbers(input);

    document.getElementById("output").innerHTML = output;

}

function checkNum(number){
    if(!isNaN(number)){
        return true;
    } else {
        document.getElementById("output").innerHTML = "Make sure you type in a valid number!";
        //alert("Make sure you type in a valid number!");
        return false;
    }
}

function addNumbers(number){
    var sum = 0;
    for(i=1; i<=number; i++){
        sum += i;
    }

    return sum;
}

//This is our calculators controller
function calc2Nums(type){
    var num1 = document.getElementById("usrInput").value;
    var num2 = document.getElementById("usrInput2").value;

    if(!checkNum(num1) || !checkNum(num2)){
        return;
    }

    var output = 0;
    
    switch(type){
        case 'add':
            output = addition(num1, num2);
            break;
        case 'sub':
            output = subtract(num1, num2);
            break;
        case 'mult':
            output = multiply(num1, num2);
            break;
        case 'div':
            output = divide(num1, num2);
            break;
    }

    document.getElementById("output").innerHTML = output;

}

function addition(num1, num2){
    var sum = parseInt(num1) + parseInt(num2);
    return sum;
}
function subtract(num1, num2){
    var sum = parseInt(num1) - parseInt(num2);
    return sum;
}
function multiply(num1, num2){
    var sum = parseInt(num1) * parseInt(num2);
    return sum;
}
function divide(num1, num2){
    var sum = parseInt(num1) / parseInt(num2);
    return sum;
}