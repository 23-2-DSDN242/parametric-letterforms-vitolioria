/* these are optional special variables which will change the system */
var systemBackgroundColor = "#07004d";
var systemLineColor = "#07004d";
var systemBoxColor = "#C73869";

/* internal constants */
//colours that will be used 
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
  let triangleY3 = letterData["TriY3"];

  let colourChange = letterData["colourChange"];

//----------------------Draw Shapes and colours




//draw rectangle
  noStroke();
  fill(66,135,245,75);
  rect(RectX,RectY,RectWidth,RectLength);
  
//MAIN RECTANGLE
  fill(RectColour1)
  rect(RectX+5,RectY+5,RectWidth,RectLength);
 


//draw arc
  stroke(252, 224, 144);
  strokeWeight(10);
  noFill();
  arc(ArcX,ArcY,ArcWidth,ArcLength,ArcStart,ArcEnd);

//MAIN ARC
  stroke(StrokeColour);
  strokeWeight(10);
  noFill();
  arc(ArcX+5,ArcY+5,ArcWidth,ArcLength,ArcStart,ArcEnd);



//draw triangle
  noStroke();
  fill(68, 92, 71, 75);
  triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);

//MAIN TRIANGLE
  fill(TriangleColour1);
  triangle(triangleX1+5,triangleY1+5,triangleX2+5,triangleY2+5,triangleX3+5,triangleY3+5);
  
}




// if(colourChange <= 0.99){


//   //draw rectangle
//     noStroke();
//     fill(66,135,245,75);
//     rect(RectX,RectY,RectWidth,RectLength);
    
//   //MAIN RECTANGLE
//     fill(RectColour1)
//     rect(RectX+5,RectY+5,RectWidth,RectLength);
   
  
  
//   //draw arc
//     stroke(252, 224, 144);
//     strokeWeight(10);
//     noFill();
//     arc(ArcX,ArcY,ArcWidth,ArcLength,ArcStart,ArcEnd);
  
//   //MAIN ARC
//     stroke(StrokeColour);
//     strokeWeight(10);
//     noFill();
//     arc(ArcX+5,ArcY+5,ArcWidth,ArcLength,ArcStart,ArcEnd);
  
//   //draw triangle
//     noStroke();
//     fill(68, 92, 71, 75);
//     triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
  
//   //MAIN TRIANGLE
//     fill(TriangleColour1);
//     triangle(triangleX1+5,triangleY1+5,triangleX2+5,triangleY2+5,triangleX3+5,triangleY3+5);
//   } 
  
  
  
//     else if( colourChange<= 1.99){
//       noStroke();
//       fill(66,135,245,75);
//       rect(RectX,RectY,RectWidth,RectLength);
      
//     //MAIN RECTANGLE
//       fill(Colour)
//       rect(RectX+5,RectY+5,RectWidth,RectLength);
     
    
    
//     //draw arc
//       stroke(colour4);
//       strokeWeight(10);
//       noFill();
//       arc(ArcX,ArcY,ArcWidth,ArcLength,ArcStart,ArcEnd);
    
//     //MAIN ARC
//       stroke(Colour2);
//       strokeWeight(10);
//       noFill();
//       arc(ArcX+5,ArcY+5,ArcWidth,ArcLength,ArcStart,ArcEnd);
    
//     //draw triangle
//       noStroke();
//       fill(68, 92, 71, 75);
//       triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
    
//     //MAIN TRIANGLE
//       noStroke();
//       fill(Colour3);
//       triangle(triangleX1+5,triangleY1+5,triangleX2+5,triangleY2+5,triangleX3+5,triangleY3+5);
  
  
//     }else if (colourChange ==3){
//         noStroke();
//         fill(66,135,245,75);
//         rect(RectX,RectY,RectWidth,RectLength);
        
//       //MAIN RECTANGLE
//         fill(TriangleColour1)
//         rect(RectX+5,RectY+5,RectWidth,RectLength);
       
      
      
//       //draw arc
//         stroke(colour4);
//         strokeWeight(10);
//         noFill();
//         arc(ArcX,ArcY,ArcWidth,ArcLength,ArcStart,ArcEnd);
      
//       //MAIN ARC
//         stroke(RectColour1);
//         strokeWeight(10);
//         noFill();
//         arc(ArcX+5,ArcY+5,ArcWidth,ArcLength,ArcStart,ArcEnd);
      
//       //draw triangle
//         noStroke();
//         fill(68, 92, 71, 75);
//         triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
      
//       //MAIN TRIANGLE
//         noStroke();
//         fill(Colour1);
//         triangle(triangleX1+5,triangleY1+5,triangleX2+5,triangleY2+5,triangleX3+5,triangleY3+5);
    
    
  
  

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
  "?CANVAS?"
]


