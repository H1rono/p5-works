t=!"#つぶやきProcessing #VIVET2020オンライン #p5js"
setup=_=>{createCanvas(W=360,W);H=W/2;d=W/9;P=a=>PI*a/H;}
draw=_=>{t+=.04;s=sin(t);background(0);
for(c=-H;c+=d,c<H;)for(r=-H;r+=d,r<H;){x=c+d*cos(n=P(r)-P(c)+t)/2;y=r+d*sin(n)/2;circle(x+H,y+H,10);}}
// https://editor.p5js.org/H1rono_K/present/TAjnpZ0Mm