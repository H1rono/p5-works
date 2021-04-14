t=0;
P=x=>(d=x-t,d<0?sin(d/30):0)
Q=x=>(d=W-x-t,d<0?sin(d/30):0)
setup=_=>{createCanvas(W=360,W);H=W/2;}
draw=_=>{background(255);beginShape();for(x=0;x<W;x+=2){vertex(x,H+(P(x)+Q(x))*50);}endShape();t++;}
/*#つぶやきProcessing 物理の授業で波の合成をと定常波を習ったので...*/