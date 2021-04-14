l=[30,18,30,16,16];C=R=5;s=30;t=0;
draw=_=>{!t&&createCanvas(360,360,WEBGL);rotateX(t+=.01);rotateY(t);T=translate;background(200);T(-s*C/2,-s*R/2,0);l.map((k,r)=>{for(c=C;c>0;--c){T(s, 0, 0);1<<c&k&&box(s);}T(-s*C,s,0);});};
//#つぶやきProcessing #p5js