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
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var piecesPlaced = 0;
  var columnPlaced = {};
  var rowPlaced = 0;
  var board = new Board({'n': n});
  var placeOnRow = function(matrix) {
    for (let i = 0; i < n ; i++) {

      if (!columnPlaced[i]) {
        piecesPlaced++;
        if (piecesPlaced === n) {
          solutionCount++
        } else {
          board.togglePiece(rowPlaced, i);
          columnPlaced[i] = true;
          placeOnRow(board.rows());
          board.togglePiece(rowPlaced, i);
          columnPlaced[i] = false;
        }
        piecesPlaced--;
      }
    }
  }

  placeOnRow(board.rows());
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n': n});
  var colPlaced = {};
  var piecesPlaced = 0;
  var rowPlaced = 0;
  var firstTimeRun = true;
  var placeOnRow = function(matrix) {
    let start = 0;
    if (firstTimeRun && n > 1) {
      start = 1;
      firstTimeRun = false;
    }

    for (let i = start; i < n; i++) {
      if(!colPlaced[i]) {
        solution.togglePiece(rowPlaced, i);
        if (solution.hasMajorDiagonalConflictAt(i - rowPlaced) || solution.hasMinorDiagonalConflictAt(i + rowPlaced)) {
          solution.togglePiece(rowPlaced, i);
        } else {
          piecesPlaced ++;
          if (piecesPlaced === n) {
            return;
          } else {
            colPlaced[i] = true;
            rowPlaced ++;
            placeOnRow(solution.rows());
            if (piecesPlaced === n) {
              return;
            }
            rowPlaced --;
            colPlaced[i] = false;
            solution.togglePiece(rowPlaced, i);
          }
          piecesPlaced --;
        }
      }
    }
  }

  placeOnRow(solution.rows());
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var solutionCount = 0;
  var solution = new Board({'n': n});
  var colPlaced = {};
  var piecesPlaced = 0;
  var rowPlaced = 0;
  var firstTimeRun = true;
  if(n === 0) {
    return 1;
  }
  var placeOnRow = function(matrix) {
    for (let i = 0; i < n; i++) {
      if(!colPlaced[i]) {
        solution.togglePiece(rowPlaced, i);
        if (solution.hasMajorDiagonalConflictAt(i - rowPlaced) || solution.hasMinorDiagonalConflictAt(i + rowPlaced)) {
          solution.togglePiece(rowPlaced, i);
        } else {
          piecesPlaced ++;
          if (piecesPlaced === n) {
            solutionCount++;
            solution.togglePiece(rowPlaced, i);
          } else {
            colPlaced[i] = true;
            rowPlaced ++;
            placeOnRow(solution.rows());
            rowPlaced --;
            colPlaced[i] = false;
            solution.togglePiece(rowPlaced, i);
          }
          piecesPlaced --;
        }
      }
    }
  }

  placeOnRow(solution.rows());

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);

  return solutionCount;
};
