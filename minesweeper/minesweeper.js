document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener("click",checkForWin) 
document.addEventListener("contextmenu", checkForWin)

const randomBool = Math.random() > 0.5 ? true : false;
// Define your `board` object here!
var board = {
  cells: [
    {row: 1, col: 1, isMine: random(), hidden: true}, 
    {row: 1, col: 2, isMine: random(), hidden: true}, 
    {row: 1, col: 3, isMine: random(), hidden: true}, 
    {row: 2, col: 1, isMine: random(), hidden: true},
    {row: 2, col: 2, isMine: random(), hidden: true}, 
    {row: 2, col: 3, isMine: random(), hidden: true},
    {row: 3, col: 1, isMine: random(), hidden: true},
    {row: 3, col: 2, isMine: random(), hidden: true}, 
    {row: 3, col: 3, isMine: random(), hidden: true}
    
  ]}

  function random() {
    return trueorfalse = Math.random() < 0.3;
  }

 



function startGame () {
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) 
  }
 
 // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (let i = 0; i < board.cells.length; i++) {

    if (board.cells[i].isMine == true && board.cells[i].isMarked == true) {
    }
    else if (board.cells[i].isMine == false && board.cells[i].hidden == false) {
    }
    else {
      return;
    }
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('CONGRATS YOU DID IT!!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var count = 0 
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (var i=0; i < surrounding.length; i++) {
    const thisCell = surrounding[i]
    console.log(thisCell)
    if( thisCell.isMine ){
      count++
    }
  }
  return count
}