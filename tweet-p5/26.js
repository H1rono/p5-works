t=!"#つぶやきProcessing";R=50;
setup=_=>{createCanvas(W=360,W);H=W/2;O=H-R;C=cos;S=sin;g=createGraphics(W,W);g.strokeWeight(3);}
draw=_=>{t+=0.02;clear();circle(H,H,W);circle(x=H+O*C(t),y=H+O*S(t),R*2);d=t*O/R;g.point(x+R*C(-d),y+R*S(-d));image(g,0,0);}