function setup() {
  createCanvas(600, 400);
  

}

function draw() {
  background(180);
  randomSeed(1);
  ghoul();
  
  //frameRate(10)
  //translate(0,100);
  //ghoul();
  
}




function ghoul() {

  
  
  
  noStroke();
  fill(186,200, 180);
  ellipse(width / 2, height / 2, 60, 65);

  //head

  noStroke();
  fill(255);
  ellipse(290, 195, 7, 8);

  noStroke();
  fill(255);
  ellipse(310, 195, 7, 8);

  // eye whites


  noStroke();
  fill(0);
  ellipse(290, 196, 3, 4);

  noStroke();
  fill(0);
  ellipse(310, 196, 3, 4);

  //pupils

  stroke(0);
  curve(275, 190, 285, 185, 295, 190, 300, 190);

  stroke(0);
  curve(295, 189, 305, 189, 315, 190, 310, 195);

  //eyebrows


  fill(0);
  noStroke();
  arc(300, 210, 25, 25, 0, PI, HALF_PI + PI);

  //mouth

  fill(255);
  rect(302, 211, 3, 5);

  fill(255);
  rect(295, 211, 3, 4);

  //teeth

  
  fill(0);
  ellipse(width / 2, 176, 70, 10)

  fill(0);
  rect(280, 136, 40, 40)

  //hat


  fill(186, 200, 180);
  triangle(260, 175, 283, 183, 272, 185);
  triangle(345, 178, 320, 180, 325, 185);

  pop();
  //ears
  
}
















  
