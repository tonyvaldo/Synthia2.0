'use strict';

let whaleOne
let whaleTwo;
let whaleThree;
let whaleFour;
let whaleFive;

// let bubbles1;
// let bubbles2;

function setup() {
  createCanvas(windowWidth, windowHeight);

// bubbles1 = new Bubbles(300,300);
// bubbles2 = new Bubbles(300,300);

  whaleOne = new p5.Oscillator('sine');
  whaleOne.setType();
  whaleOne.freq(250);
  whaleOne.amp(0.5);

}

function draw() {
  background(9, 198, 211);
drawBubble1();
drawBubble2();
drawBubble3();
drawBubble4();

}

function drawBubble1(){
  noStroke();
   fill(139, 222, 247)
   circle(300, 100, 40);

   fill(205, 250, 250)
   circle(307, 100, 15);

}
function drawBubble2(){
  noStroke();
   fill(139, 222, 247)
   circle(300, 200, 40);

   fill(205, 250, 250)
   circle(307, 200, 15);

}
function drawBubble3(){
  noStroke();
   fill(139, 222, 247)
   circle(300, 300, 40);

   fill(205, 250, 250)
   circle(307, 300, 15);

}
function drawBubble4(){
  noStroke();
   fill(139, 222, 247)
   circle(300, 400, 40);

   fill(205, 250, 250)
   circle(307, 400, 15);

}
