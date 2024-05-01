/* these are optional special variables which will change the system */
var systemBackgroundColor = "#07004d";
var systemLineColor = "#07004d";
var systemBoxColor = "#C73869";

/* internal constants */
//colours that will be used for shapes
const ArcStrokeColour = "#4287f5";
const RectColour = "#fe5e41";
const TriangleColour ="#ffb2e6"; 

//allows shapes to be drawn
function drawLetter(letterData) {
  angleMode(DEGREES);

 
  //rect size and placement parameters
  let RectX = letterData["RectX"];
  let RectY = letterData["RectY"];
  let RectWidth = letterData["RectWidth"];
  let RectLength = letterData["RectLength"];

  //arc size, end and placement parameters
  let ArcX = letterData["ArcX"];
  let ArcY = letterData["ArcY"];
  let ArcWidth = letterData["ArcWidth"];
  let ArcLength = letterData["ArcLength"];
  let ArcStart = letterData["ArcStart"];
  let ArcEnd = letterData["ArcEnd"];

  //triangle point and placement parameters
  let triangleX1 = letterData["TriX1"];
  let triangleY1 = letterData["TriY1"];
  let triangleX2 = letterData["TriX2"];
  let triangleY2 = letterData["TriY2"];
  let triangleX3 = letterData["TriX3"];
  let triangleY3 = letterData["TriY3"];


//Draw Shapes and colours

//draw background rectangle placement and colour 
  noStroke();
  fill(66,135,245,75);
  rect(RectX,RectY,RectWidth,RectLength);
  
//MAIN RECTANGLE
  fill(RectColour);
  rect(RectX+5,RectY+5,RectWidth,RectLength);
 

//draw background arc placement and colour 
  stroke(252, 224, 144);
  strokeWeight(10);
  noFill();
  arc(ArcX,ArcY,ArcWidth,ArcLength,ArcStart,ArcEnd);

//MAIN ARC placement and colour 
  stroke(ArcStrokeColour);
  strokeWeight(10);
  noFill();
  arc(ArcX+5,ArcY+5,ArcWidth,ArcLength,ArcStart,ArcEnd);


//draw background triangle placement and colour 
  noStroke();
  fill(68, 92, 71, 75);
  triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);

//MAIN TRIANGLE placement and colour 
  fill(TriangleColour);
  triangle(triangleX1+5,triangleY1+5,triangleX2+5,triangleY2+5,triangleX3+5,triangleY3+5);
  
}

//allows letters to transition and morph smoothly between each other
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["RectX"]    = map(percent, 0, 100, oldObj["RectX"], newObj["RectX"]);
  new_letter["RectY"] = map(percent, 0, 100, oldObj["RectY"], newObj["RectY"]);
  new_letter["RectWidth"] = map(percent, 0, 100, oldObj["RectWidth"], newObj["RectWidth"]);
  new_letter["RectLength"]    = map(percent, 0, 100, oldObj["RectLength"], newObj["RectLength"]);
  
  new_letter["ArcX"]    = map(percent, 0, 100, oldObj["ArcX"], newObj["ArcX"]);
  new_letter["ArcY"] = map(percent, 0, 100, oldObj["ArcY"], newObj["ArcY"]);
  new_letter["ArcWidth"] = map(percent, 0, 100, oldObj["ArcWidth"], newObj["ArcWidth"]);
  new_letter["ArcLength"]    = map(percent, 0, 100, oldObj["ArcLength"], newObj["ArcLength"]);
  new_letter["ArcStart"]    = map(percent, 0, 100, oldObj["ArcStart"], newObj["ArcStart"]);
  new_letter["ArcEnd"] = map(percent, 0, 100, oldObj["ArcEnd"], newObj["ArcEnd"]);

  new_letter["TriX1"] = map(percent, 0, 100, oldObj["TriX1"], newObj["TriX1"]);
  new_letter["TriY1"] = map(percent, 0, 100, oldObj["TriY1"], newObj["TriY1"]);
  new_letter["TriX2"] = map(percent, 0, 100, oldObj["TriX2"], newObj["TriX2"]);
  new_letter["TriY2"] = map(percent, 0, 100, oldObj["TriY2"], newObj["TriY2"]);
  new_letter["TriX3"] = map(percent, 0, 100, oldObj["TriX3"], newObj["TriX3"]);
  new_letter["TriY3"] = map(percent, 0, 100, oldObj["TriY3"], newObj["TriY3"]);
 
  return new_letter;
}

//chose words that relate to the font theme
var swapWords = [
  "PICASSO?",
  "ARTISTIC",
  "?CANVAS?"
]


