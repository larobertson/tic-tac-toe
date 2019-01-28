
//each turn, starting with player x
//turn on the game position, 1 for player x, 0 for player 0
//if one line is complete, player wins
//entire column
//entire row
//diagonal
//if position !null, then it cannot be played

let turn = true;
let player = "X";

let gameField = [[null, null, null], [null, null, null], [null, null, null]]

let mapToField = (player, id) => {
  let row = Number(id[1]) - 1;
  let col = Number(id[3]) - 1;
  gameField[row].splice(col, 1, player);
  gameOver();
}

//make a list of clicked elements:
let clicked = [];

let renderToDom = (elementId) => {
    if(clicked.includes(elementId)) {
        alert('that space is taken');
    } else {
        clicked.push(elementId);
        if(turn) {
            player = "X";
        } else {
            player = "O";
        }
        document.getElementById(elementId).innerHTML = player;
        turn = !turn;
        //still need to map to game array
        mapToField(player, elementId);
    }
}

let gameOver = () => {
  //loop through gameField
  //if entire row, column, diagonal = X || O stop game
  //map to true
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