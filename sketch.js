let myFont;
let building_sl, rotate_sl;
let CITY_SIZE_X = 700;
let CITY_SIZE_Y = 1000;
let BUILDING_MAX_SIZE = 45;
let gridSz_x = CITY_SIZE_X / BUILDING_MAX_SIZE;
let gridSz_y = CITY_SIZE_Y / BUILDING_MAX_SIZE;
let map = [];
function resetMap() {
  for (let i = 0; i < gridSz_x; i++)
    for (let j = 0; j < gridSz_y; j++) 
      map[i][j] = false;
}

function preload(){
  myFont = loadFont('assets/STIXGeneral.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 1);
  // init map
  for (let i = 0; i < gridSz_x; i++) {
    map[i] = [];
    for (let j = 0; j < gridSz_y; j++) {
      map[i][j] = false;
    }
  }
  building_sl = createSlider(30, 250, 3);
  building_sl.position(10, 30);
  rotate_sl = createSlider(110, 180, 0);
  rotate_sl.position(10, 50);

}
function draw() {
  background('#001036');
  randomSeed(0);
  lights();
  directionalLight(1, 0, 0, 1, 0, 0);
  rotateX(radians(rotate_sl.value()));
  fill(0.4);
  plane(800, 1200); // draw ground
  noStroke();
  let nBuildings = building_sl.value();
  translate(-CITY_SIZE_X / 2, -CITY_SIZE_Y / 2);
  
  for (let i = 0; i < nBuildings; i++) {
    let foundEmptySpot = false;
    let x = 0,
    y = 0;
    // loop until it finds an empty spot
    while (foundEmptySpot == false) {
      x = floor(random(0, gridSz_x));
      y = floor(random(0, gridSz_y));
      if (map[x][y] == false) {
        foundEmptySpot = true;
        map[x][y] = true;
      }
    }
    // randomly determine building dimensions
    let w = random(15, BUILDING_MAX_SIZE);
    let h = random(15, BUILDING_MAX_SIZE);
    let d = random(10, 100); // building height
    // render a building
    let r = random(1, 5);
    if(r >= 1 && r<2)  fill('#F2F0CE');
    else if(r >= 2 && r<3)  fill('#FAF566');
    else if(r >= 3 && r<4)  fill('#A68524');
    else  fill('#F2E205');
    
    push();
    translate(x * BUILDING_MAX_SIZE, y * BUILDING_MAX_SIZE, d / 2);
    box(w, h, d);
    pop();
  }
  
  resetMap();
}