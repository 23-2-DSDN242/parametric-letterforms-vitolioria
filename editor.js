
/*******
 * define this "sliderInfo" variable
 * have an entry for each slider you want
 * and each row should be:
 * ["object_field", minimum_bound, maximum_bound]
 */
const sliderInfo = [
  ["RectX", 0, 200],
  ["RectY", -200, 200],
  ["RectWidth", 0, 200],
  ["RectLength", -200, 200],

  ["ArcX", -100, 100],
  ["ArcY", -100, 200],
  ["ArcWidth", 0, 100],
  ["ArcLength", 0, 100],
  ["ArcStart", 0, 360],
  ["ArcEnd", 0, 360],

  ["TriX1",0,200],
  ["TriY1",0,200],
  ["TriX2",0,200],
  ["TriY2",0,200],
  ["TriX3",0,200],
  ["TriY3",0,200]




  // ["LineOnex1",0,200],
  // ["LineOnex2",0,200],
  // ["LineOney1",0,200],
  // ["LineOney2",0,200],
  // ["LineTwox1",0,200],
  // ["LineTwox2",0,200],
  // ["LineTwoy1",0,200],
  // ["LineTwoy2",0,200],
  // ["LineThreex1",0,200],
  // ["LineThreex2",0,200],
  // ["LineThreey1",0,200],
  // ["LineThreey2",0,200],
  // ["arcStart",0,400],
  // ["arcEnd",0,400],
  // ["arcSize",0,200],
  // ["arcAmount",0,100],
  // ["pencilY",0,100],
  // ["pencilRotation",-360,360],
  
  
  // ["triWidth1", 0, 150],
  // ["triLength1",0, 150],
  // ["triX1",  -50,  50],
  // ["triY1", -100, 50],
 

];

// PROBABLY DON'T NEED TO EDIT ANYTHING ELSE. STOP HERE.

const numSliders = sliderInfo.length;

if (typeof systemBackgroundColor === 'undefined') {
    var systemBackgroundColor = "#e3eded";
}

// this will use variables if they are already defined
// var systemBackgroundColor = systemBackgroundColor || "#e3eded";

// if everything is defined above, this should just work
function sliderToDataObject() {
  let obj = {};
  for (let i=0; i<numSliders; i=i+1) {
    o_name = sliderInfo[i][0]
    bounds_low = sliderInfo[i][1]
    bounds_high = sliderInfo[i][2]
    obj[o_name] = map(param_sliders[i].value(), 0, 100, bounds_low, bounds_high);
  }
  return obj;
}

let param_sliders = [];

let main_canvas = null;

const canvasWidth = 960;
const canvasHeight = 500;

let debugBox = false;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  for(let i=0; i<numSliders; i++) {
    let cur_row = select("#row" + (i+1))
    cur_row.show();
    let cur_slider = createSlider(0, 100, 50)
    let containerString = "slider" + (i+1) + "Container"
    cur_slider.parent(containerString);
    param_sliders.push(cur_slider);
  }

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);
  button.parent(buttonContainer);
}

function buttonPressedEvent() {
  let obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

function draw () {
  // clear screen
  background(systemBackgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push();
  scale(2);
  translate(width/4 - 50, 25);

  if (debugBox) {
    noFill()
    strokeWeight(4);
    stroke(0, 200, 0);
    rect(0, 0, 100, 200);
  }

  let obj = sliderToDataObject();
  drawLetter(obj);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else if (key == 'd') {
    debugBox = !debugBox;
    // console.log("debugBox is now: " + debugBox);
    redraw();
  }
  else if (key == ' ') {
    let obj = sliderToDataObject();
    json = JSON.stringify(obj, null, 2);
    console.log(json);
  }
}

