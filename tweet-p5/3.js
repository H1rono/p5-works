L=[119,20,110,62,29,59,123,22,127,63];w=90;h=30;k=-h/2;t=i=0;
draw=_=>{t++||createCanvas(W=360,W),fill(0);T=translate;R=rotate;d=-PI/2;clear();T(H=W/2,H);T(p=k-w/2,p);R(d);for(j=0;j<7;T(-p,-p),j++==2?R(d):R(-d))1<<j&L[i]&&rect(p,k,-p*2,h);i+=!(t%60);i%=10}
//#つぶやきProcessing