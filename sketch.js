let teapot;
let rot;
let slider;
function preload() {
teapot = loadModel('assets/teapot.obj');
}
function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
colorMode(HSB, 360, 100, 100);
slider = createSlider(0, 360, 120);
slider.position(10, 10);
slider.style('width', '80px');
rot=0;
}
function draw() {
background(0);
// setting lights
pointLight(0, 0, 100, 0, 0, 500);
// transform the teapot
translate(0, 200, -300);
rotateX(HALF_PI);
rotateZ(rot);
scale(20);
noStroke();
// set teapot material colors
fill(slider.value(), 100, 100);
// display teapots
model(teapot);
// rotate teapots
rot += 0.02;
}