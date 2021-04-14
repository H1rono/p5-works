t=!"#つぶやきProcessing #tinycode @CCodeMadrid";d=10;
M=(p,q)=>sin(mag(p,q)/25-t);P=(x,y)=>M(x+H,y+H);Q=(x,y)=>M(x-H,y+H);
setup=_=>{createCanvas(W=360,W,WEBGL);H=W/2;}
draw=_=>{rotateX(PI/4);clear();for(x=d-H;x<H;x+=d)for(y=d-H;y<H;y+=d){point(x,y,(P(x,y)+Q(x,y))*10);}t+=.1;}