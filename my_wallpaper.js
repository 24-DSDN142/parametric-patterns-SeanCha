//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

let outRectLoc = 10
let outRectWH = 20
  let inRectLoc = outRectLoc + outRectWH/4
  let inRectWH = outRectWH/2
let connectAmount = 2
  


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fill(255)
  rect(outRectLoc,outRectLoc,outRectWH,outRectWH)
  fill(0)
  rect(inRectLoc,inRectLoc,inRectWH,inRectWH)

  //rect(outRectLoc,(outRectLoc+outRectWH),50,100)
  //rect()

  connecters(5,outRectWH)
}

function connecters(start,end) {
  if (start>10) {start=10}
  for (let i = 0; i < start; i++) {
    var v = (i+1)/(start+2)
    var v2 = (v*end)
    rect(v2+outRectLoc,10,outRectWH/10,outRectWH/10)
    if (i===10) {break;}
  }
}
