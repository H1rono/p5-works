let W=360,H=W/2,d=W/8,F;
var t=!"#つぶやきProcessing",s;

function setup(){
 createCanvas(W,W);
 noStroke();
 F=fill;
}

function draw(){
 t+=.01;
 s=sin(t);
 F(0,32);
 rect(0,0,W);
 F("#p5js");
 for(let c=-H;c+=d,c<H;)
 for(let r=-H;r+=d,r<H;){
  circle(c+r*s+H,c*s+r+H,10);
 }
}