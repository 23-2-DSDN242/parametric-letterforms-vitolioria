/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fff6e6";
var systemLineColor = "#4287f5";
var systemBoxColor = "#C73869";

/* internal constants */
const PurpleBlue  = "#4287f5";
const White  = "#FFF";
const SecondaryColour  = "#ffadfb";
const yellow = "#ffcd4f";
const PencilColour = "#6e6e6e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
 
  //first line parameters
  let LineOnex1 = letterData["LineOnex1"];
  let LineOnex2 = letterData["LineOnex2"];
  let LineOney1 = letterData["LineOney1"];
  let LineOney2 = letterData["LineOney2"];

  //second line parameters
  let LineTwox1 = letterData["LineTwox1"];
  let LineTwox2 = letterData["LineTwox2"];
  let LineTwoy1 = letterData["LineTwoy1"];
  let LineTwoy2 = letterData["LineTwoy2"];

 //third line parameters
  let LineThreex1 = letterData["LineThreex1"];
  let LineThreex2 = letterData["LineThreex2"];
  let LineThreey1 = letterData["LineThreey1"];
  let LineThreey2 = letterData["LineThreey2"];

 //Pencil parameters
 let pencilY = letterData["pencilY"];
 let pencilRotation = letterData["pencilRotation"];

 //arc parameters
 let arcStart = letterData["arcStart"];
 let arcEnd = letterData["arcEnd"];
 let arcSize = letterData["arcSize"];
 let arcAmount = letterData["arcAmount"];

  stroke(PencilColour);
  strokeWeight(4);
  rect(LineOnex1, LineOnex2, LineOney1, LineOney2);
  line(LineTwox1, LineTwox2, LineTwoy1, LineTwoy2);
  line(LineThreex1, LineThreex2, LineThreey1, LineThreey2);

  push()
  translate(100,10);
  rotate(90);
  noFill();
  if(arcAmount <= 50){
    arc(75, 50, 100, arcSize, arcStart, arcEnd);
   } else{
    arc(75, 100, arcSize, 100, arcStart, arcEnd);
    arc(75, 50, 100, arcSize, arcStart, arcEnd);
   }
   pop()
//if parameters hit a certain value, the pencil area will change
  // if(LineOnex1 <= 50){
    push()
    beginShape()
    translate(10,2),
    rotate(pencilRotation);
    translate(10,2),
    
    noStroke()
    fill("#f7e8c1");
    triangle(10, 47, 18, 20, 25, 47);
    fill(PencilColour);
    triangle(14.9, 30, 18, 20, 20.7, 30);
    noStroke()
    fill(yellow);
    rect(10,50,15,107,0,0,2,2);
    fill(SecondaryColour);
    rect(10,150,15,17,0,0,2,2);
    fill(PencilColour);
    rect(10,150,15,5);
    noStroke()
    fill(yellow);
    rect(10, 45, 4.6, 10, 20, 15, 10, 5);
    rect(16, 43, 4.6, 10, 20, 15, 10, 5);
    rect(20.5, 45, 4.6, 50, 5, 5, 10, 5);
    stroke(PencilColour);
    strokeWeight(1.5);
    line(15,46,15,150);
    line(21,46,21,150);
    endShape()
    pop()
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
  "BAEKFAEK"
]


