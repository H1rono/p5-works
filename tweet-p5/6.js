L=[119,20,110,62,29,59,123,22,127,63];w=90;h=30;t=i=0
draw=_=>{t++||createCanvas(W=360,W,WEBGL)
T=translate;R=rotateZ;d=-PI/2
clear();rotate(t*.04,[1,2,0]);T(p=-w/2,p,0);R(-d)
for(j=0;j<7;T(p,p,0),R(j++-2?-d:d))1<<j&L[i]&&box(w,h,h)
t%60||i++;i%=10}
//#つぶやきProcessing #pchj03