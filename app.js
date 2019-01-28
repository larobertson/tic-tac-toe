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
        //still need to map to game array
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

let gameStatus = (gameField) => {
  //loop through gameField
  //if entire row, column, diagonal = X || O stop game
  //map to true
  for (let row of gameField) {
    checkRows(row);
  }

}




//somewhere down here I want a reset game button
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