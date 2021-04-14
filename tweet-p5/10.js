S=10;
R=W=t=!"#つぶやきProcessing"
L="ļłƩƁǃžĤĢ"
setup=_=>{createCanvas(W=720,W);colorMode(HSB,R=TAU)}
draw=_=>{background(0);t+=.01;for(d=0;d<R;d+=R/8){fill(r=(d+t)%R,R,R);T=f=>W/3*f(r)-S*4+W/2;for(i=0;i<8;i++)for(j=0;j<8;j++)L.charCodeAt(i)&1<<j&&rect(T(cos)+j*S,T(sin)+i*S,S)}}