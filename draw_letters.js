/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffda96";
var systemLineColor = "#4287f5";
var systemBoxColor = "#C73869";

/* internal constants */
const PurpleBlue  = "#4287f5";
const White  = "#FFF";
const SecondaryColour  = "#ffadfb";
const green = "#a1cc6c";
const darkGreen = "#3e4536";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(PurpleBlue);
  strokeWeight(4);

  // determine parameters for First Rectangle 
  let RectWidth1 = letterData["RectWidth1"];
  let RectLength1 = letterData["RectLength1"];
  let RectX1 = 50  + letterData["RectX1"];
  let RectY1 = 150 + letterData["RectY1"];

  // determine parameters for Second Rectangle 
  let RectWidth2 = letterData["RectWidth2"];
  let RectLength2 = letterData["RectLength2"];
  let RectX2 = 50  + letterData["RectX2"];
  let RectY2 = 150 + letterData["RectY2"];
  let RectRotation = letterData["RectRotation"];

  //determine circle parameters
  let CircleX1 = letterData["CircleX1"];
  let CircleY1 = letterData["CircleY1"];
  let CircleWidth1 = letterData["CircleWidth1"];
  let CircleLength1 = letterData["CircleLength1"];
 
  
  // draw shapes
  fill(PurpleBlue);
  //ellipse(50, 150, 75, 75);
  fill(PurpleBlue);
  rect(RectX1, RectY1, RectWidth1, RectLength1);
  fill(SecondaryColour)
  rect(RectX1, RectY1, RectWidth1-15, RectLength1);


  push()
  translate(5,5);
  rotate(RectRotation);
  stroke(darkGreen);
  fill(green);
  //rect(15+ RectX1, 15+ RectY1, RectWidth1-15, RectLength1-15);
  rect(RectX2, RectY2, RectWidth2, RectLength2);
  pop()
  
  push()
 
  stroke(SecondaryColour);
  fill(darkGreen);
  ellipse(CircleX1,CircleY1+6,CircleWidth1,CircleLength1);
  pop();
 
  
 // beginShape();

  // Add the first control point.
  // curveVertex(32, 91);

  // // Add the anchor points.
  // curveVertex(21, 17);
  // curveVertex(RectLength1, 19);

  // // Add the second control point.
  // curveVertex(84, RectX1);

  // // Stop drawing the shape.
  // endShape();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["RectWidth1"]    = map(percent, 0, 100, oldObj["RectWidth1"], newObj["RectWidth1"]);
  new_letter["RectLength1"] = map(percent, 0, 100, oldObj["RectLength1"], newObj["RectLength1"]);
  new_letter["RectX1"] = map(percent, 0, 100, oldObj["RectX1"], newObj["RectX1"]);
  new_letter["RectY1"]    = map(percent, 0, 100, oldObj["RectY1"], newObj["RectY1"]);
  new_letter["RectWidth2"]    = map(percent, 0, 100, oldObj["RectWidth2"], newObj["RectWidth2"]);
  new_letter["RectLength1"] = map(percent, 0, 100, oldObj["RectLength2"], newObj["RectLength2"]);
  new_letter["RectX2"] = map(percent, 0, 100, oldObj["RectX2"], newObj["RectX2"]);
  new_letter["RectY2"]    = map(percent, 0, 100, oldObj["RectY2"], newObj["RectY2"]);
 
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]


