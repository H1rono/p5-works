t=!"#つぶやきProcessing";
setup=_=>{createCanvas(W=360,W,WEBGL);C=cos;S=sin}
draw=_=>{background(0);scale(W*exp(S(t+=.01)-1));rotate(t/2,[1,0,1]);for(u=0;u<TAU;u+=.2)for(v=-PI/2;v<PI/2;v+=.1){stroke(1/abs(.5-noise(u,v,t)));point(C(u)*C(v),S(u)*C(v),S(v))}}
// どこかで見た気がする