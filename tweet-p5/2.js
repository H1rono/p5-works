l=[831,831,819,816,831,831,13059,13107,16191,16191];C=14;R=12;s=20;h=s/2;w=0;
draw=_=>{w||createCanvas(w=360,w,WEBGL);clear();T=translate;T(h*C,-h*R,0);l.map(k=>{for(c=0;c<C;c++){T(-s,0,0);1<<c&k?fill(50,200):fill(0,0);box(s);}T(s*C,s,0);})}
#つぶやきProcessing