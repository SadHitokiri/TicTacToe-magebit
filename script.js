let area = document.getElementById("area");
let cell = document.getElementsByClassName("cell");
let currecntPlayer = document.getElementById("currentPlayer");
let span = document.querySelector('span');
let player = "x";
let winIndex = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// CREATE CELLS
for (let i = 1; i <= 9; i++) {
  area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", cellClick, false);
}

// MAIN PART OF THE GAME
function cellClick() {
  var data = [];

  if (!this.innerHTML) {
    this.innerHTML = player;
  } else {
    
    return;
  }

  for (var i in cell) {
    if (cell[i].innerHTML == player) {
      data.push(parseInt(cell[i].getAttribute("pos")));
    }
  }

  if(checkWin(data)){
    restart('WIN: '+ player.toUpperCase());
  } else {
    let draw = true;
    for(let i in cell){
        if(cell[i].innerHTML == '') draw = false;
    }
    if(draw) {
        restart('DRAW');
        
    }
  }

  player = player == "x" ? "o" : "x";

  currentPlayer.innerHTML = player.toUpperCase();
}


// WIN COMBINATIONS 
function checkWin(data) {
    for(let i in winIndex) {
        let win = true;
        for(let j in winIndex[i]) {
            let id = winIndex[i][j];
            let index = data.indexOf(id);

            if(index == -1) {
                win = false
            }
        }

        if(win) return true;
    }

    return false
}

// ALERT ABOUT WIN, DRAW
function restart(text) {
    alert(text);
    for(let i = 0; i <cell.length; i++){
        cell[i].innerHTML = '';
    }
}