var hr;
var min;
var sec;

function draw(){
  createCanvas(800,600)
  background("black")
  //translate(400,400);

  textSize(70)
  fill ("#fff600")
  text("CLOCK",290,320)
  
  textSize(50)
  fill("#0019ff")
  
  text("12",370,45)
  textSize(50)
  fill("#ffd400")
  
  text("3",703,280)
  textSize(50)
  fill("#fa00ff")
  
  text("6",370,600)
  textSize(50)
  fill("#ff4300")
  
  text("9",107,280)
  translate(400,300)
  rotate(-90);
  hr = hour();
  sec=second();
  min=minute();
 
scangle=map(sec,0,60,0,360)
minangle=map(min,0,60,0,360)


strokeWeight(8);
stroke(255,100,150);
noFill();
var end1 = map(sec,0,60,0,360);
arc(0,0, 400,400,0, end1);
push()
strokeWeight(1);
rotate(end1);
line(0,0,100,0);
pop();

strokeWeight(10);
stroke("#ff3700");
noFill();
var end2 = map(min,0,60,0,360);
arc(0,0, 500,500,0, end2);
push();
strokeWeight(2);

rotate(end2);
line(0,0,300,0);
pop(); 

strokeWeight(12)
stroke("#00ff90")
noFill()
hrangle=map(hr%12,0,12,0,360)
arc(0,0,600,600,0,hrangle)
push();


push();
strokeWeight(3);

rotate(hrangle);
line(0,0,200,0);
pop(); 

}