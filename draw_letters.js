/* these are optional special variables which will change the system */
var systemBackgroundColor = "#07004d";
var systemLineColor = "#4287f5";
var systemBoxColor = "#C73869";

/* internal constants */
const StrokeColour = "#4287f5";
const RectColour1 = "#fe5e41";
const ArcColour1 = "#ddffd9";
const TriangleColour1 ="#ffb2e6"; 

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);

 
  //rect parameters
  let RectX = letterData["RectX"];
  let RectY = letterData["RectY"];
  let RectWidth = letterData["RectWidth"];
  let RectLength = letterData["RectLength"];

  //arc parameters
  let ArcX = letterData["ArcX"];
  let ArcY = letterData["ArcY"];
  let ArcWidth = letterData["ArcWidth"];
  let ArcLength = letterData["ArcLength"];
  let ArcStart = letterData["ArcStart"];
  let ArcEnd = letterData["ArcEnd"];

  //triangle parameters
  let triangleX1 = letterData["TriX1"];
  let triangleY1 = letterData["TriY1"];
  let triangleX2 = letterData["TriX2"];
  let triangleY2 = letterData["TriY2"];
  let triangleX3 = letterData["TriX3"];
  let triangleY3 = letterData["TriY3"]


  noStroke();
  fill(66,135,245,75);
    rect(RectX,RectY,RectWidth,RectLength);
  
  fill(RectColour1)
   rect(RectX+5,RectY+5,RectWidth,RectLength);
 
   noStroke();
   fill(68, 92, 71, 75);
     triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
   
     fill(TriangleColour1);
     triangle(triangleX1+5,triangleY1+5,triangleX2+5,triangleY2+5,triangleX3+5,triangleY3+5);
     


   stroke(252, 224, 144);
   strokeWeight(10);
   noFill();
     arc(ArcX,ArcY,ArcWidth,ArcLength,ArcStart,ArcEnd);

stroke(StrokeColour);
strokeWeight(10);
noFill();
  arc(ArcX+5,ArcY+5,ArcWidth,ArcLength,ArcStart,ArcEnd);




noStroke();
fill(68, 92, 71, 75);
  triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);

  fill(TriangleColour1);
  triangle(triangleX1+5,triangleY1+5,triangleX2+5,triangleY2+5,triangleX3+5,triangleY3+5);
  
//   //second line parameters
//   let LineTwox1 = letterData["LineTwox1"];
//   let LineTwox2 = letterData["LineTwox2"];
//   let LineTwoy1 = letterData["LineTwoy1"];
//   let LineTwoy2 = letterData["LineTwoy2"];

//  //third line parameters
//   let LineThreex1 = letterData["LineThreex1"];
//   let LineThreex2 = letterData["LineThreex2"];
//   let LineThreey1 = letterData["LineThreey1"];
//   let LineThreey2 = letterData["LineThreey2"];

//  //Pencil parameters
//  let pencilY = letterData["pencilY"];
//  let pencilRotation = letterData["pencilRotation"];

//  //arc parameters
//  let arcStart = letterData["arcStart"];
//  let arcEnd = letterData["arcEnd"];
//  let arcSize = letterData["arcSize"];
//  let arcAmount = letterData["arcAmount"];

//   stroke(PencilColour);
//   strokeWeight(4);
//   line(LineOnex1, LineOnex2, LineOney1, LineOney2);
//   line(LineTwox1, LineTwox2, LineTwoy1, LineTwoy2);
//   line(LineThreex1, LineThreex2, LineThreey1, LineThreey2);

//   push()
//   translate(100,10);
//   rotate(90);
//   noFill();
//   if(arcAmount <= 50){
//     arc(75, 50, 100, arcSize, arcStart, arcEnd);
//    } else{
//     arc(75, 100, arcSize, 100, arcStart, arcEnd);
//     arc(75, 50, 100, arcSize, arcStart, arcEnd);
//    }
//    pop()
// //if parameters hit a certain value, the pencil area will change
//   // if(LineOnex1 <= 50){
//     push()
//     beginShape()
//     translate(10,2),
//     rotate(pencilRotation);
//     translate(10,2),
    
//     noStroke()
//     fill("#f7e8c1");
//     triangle(10, 47, 18, 20, 25, 47);
//     fill(PencilColour);
//     triangle(14.9, 30, 18, 20, 20.7, 30);
//     noStroke()
//     fill(yellow);
//     rect(10,50,15,107,0,0,2,2);
//     fill(SecondaryColour);
//     rect(10,150,15,17,0,0,2,2);
//     fill(PencilColour);
//     rect(10,150,15,5);
//     noStroke()
//     fill(yellow);
//     rect(10, 45, 4.6, 10, 20, 15, 10, 5);
//     rect(16, 43, 4.6, 10, 20, 15, 10, 5);
//     rect(20.5, 45, 4.6, 50, 5, 5, 10, 5);
//     stroke(PencilColour);
//     strokeWeight(1.5);
//     line(15,46,15,150);
//     line(21,46,21,150);
//     endShape()
//     pop()
}

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

var swapWords = [
  "PICASSO?",
  "ARTISTIC",
  "BAEKFAEK"
]


