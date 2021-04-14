W=H=t=0;
draw=_=>{if(!t++){createCanvas(W=360,H=650);colorMode(RGB,H)}
D(0,h=H/2,(q,r)=>r*S(q)+r);D(h,H,(q,r)=>(H-r)*S(q)+r);updatePixels()}
S=a=>sin(a*TAU/W)
D=(s,e,f)=>{for(x=0;x<W;x++)for(y=s;y<e;y++)set(x,y,color(f(p=x+t,y),f(p+W*1/3,y),f(p+W*2/3,y)))}
//#つぶやきProcessing