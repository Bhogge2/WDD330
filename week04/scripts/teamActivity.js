let squares = document.querySelectorAll(".tttSQ");
squares.forEach(element => {
    element.addEventListener("touchend", playerTurn);
});

let count = 0;

function playerTurn(event) {
    if (count % 2 == 0) {
        event.target.innerHTML = "X";
        document.getElementById("message").innerHTML = "Player 2's turn";
    } else {
        event.target.innerHTML = "O";
        document.getElementById("message").innerHTML = "Player 1's turn";
    }
    event.target.removeEventListener("touchend", playerTurn);
    count++;

    if (!checkWinner()) {

        //Check winner
        checkTie();
    }
}

function resetBoard() {
    squares.forEach(element => {
        element.innerHTML = "";
        element.addEventListener("touchend", playerTurn);
    })
    count = 0;
    document.getElementById("message").innerHTML = "Player 1's turn";
}

function checkTie() {
    if (count == 9) {
        document.getElementById("message").innerHTML = "You tied! Sucks to be you guys...";
    }
}

function checkWinner() {
    console.log(squares[0].innerHTML);
    if ((squares[0].innerHTML == "X" && squares[1].innerHTML == "X" && squares[2].innerHTML == "X")
    || (squares[0].innerHTML == "X" && squares[4].innerHTML == "X" && squares[8].innerHTML == "X")
    || (squares[0].innerHTML == "X" && squares[3].innerHTML == "X" && squares[6].innerHTML == "X")
    || (squares[1].innerHTML == "X" && squares[4].innerHTML == "X" && squares[7].innerHTML == "X")
    || (squares[3].innerHTML == "X" && squares[4].innerHTML == "X" && squares[5].innerHTML == "X")
    || (squares[2].innerHTML == "X" && squares[4].innerHTML == "X" && squares[6].innerHTML == "X")
    || (squares[2].innerHTML == "X" && squares[5].innerHTML == "X" && squares[8].innerHTML == "X")
    || (squares[6].innerHTML == "X" && squares[7].innerHTML == "X" && squares[8].innerHTML == "X")){
        document.getElementById("message").innerHTML = "Player 1 wins!";
        removeListener();
        return true;
    } else if ((squares[0].innerHTML == "O" && squares[1].innerHTML == "O" && squares[2].innerHTML == "O")
    || (squares[0].innerHTML == "O" && squares[4].innerHTML == "O" && squares[8].innerHTML == "O")
    || (squares[0].innerHTML == "O" && squares[3].innerHTML == "O" && squares[6].innerHTML == "O")
    || (squares[1].innerHTML == "O" && squares[4].innerHTML == "O" && squares[7].innerHTML == "O")
    || (squares[3].innerHTML == "O" && squares[4].innerHTML == "O" && squares[5].innerHTML == "O")
    || (squares[2].innerHTML == "O" && squares[4].innerHTML == "O" && squares[6].innerHTML == "O")
    || (squares[2].innerHTML == "O" && squares[5].innerHTML == "O" && squares[8].innerHTML == "O")
    || (squares[6].innerHTML == "O" && squares[7].innerHTML == "O" && squares[8].innerHTML == "O")) {
        document.getElementById("message").innerHTML = "Player 2 wins!";
        removeListener();
        return true;
    } else {
        return false;
    }
}

function removeListener() {
    squares.forEach(element => {
        element.removeEventListener("touchend", playerTurn);
    })
}