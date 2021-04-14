t=!"#つぶやきProcessing"
C=p=>(p-H)/H;
P=i=>51/pow(mag(C(x)+cos(r=t+i*TAU/3)*.3,C(y)+sin(r)*.3),2);
setup=_=>{createCanvas(W=360,W);H=W/2;}
draw=_=>{t+=.1;for(x=W;x--;)for(y=W;y--;)set(x,y,[P(0),P(1),P(2),255]);updatePixels();}
// emulate https://twitter.com/h1rono_k/status/1365487289317486592