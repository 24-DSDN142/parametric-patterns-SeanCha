
//your parameter variables go here!
let outRectLoc = 50               //Location of "microchip"
let outRectWH = 25                  //Width of "microchip"
let mirror = true                   //Mirror the "microchip" when outRectLoc + outRectWH is less than 100
let connectAmount = 3               //Amount of "wires" connected to "microchip" 
let connecterOrientation = 3        //Orientation of "wires" (1 = x axis), (2 = y axis), (3 = both)                     
let circleSize = 5                 //Size of circles

let randomCirclePos = false         //If this is false then you can manually set the positions of the circles in circlePos array, if true it will randomise the positions.
let pairs = 10                      //Amount of pairs of circles, if randomCirclePos = true, it will use this number, if randomCirclePos = false, it will automatically choose the number based on circlePos array

var circlePos = [80,80,80,80, 90,80,90,100, 100,80,100,120, 110,80,110,80, 120,100,120,100, 110,120,120,110, 40,80,-40,80, 40,95,-40,120, 40,120,-20,105, -20,105,40,105, 100,40,100,40, 100,0,100,0, 100,-40,100,-40, 200,160,200,240, 160,200,240,200, 180,180,220,180, 220,180,220,220, 220,220,180,220, 180,220,180,180]
//^^ If randomCirclePos = false, you can input the positions of the circles manually, if randomCirclePos = true, this array will be filled based on pairs variable


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}
function wallpaper_background() {
  background(33, 82, 194); //blue
}



let inRectLoc = outRectLoc + outRectWH/4 //position of inside rectangle
let inRectWH = outRectWH/2  // size of inside rectangle
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //translate(circleSize/2,circleSize/2)
  fill(94, 139, 242) //circle colour blue
  stroke(94, 139, 242) //line colour blue
  strokeWeight(2)
  circles(pairs) //run circle function


  stroke(0)
  strokeWeight(2)
  fill(255)
  rect(outRectLoc,outRectLoc,outRectWH,outRectWH,outRectWH/10) // Outer sqaure
  fill(0)
  rect(inRectLoc,inRectLoc,inRectWH,inRectWH) // Inner sqaure
  
  if (connecterOrientation == 1) { // Make connecters go horizontal
    connectersY(connectAmount,outRectWH,0,outRectLoc)
    connectersY(connectAmount,outRectWH,outRectLoc+outRectWH,(200-outRectLoc-outRectWH))
  } else if (connecterOrientation == 2) {
    connecters(connectAmount,outRectWH,0,outRectLoc) //Make connecters go vertical
    connecters(connectAmount,outRectWH,outRectLoc+outRectWH,(200-outRectLoc-outRectWH))
  } else if (connecterOrientation == 3) { // Make connecters go both horitontal and vetical
    connecters(connectAmount,outRectWH,0,outRectLoc)
    connecters(connectAmount,outRectWH,outRectLoc+outRectWH,(200-outRectLoc-outRectWH))
    connectersY(connectAmount,outRectWH,0,outRectLoc)
    connectersY(connectAmount,outRectWH,outRectLoc+outRectWH,(200-outRectLoc-outRectWH))
  }
  if (outRectLoc+outRectWH <= 100 && mirror == true){ // If mirror = true and outRectLoc + outRectWh < 100, mirror the "microchip" bottom right
    rotate(180)
    translate(-200,-200)
    fill(255)
    rect(outRectLoc,outRectLoc,outRectWH,outRectWH,outRectWH/10) // mirrored Outer sqaure
    fill(0)
    rect(inRectLoc,inRectLoc,inRectWH,inRectWH) // mirrored Inner sqaure
    if (connecterOrientation == 1) {
      connectersY(connectAmount,outRectWH,0,outRectLoc)
      connectersY(connectAmount,outRectWH,outRectLoc+outRectWH,(200-outRectLoc-outRectWH))
    } else if (connecterOrientation == 2) {
      connecters(connectAmount,outRectWH,0,outRectLoc)
      connecters(connectAmount,outRectWH,outRectLoc+outRectWH,(200-outRectLoc-outRectWH))
    } else if (connecterOrientation == 3) {
      connecters(connectAmount,outRectWH,0,outRectLoc)
      connecters(connectAmount,outRectWH,outRectLoc+outRectWH,(200-outRectLoc-outRectWH))
      connectersY(connectAmount,outRectWH,0,outRectLoc)
      connectersY(connectAmount,outRectWH,outRectLoc+outRectWH,(200-outRectLoc-outRectWH))
    }
  }
}  

function connecters(amount,length,startLoc,yLength,x) { //horizontal connecter code. takes outRectWH witdth and evenly spreads the connecters across it
  if (amount>10) {amount=10}
  for (let i = 0; i < amount; i++) {
    var v = (i+1)/(amount+2)
    var v2 = (v*length)
    rect(v2+outRectLoc+(outRectWH/8)/connectAmount,startLoc,outRectWH/15,yLength)
    if (i===10) {break;}
  }
}

function connectersY(amount,length,startLoc,xLength) {  //vertical connecter code. takes outRectWH witdth and evenly spreads the connecters across it
  if (amount>10) {amount=10}
  for (let i = 0; i < amount; i++) {
    var v = (i+1)/(amount+2)
    var v2 = (v*length)
    rect(startLoc,v2+outRectLoc+(outRectWH/8)/connectAmount,xLength,outRectWH/15)
    if (i===10) {break;}
  }
}




function randomNumbers(pairs){ // only relevent if randomCirclePos = true, puts random numbers between 0-200 as many times as "pairs" variable dictates
  for (let i = 0; i < pairs; i++){
    let a = Math.floor(Math.random() * (200-circleSize))
    let b = Math.floor(Math.random() * (200-circleSize))
    let c = Math.floor(Math.random() * (200-circleSize))
    let d = Math.floor(Math.random() * (200-circleSize))
    circlePos.push(a, b, c ,d)
  }
}
if (randomCirclePos == true){ //if randomCirclePos = true, make circlePos array empty and fill it with randomNumbers function 
  circlePos = []
  randomNumbers(pairs)
}
else if (randomCirclePos == false){ //if randomCirclePos = false, set pairs to the length of circlePos array
  pairs = circlePos.length
}

function circles(){ //circles function
  if (randomCirclePos == true){ // if randomCirclePos = true, go through circlePos array and make circles and lines connected to eachother for a more chaotic and random feel
    for (let i = 0; i < pairs; i++) {
      let c1X = circlePos[i]
      let c1Y = circlePos[i+1]
      let c2X = circlePos[i+2]
      let c2Y = circlePos[i+3]
      line(c1X,c1Y,c2X,c1Y)
      line(c2X,c2Y,c2X,c1Y)    
      ellipse(c1X,c1Y,circleSize)
      ellipse(c2X,c2Y,circleSize)
    }
  }
  if (randomCirclePos == false){ // if randomCirclePos = false, go through circlePos array and only connect each pair of circles for a handmade design
    for (let i = 0; i < pairs; i +=4) {
      let c1X = circlePos[i]
      let c1Y = circlePos[i+1]
      let c2X = circlePos[i+2]
      let c2Y = circlePos[i+3]
      line(c1X,c1Y,c2X,c1Y)
      line(c2X,c2Y,c2X,c1Y)    
      ellipse(c1X,c1Y,circleSize)
      ellipse(c2X,c2Y,circleSize)
    }
  }
}
