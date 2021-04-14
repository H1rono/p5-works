L="ļłƩƁǃžĤĢ";

D=(f,x,y,s)=>{
for(r=8;r--;)for(c=8;c--;){
unchar(L[r])&1<<c&&f(x+c*s,y+r*s,s);
}
}

setup=_=>{
createCanvas(W=720,W);
g=createGraphics(W,W);
background(0);
g.background(0);
D(g.rect,0,0,S=W/8);
D((X,Y,_)=>{image(g,X,Y,S,S)},0,0,S);
}

//#つぶやきProcessing