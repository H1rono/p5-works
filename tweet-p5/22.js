t=!"#つぶやきProcessing"
N=(n,p,q)=>map(noise(n,t),0,1,p,q);
C=n=>N(n,0,255);
setup=_=>{createCanvas(W=360,W);noFill();}
draw=_=>{t+=.01;x=N(0,0,W);y=N(1,0,W);r=N(2,5,70);stroke(C(3),C(4),C(5));circle(x,y,r);}
// ランダムウォークすごい