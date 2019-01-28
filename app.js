
let turn = true;
//decide who's turn it is
//after each turn flip the turn boolean
if(turn) {
    let xPlay = (elementId) => {
        //here I need to figure out how to get ANY clicked ID
    document.getElementById(elementId).innerHTML = "X";
    turn = !turn;
    }
} else {
    let oPlay = (elementId) => {
        //here I need to figure out how to get ANY clicked ID
    document.getElementById(elementId).innerHTML = "O";
    turn = !turn;
    }
}

//somewhere down here I want a reset game button

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//SAMPLE Click handler
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

document.addEventListener("click", () => {
    document.getElementById("r1c1").innerHTML = "X";
  });