//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

    // DEVELOP_GLYPH
    // GRID_WALLPAPER
    // NINE_LANDSCAPE
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

let outRectLoc = 50
let outRectWH = 75
let connectAmount = 5
let connecterOrientation = 1
let pairs = 10
let circleSize = 15

let inRectLoc = outRectLoc + outRectWH/4
let inRectWH = outRectWH/2



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  //rect(outRectLoc,(outRectLoc+outRectWH),50,100)
  //rect()

  fill(0)

  
  fill(255)
  circles(pairs)
  

  strokeWeight(1)
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

function connecters(amount,length,startLoc,yLength) {
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




var circlePos = []
function randomNumbers(pairs){
  for (let i = 0; i < pairs; i++){
    let a = Math.floor(Math.random() * 200)
    let b = Math.floor(Math.random() * 200)
    let c = Math.floor(Math.random() * 200)
    let d = Math.floor(Math.random() * 200)
    circlePos.push(a, b, c ,d)
  }
}
randomNumbers(pairs)
console.log(circlePos)

function circles(){
  for (let i = 0; i < pairs; i++) {
    let c1X = circlePos[i]
    let c1Y = circlePos[i+1]
    let c2X = circlePos[i+2]
    let c2Y = circlePos[i+3]

    ellipse(c1X,c1Y,circleSize)
    ellipse(c2X,c2Y,circleSize)
    line(c1X,c1Y,c2X,c1Y)
    line(c2X,c2Y,c2X,c1Y)
  }
}
