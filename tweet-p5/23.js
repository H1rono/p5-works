t=!"#つぶやきProcessing";
M=(p,q)=>sin(mag(p,q)/5-t);
L=[M,(x,y)=>M(x,y-W),(x,y)=>M(x-W,y-H)]
setup=_=>{createCanvas(W=360,W);H=W/2;}
draw=_=>{clear();for(x=0;x<W;x+=5)for(y=0;y<W;y+=5){fill(0,map(L["map"](f=>f(x,y)).reduce((a,b)=>a+b),-2,2,0,255),255);rect(x,y,5);}t+=.2;}