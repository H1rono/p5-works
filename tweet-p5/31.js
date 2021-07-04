t=!"#つぶやきProcessing"
P=(p,f,v)=>H+H*f(p)*v/2
setup=_=>{createCanvas(W=360,W);H=W/2;q=PI/4;T=TAU;C=cos;S=sin}
draw=_=>{clear(t+=.01);l=(t-q+C(t-q))%T;r=(t+S(t))%T;beginShape();for(d=0;d<T;d+=.01)vertex(P(d,C,v=l<d&&d<r?(S(map(d,l,r,0,3*T))+1)*.3+.7:1),P(d,S,v));endShape()}