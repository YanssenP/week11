//created a series of players for the game. the element of the array being x and o. player x is the first to start the game, so player 0 is assigned to the current player variable.


const board = document.getElementById('board')
const squares = document.getElementsByClassName('square')
const players = ['X', 'O']
let currentPlayer = players[0]

//using the text content to print text to the variable
const endMessage = document.createElement('h1')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '50px'
endMessage.style.textAlign='center'
board.after(endMessage)

//array shows the winning combination
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//create a function verifywin to verify win status. when the status of the array os meant, the relevant player wins the game.
for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !== ''){
            return
        }
        squares[i].textContent = currentPlayer
        if(verifyWin(currentPlayer)) {
            endMessage.textContent=`It's the END! ${currentPlayer} wins!`
            return
        }

        //verifydraw function to verify draw status
        if(verifyDraw()) {
            endMessage.textContent= `It's a DRAW!!!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
        if(currentPlayer == players[0]) {
            endMessage.textContent= `X's Play!`
        } else {
            endMessage.textContent= `O's Play!`
        }     
    })   
}

function verifyWin(currentPlayer) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i]
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}

function verifyDraw(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true
}
//restart function is created to reset the actions when the game is restarted
function restartButton() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    endMessage.textContent=`X's turn!`
    currentPlayer = players[0]
}