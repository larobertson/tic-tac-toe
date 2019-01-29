let turn = true;
let player = "X";

let gameField = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

let mapToField = (player, id) => {
  let row = Number(id[1]) - 1;
  let col = Number(id[3]) - 1;
  gameField[row].splice(col, 1, player);
  gameStatus(gameField);
}

let clicked = [];

let renderToDom = (elementId) => {
    if(clicked.includes(elementId)) {
        alert('that space is taken');
    } else {
        clicked.push(elementId);
        if(turn) {
            player = 'X';
        } else {
            player = 'O';
        }
        document.getElementById(elementId).innerHTML = player;
        turn = !turn;
        
        mapToField(player, elementId);
    }
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//Check for Winner
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

let checkRows = (row) => {
    console.log(row[0] === 'X', row[1] === 'X', row[2] === 'X');
    if(row[0] === 'X' && row[1] === 'X' && row[2] === 'X') {
         alert('X Wins!');
         location.reload()
    } else if (row[0] === 'O' && row[1] === 'O' && row[2] === 'O'){
        alert('O Wins!');
        location.reload();
    }
}

let checkColumn = (gameField) => {
  if(gameField[0][0] === 'X' && gameField[1][0] === 'X' && gameField[2][0] === 'X') {
      alert('X Wins!');
  } else if (gameField[0][1] === 'X' && gameField[1][1] === 'X' && gameField[2][1] === 'X') {
      alert('X Wins!')
  } else if (gameField[0][2] === 'X' && gameField[1][2] === 'X' && gameField[2][2] === 'X') {
    alert('X Wins!')
  }
  if(gameField[0][0] === 'O' && gameField[1][0] === 'O' && gameField[2][0] === 'O') {
    alert('O Wins!');
  } else if (gameField[0][1] === 'O' && gameField[1][1] === 'O' && gameField[2][1] === 'O') {
    alert('O Wins!')
  } else if (gameField[0][2] === 'O' && gameField[1][2] === 'O' && gameField[2][2] === 'O') {
    alert('O Wins!')
  }
}

let checkDiagonal = (gameField) => {
    if(gameField[0][0] === 'X' && gameField[1][1] === 'X' && gameField[2][2] === 'X') {
        alert('X Wins!');
    } else if (gameField[2][0] === 'X' && gameField[1][1] === 'X' && gameField[0][2] === 'X') {
        alert('X Wins!')
    }
    if(gameField[0][0] === 'O' && gameField[1][1] === 'O' && gameField[2][2] === 'O') {
      alert('O Wins!');
    } else if (gameField[2][0] === 'O' && gameField[1][1] === 'O' && gameField[0][2] === 'O') {
      alert('O Wins!')
    } 
  }

let gameStatus = (gameField) => {
  checkColumn(gameField);
  checkDiagonal(gameField);
  for (let row of gameField) {
    checkRows(row);
  }

}

let reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    location.reload();
  });

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//SAMPLE Click handler
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// document.addEventListener("click", () => {
//     document.getElementById("r1c1").innerHTML = "X";
//   });