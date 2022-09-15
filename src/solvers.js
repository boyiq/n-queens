/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined;
  var board = new Board({'n': n});

  var colPlaced = {};
  var iterateColumns = function(rowIndex) {
    for (let i = 0; i < n; i++){
      if(!colPlaced[i]) {
        board.togglePiece(rowIndex, i);
        colPlaced[i] = true;
        console.log('now colPlaced is ' + JSON.stringify(colPlaced));
        return;
      }
    }
  };

  for (let j = 0; j < n; j++) {
    iterateColumns(j);
  }
  solution = board.rows();

  // establish already placed columns and rows (object)
  //use togglepiece to place or unplace pieces
  // make helper function to iterate over rows
    // iterate over the columns
      //check if the index is already defined in the object, check whether the value of that key
      //if it is not: togglepiece at this index, making it to 1; add index to column and row.
      //return;

  // for loop on the row index
    //helperfunction(colIndex)

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
