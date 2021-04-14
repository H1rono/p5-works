L="ŕǰŕǰďƪďƪ";
t=!"#つぶやきProcessing";
M=255,W=720,S=W/8,s=S/2;
setup=_=>{createCanvas(W,W);noStroke();}
draw=_=>{r=t/60;a=r&1;background(a*M);fill(!a*M);for(i=8;i--;)for(j=8;j--;pop()){push();translate(S*j+s,S*i+s);rotate(r*PI/2);unchar(L[i])>>j&1^a&&rect(-s,-s,S);}t++;}