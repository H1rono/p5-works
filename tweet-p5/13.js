t=!"#つぶやきProcessing"
setup=_=>{createCanvas(W=360,W);}
draw=_=>{background(0);H=W/2;S=sin;C=cos;t+=.1;s=t/9;d=TAU/7;for(n=0;n<TAU;n+=.3){r=mag(x=H+H*C(p=n+s),y=H+H*S(C(s)*n+p))/9;for(a=t;a<TAU+t;a+=d){triangle(x,y,x+r*C(q=a-d),y+r*S(q),x+r*C(a)*C(d),y+r*S(a)*C(d));}}}