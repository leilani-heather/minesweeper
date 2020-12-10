document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells: [

// Cell one = row 0, col 0, has a mine, start as hidden

    {
      row: 0,
      col: 0,
      isMine: true,
      hidden: true,
      surroundingMines: 0,
    },

// Cell two = row 0, col 1, has no mine, start as hidden

    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true,
      surroundingMines: 0,
    },

// Cell three = row 0, col 2, has no mine, start as hidden

    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true,
      surroundingMines: 0,
    },

// Cell four = row 1, col 0, has no mine, start as hidden

    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true,
      surroundingMines: 0,
    },

// Cell five = row 1, col 1, has a mine, start as hidden

    {
      row: 1,
      col: 1,
      isMine: false,
      hidden: true,
      surroundingMines: 0,
    },

// Cell six = row 1, col 2, has no mine, start as hidden

    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true,
      surroundingMines: 0,
    },

// Cell seven = row 2, col 0, has no mine, start as hidden

    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true,
      surroundingMines: 0,
    },

// Cell eight = row 2, col 1, has a mine, start as hidden

    {
      row: 2,
      col: 1,
      isMine: true,
      hidden: true,
      surroundingMines: 0,
    },

// Cell nine = row 2, col 2, has a mine, start as hidden

    {
      row: 2,
      col: 2,
      isMine: true,
      hidden: true,
      surroundingMines: 0,
    },
  ],
};

/* 'startGame' begins at position 0, variable i is less than the total length of the array.
Loop over and increase by 1 each time until all 'cells' (objects) in the array are counted.
Access the properties in the array objects using dot and array notation to get the surrounding mines.
Point it to the new count of the surrounding mines. Add event listeners to create alerts for winner/loser.*/

function startGame () {
  
  // left click
  document.addEventListener('click', checkForWin);

  // right click
  document.addEventListener('contextmenu', checkForWin);

  // for loop
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
/* Make let statements for local variables, initializing value to 0 for all.
Have used oneCount etc., as couldn't think of the best way to describe the if statements without too many words. 
, wanted to keep it small.
*/

  let oneCount = 0;
  let twoCount = 0;
  let threeCount = 0;

/* Make a for loop, begins at position 0, variable i is less than the total length of the array (board cells).
Loop over and increase by 1 each time until all boolean statements are answered. Return the variable with a count plus one. */

  for (let i = 0; i < board.cells.length; i++){
    
    // If the cell does not contain a mine, and is not marked, get the value of this cell and increment by one.
    if (board.cells[i].isMine === false && board.cells[i].isMarked === false){
      oneCount++
    }
    // If the cell does contain a mine, and it is marked, get the value of this cell and increment by one.
    if (board.cells[i].isMine === true && board.cells[i].isMarked === true){
      twoCount++
    }
    // If the cell does not contain a mine, and it is hiddem, get the value of this cell and increment by one.
    if (board.cells[i].isMine === false && board.cells[i].hidden === false) {
      threeCount++;
    }
    // If the value of all three variables are equal to the length of the array, the player wins. Play a message to let them know.
    if (oneCount + twoCount + threeCount === board.cells.length){
      lib.displayMessage('You win!!!!!!!!!')
    } 
  }
}
 
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

/* countSurroundingMines with parameter of 'cell'. Start count at position 0.
Make surroundingCells point to getting them from their respective cells /cols /rows.
Make a for loop, begins at position 0, variable i is less than the total length of the array.
Loop over and increase by 1 each time until all 'cells' (objects) in the array are counted.
If statement, if the surrounding cells contain a mine, use increment operator to return the 
number of mines in surrounding cells.*/

function countSurroundingMines (cell) {
  
  var count = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      count++;
    }
  }
  return count;
}