t=!"#つぶやきProcessing";
P=(i,s)=>sin(10*N(i,0)*s+N(i,1)*TAU)*exp(cos(N(i,2)*t/5+N(i,3)*PI)-1);
Q=(j,s)=>(P(j,s)+P(j+1,s))/2*H+H;
setup=_=>{createCanvas(W=360,W);H=W/2;N=noise;}
draw=_=>{t+=.1;clear();for(d=0;d<TAU;d+=.01){line(Q(0,d),Q(2,d),Q(0,d+.01),Q(2,d+.01));}}