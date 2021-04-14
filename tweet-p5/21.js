C=100;
setup=_=>{createCanvas(W=360,W);colorMode(HSB,C);clear();noStroke();P=p=>(p/W-.5)*3;for(x=W;x--;)for(y=W;y--;rect(x,y,1)){n=J(P(x),P(y));fill(n==C?0:[n,C,C,C]);}}
J=(R,I)=>{c=0,r=R,i=I;for(;mag(r,i)<2&&c<C;c++)[r,i]=[r*r-i*i-.8,2*r*i+.16];return c;}
//#つぶやきProcessing