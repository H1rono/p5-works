L="ŷĔŮľĝĻŻĖſĿ";w=160;h=50;t=!"#つぶやきProcessing"
setup=_=>{createCanvas(W=720,W);colorMode(HSB,10);noFill()}
draw=_=>{background(0);t+=1/60;T=translate;d=PI/2;T(H=W/2,H);stroke(n=t%10|0,9,9);for(i=0;i<7;i++){T(p=-w/2,p);rotate(i-3?d:-d);1<<i&L.charCodeAt(n)&&rect(p,-h/2,w,h)}}