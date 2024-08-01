//your parameter variables go here!
let outRectLoc = 25                 //Location of "microchip"
let outRectWH = 50                  //Width of "microchip"
let added = outRectLoc+outRectWH
let mirror = true                   //Mirror the "microchip" when outRectLoc + outRectWH is less than 100
let connectAmount = 5               //Amount of "wires" connected to "microchip" 
let connecterOrientation = 1        //Orientation of "wires" (1 = x axis), (2 = y axis), (3 = both)                     
let circleSize = 5                 //Size of circles

let randomCirclePos = false         //If this is false then you can manually set the positions of the circles in circlePos array, if true it will randomise the positions.
let pairs = 10                      //Amount of pairs of circles, if randomCirclePos = true, it will use this number, if randomCirclePos = false, it will automatically choose the number based on circlePos array
var circlePos = [130,115,30,85,150,115,150,100,150,100,50,85,170,115,170,85,75,85,170,85,70,15,170,-15,50,15,50,0,50,0,150,-15,30,15,30,-15,30,-15,130,-15]
//^^ If randomCirclePos = false, you can input the positions of the circles manually, if randomCirclePos = true, this array will be filled based on pairs variable

//130,115,30,85,150,115,150,100,150,100,50,85,170,115,170,85,75,85,170,85,70,15,170,-15,50,15,50,0,50,0,150,-15,30,15,30,-15,30,-15,130,-15

    // DEVELOP_GLYPH
    // GRID_WALLPAPER
    // NINE_LANDSCAPE
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(33, 82, 194); //light honeydew green colour
}
//240, 255, 240
//130,115,30,85,150,115,150,100,150,100,50,85,170,115,170,85,75,85,170,85,70,15,170,-15,50,15,50,0,50,0,150,-15,30,15,30,-15,30,-15,130,-15

let inRectLoc = outRectLoc + outRectWH/4
let inRectWH = outRectWH/2
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //translate(circleSize/2,circleSize/2)
  fill(94, 139, 242)
  stroke(94, 139, 242)
  strokeWeight(2)
  circles(pairs)


  stroke(0)
  strokeWeight(2)
  //translate(-(circleSize/2),-(circleSize/2))
  fill(255)
  rect(outRectLoc,outRectLoc,outRectWH,outRectWH,outRectWH/10) // Outer sqaure
  fill(0)
  rect(inRectLoc,inRectLoc,inRectWH,inRectWH) // Inner sqaure
  
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
  if (outRectLoc+outRectWH <= 100 && mirror == true){
    rotate(180)
    translate(-200,-200)
    fill(255)
    rect(outRectLoc,outRectLoc,outRectWH,outRectWH,outRectWH/10) // Outer sqaure
    fill(0)
    rect(inRectLoc,inRectLoc,inRectWH,inRectWH) // Inner sqaure
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

function connecters(amount,length,startLoc,yLength,x) {
  if (amount>10) {amount=10}
  for (let i = 0; i < amount; i++) {
    var v = (i+1)/(amount+2)
    var v2 = (v*length)
    rect(v2+outRectLoc+(outRectWH/8)/connectAmount,startLoc,outRectWH/15,yLength)
    if (i===10) {break;}
  }
}

function connectersY(amount,length,startLoc,xLength) {
  if (amount>10) {amount=10}
  for (let i = 0; i < amount; i++) {
    var v = (i+1)/(amount+2)
    var v2 = (v*length)
    rect(startLoc,v2+outRectLoc+(outRectWH/8)/connectAmount,xLength,outRectWH/15)
    if (i===10) {break;}
  }
}




function randomNumbers(pairs){
  for (let i = 0; i < pairs; i++){
    let a = Math.floor(Math.random() * (200-circleSize))
    let b = Math.floor(Math.random() * (200-circleSize))
    let c = Math.floor(Math.random() * (200-circleSize))
    let d = Math.floor(Math.random() * (200-circleSize))
    circlePos.push(a, b, c ,d)
  }
}
if (randomCirclePos == true){
  circlePos = []
  randomNumbers(pairs)
  console.log(pairs)
}
else if (randomCirclePos == false){
  pairs = circlePos.length
  console.log(pairs)
}

function circles(){
  if (randomCirclePos == true){
    for (let i = 0; i < pairs; i++) {
      let c1X = circlePos[i]
      let c1Y = circlePos[i+1]
      let c2X = circlePos[i+2]
      let c2Y = circlePos[i+3]
      console.log(i)


      line(c1X,c1Y,c2X,c1Y)
      line(c2X,c2Y,c2X,c1Y)    
      ellipse(c1X,c1Y,circleSize)
      ellipse(c2X,c2Y,circleSize)
    }
  }
  if (randomCirclePos == false){
    for (let i = 0; i < pairs; i +=4) {
      let c1X = circlePos[i]
      let c1Y = circlePos[i+1]
      let c2X = circlePos[i+2]
      let c2Y = circlePos[i+3]
      console.log(i)


      line(c1X,c1Y,c2X,c1Y)
      line(c2X,c2Y,c2X,c1Y)    
      ellipse(c1X,c1Y,circleSize)
      ellipse(c2X,c2Y,circleSize)
    }
  }
}
