// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById("currentTile");

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
  if (column <= 4) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level2Solution() {
  if (column <= 2) {
    tile.innerHTML = "HILLS";
  } else if (column <= 7) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level3Solution() {
  //   if (column >= 3 && column <= 7) {
  //     tile.innerHTML = "SAND";
  //   } else {
  //     tile.innerHTML = "HILLS";
  //   }

  if (column <= 2 || column >= 8) {
    tile.innerHTML = "HILLS";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level4Solution() {
  if (row <= 2) {
    tile.innerHTML = "HILLS";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level5Solution() {
  if (row <= 2) {
    tile.innerHTML = "HILLS";
  } else if (row <= 5 && row >= 3) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level6Solution() {
  if (row <= 5 && row >= 2) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level7Solution() {
  if (row == 4 && column == 7) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level8Solution() {
  if (column == 2 || row == 5) {
    tile.innerHTML = "HILLS";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level9Solution() {
  if (row <= 5 && column <= 5) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level10Solution() {
  if (column <= 1) {
    tile.innerHTML = "TREE";
  } else if (column <= 3) {
    tile.innerHTML = "HILLS";
  } else if (column <= 7) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level11Solution() {
  if (column <= 5 && row <= 3) {
    tile.innerHTML = "WATER";
  } else if (column <= 5 && row <= 7) {
    tile.innerHTML = "SAND";
  } else if (column <= 11 && row <= 3) {
    tile.innerHTML = "TREE";
  } else {
    tile.innerHTML = "HILLS";
  }
}

function level12Solution() {
  if (row <= 5 && column <= 5) {
    tile.innerHTML = "WATER";
  } else if (column <= 5 && row <= 7) {
    tile.innerHTML = "";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level13Solution() {}

function level14Solution() {}
