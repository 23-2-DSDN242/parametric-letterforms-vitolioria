const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 20,
  "length":90,
  "offsetx": 65,
  "offsety": -10,
  "radius": 1
  // "color": (212, 225, 193)
}

const letterB = {
  "size": 30,
  "length":120,
  "offsetx": -70,
  "offsety": -145,
  "radius": 15
  // "color": (54, 71, 243)
}

const letterC = {
  "size": 100,
  "length":50,
  "offsetx": 30,
  "offsety": -20,
  "radius": 0
  // "color": (115, 185, 227)
}

const backgroundColor  = "#F37536";

const purple  = "#3647F3";
const lightGreen  = "#84BC29";
const strokeColor  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let length2 = letterData["length"];
  let radius2 = letterData["radius"];
 // let color2 = letterData["color"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(purple);
  ellipse(posx, posy, 150, 150);
  fill(backgroundColor);
  ellipse(posx, posy, 100, 100);
  fill(lightGreen);
  rect(pos2x, pos2y, size2, length2,radius2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
