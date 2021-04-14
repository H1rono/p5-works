t=!"#つぶやきProcessing #PCD2021 砂漠";
M=100;
P=(p,q=0)=>noise(p/M,q/M,t);
setup=_=>{createCanvas(W=360,W);H=W*2/3;colorMode(HSB,1);S=stroke}
draw=_=>{t+=.01;for(x=0;x<W;x++){for(y=W;y--;point(x,y))S(.667,P(x,y),1);S(.084,.782,H*(P(x)-P(x-1))+.5);line(x,W,x,W-W*P(x))}}