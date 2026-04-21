let img
function preload9() {
  img = loadImage('assets/capybara.jpg');

}
function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(220);
  Image(img, 0, 0);
}