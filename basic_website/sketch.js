// All the pawns
let wPawn,
  wRook,
  wKnight,
  wBishop,
  wKing,
  wQueen,
  bPawn,
  bRook,
  bKnight,
  bBishop,
  bKing,
  bQueen;

// Background colors
let colorOne, colorTwo;

function preload() {
  // Uploaded Images
  wPawn = loadImage("./svg/White-Pawn.svg");
  wRook = loadImage("./svg/White-Rook.svg");
  wKnight = loadImage("./svg/White-Knight.svg");
  wBishop = loadImage("./svg/White-Bishop.svg");
  wKing = loadImage("./svg/White-King.svg");
  wQueen = loadImage("./svg/White-Queen.svg");

  bPawn = loadImage("./svg/Black-Pawn.svg");
  bRook = loadImage("./svg/Black-Rook.svg");
  bKnight = loadImage("./svg/Black-Knight.svg");
  bBishop = loadImage("./svg/Black-Bishop.svg");
  bKing = loadImage("./svg/Black-King.svg");
  bQueen = loadImage("./svg/Black-Queen.svg");
}

// Maximum amount of moves for the current match
let maximumMovesMatch;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Gradient background
  colorOne = color(30, 30, 30, 255);
  colorTwo = color(10, 10, 10, 255);

  for (let y = 0; y < height; y++) {
    n = map(y, 0, height, 0, 1);
    let newColor = lerpColor(colorOne, colorTwo, n);
    stroke(newColor);
    line(0, y, width, y);
  }

  console.log(colorOne)

  // Randomizes the amount of moves that can be played in the current match
  maximumMovesMatch = int(random(5, 100));
  console.log("Match will contain " + maximumMovesMatch + " sets of moves");
}

// Red color chessboard
let randomOddColor = {
  r: 255,
  g: 50,
  b: 50,
};

// Blue color chessboard
let randomEvenColor = {
  r: 50,
  g: 50,
  b: 255,
};

// Keeps track of all the drawn lines
let lineArray = [];


function draw() {
  
  // Control settings text
  textAlign(LEFT, TOP);
  noStroke();
  textSize(30);
  fill(50, 50, 255);
  text("Controls:", 50, windowHeight - 110);

  textSize(17);
  fill(255, 255, 255);
  text("Change board color: LEFT-ARROW and RIGHT-ARROW", 50, windowHeight - 80);

  textSize(17);
  fill(255, 255, 255);
  text("Reset board color: UP-ARROW", 50, windowHeight - 60);

  textSize(20);
  textAlign(CENTER, TOP);
  fill(255, 255, 255);
  text(
    "Press SPACEBAR to play a chess move",
    windowWidth / 2,
    windowHeight / 2 + 420
  );
  
  textSize(20);
  fill(255, 255, 255);
  text("Press BACKSPACE to restart the match", windowWidth / 2,
    windowHeight / 2 + 445
  );

  // Chess board square pattern
  let oddColor = color(randomOddColor.r, randomOddColor.g, randomOddColor.b);
  let evenColor = color(
    randomEvenColor.r,
    randomEvenColor.g,
    randomEvenColor.b
  );

  for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
      oddColor = color(randomOddColor.r, randomOddColor.g, randomOddColor.b);
      evenColor = color(
        randomEvenColor.r,
        randomEvenColor.g,
        randomEvenColor.b
      );
      
    } else {
      evenColor = color(randomOddColor.r, randomOddColor.g, randomOddColor.b);
      oddColor = color(randomEvenColor.r, randomEvenColor.g, randomEvenColor.b);
    }

    for (let j = 0; j < 8; j++) {
      if (j % 2 == 0) {
        fill(oddColor);
      } else {
        fill(evenColor);
      }
      noStroke();
      rect(
        i * 100 + windowWidth / 2 - 400,
        j * 100 + windowHeight / 2 - 400,
        100,
        100
      );
    }
  }

  // White Pawns
  for (let p = 0; p < 800; p += 100) {
    fill(50, 200, 200);
    image(
      wPawn,
      windowWidth / 2 - 400 + 0 + p,
      windowHeight / 2 + 200,
      100,
      100
    );
  }

  // White Rooks
  image(wRook, windowWidth / 2 - 400 + 0, windowHeight / 2 + 300, 100, 100);
  image(wRook, windowWidth / 2 - 400 + 700, windowHeight / 2 + 300, 100, 100);

  // White Knights
  image(wKnight, windowWidth / 2 - 400 + 100, windowHeight / 2 + 300, 100, 100);
  image(wKnight, windowWidth / 2 - 400 + 600, windowHeight / 2 + 300, 100, 100);

  // White Bishop
  image(wBishop, windowWidth / 2 - 400 + 200, windowHeight / 2 + 300, 100, 100);
  image(wBishop, windowWidth / 2 - 400 + 500, windowHeight / 2 + 300, 100, 100);

  // White King & Queen
  image(wQueen, windowWidth / 2 - 400 + 300, windowHeight / 2 + 300, 100, 100);
  image(wKing, windowWidth / 2 - 400 + 400, windowHeight / 2 + 300, 100, 100);

  // Black Pawns
  for (let p = 0; p < 800; p += 100) {
    fill(50, 200, 200);
    image(
      bPawn,
      windowWidth / 2 - 400 + 0 + p,
      windowHeight / 2 - 300,
      100,
      100
    );
  }

  // Black Rooks
  image(bRook, windowWidth / 2 - 400 + 0, windowHeight / 2 - 400, 100, 100);
  image(bRook, windowWidth / 2 - 400 + 700, windowHeight / 2 - 400, 100, 100);

  // Black Knights
  image(bKnight, windowWidth / 2 - 400 + 100, windowHeight / 2 - 400, 100, 100);
  image(bKnight, windowWidth / 2 - 400 + 600, windowHeight / 2 - 400, 100, 100);

  // Black Bishop
  image(bBishop, windowWidth / 2 - 400 + 200, windowHeight / 2 - 400, 100, 100);
  image(bBishop, windowWidth / 2 - 400 + 500, windowHeight / 2 - 400, 100, 100);

  // Black King & Queen
  image(bQueen, windowWidth / 2 - 400 + 300, windowHeight / 2 - 400, 100, 100);
  image(bKing, windowWidth / 2 - 400 + 400, windowHeight / 2 - 400, 100, 100);

  // Creates the actuall lines
  for (let i = 0; i < lineArray.length; i++) {
    stroke(lineArray[i].c1);
    strokeWeight(10);
    line(lineArray[i].x1, lineArray[i].y1, lineArray[i].x2, lineArray[i].y2);
  }

  // Clears sets of lines when the number is higher than the maximum amount of moves for the currrent match
  if (lineArray.length > maximumMovesMatch) {
    textSize(40);
    fill(255, 220, 43);
    textAlign(CENTER, CENTER);
    noStroke();
    text("CHECKMATE!", windowWidth / 2, windowHeight / 2 - 440);
  }
} // end of Draw

// Picks the random X position for the line
function randomPointX() {
  let paddingScreen = (windowWidth - 800) / 2;
  let pointX = int(random(0, 8)) * 100 + 50;
  let valueXOne = paddingScreen + pointX;

  return valueXOne;
}

// Picks the random Y position for the line
function randomPointY() {
  let paddingScreen = (windowHeight - 800) / 2;
  let pointY = int(random(0, 8)) * 100 + 50;
  let valueYOne = paddingScreen + pointY;

  return valueYOne;
}

// Pushes the lines in to the array
function pushRandomLine(lineColor) {
  let linesMemory = {
    x1: randomPointX(),
    y1: randomPointY(),
    x2: randomPointX(),
    y2: randomPointY(),
    c1: lineColor,
  };

  // Checks if the two points aren't at the same location, if they are, randomize it again
  if (linesMemory.x1 == linesMemory.x2 && linesMemory.y1 == linesMemory.y2) {
    pushRandomLine(lineColor);
    return;
  }

  lineArray.push(linesMemory);
}

function keyPressed() {
  // Color switching chess board white.
  // Left arrow
  if (keyCode === 37) {
    randomOddColor.r = random(0, 255);
    randomOddColor.g = random(0, 255);
    randomOddColor.b = random(0, 255);
    
    // Color switching chess board blue.
    // Right arrow
  } else if (keyCode === 39) {
    randomEvenColor.r = random(0, 255);
    randomEvenColor.g = random(0, 255);
    randomEvenColor.b = random(0, 255);
    
    // Color reset chess board.
    // Up arrow
  } else if (keyCode === 38) {
    randomOddColor.r = 255;
    randomOddColor.g = 50;
    randomOddColor.b = 50;
    randomEvenColor.r = 50;
    randomEvenColor.g = 50;
    randomEvenColor.b = 255;
    
    // Clears array of lines
    // Backspace
  } else if (keyCode === 8) {
    // Clear lines
    lineArray = [];
  
    // Add background back to remove the "checkmate" text
    colorOne = color(30, 30, 30, 255);
    colorTwo = color(10, 10, 10, 255);

    for (let y = 0; y < height; y++) {
      n = map(y, 0, height, 0, 1);
      let newColor = lerpColor(colorOne, colorTwo, n);
      stroke(newColor);
      line(0, y, width, y);
      
      maximumMovesMatch = int(random(5, 100));
    }
    
    // Play a move
    // Spacebar 
  } else if (keyCode === 32) {
    if (lineArray.length > maximumMovesMatch) { 
      return;
    }
    
    else {
    // Calls the function random line
    pushRandomLine([255, 255, 255, 240]);

    setTimeout(function () {
      pushRandomLine([0, 0, 0, 240]);
    }, 500);
    }
  }
}