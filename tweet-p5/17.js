L = "#つぶやきProcessing";l=L.length;
F=a=>TAU*a/l;X=a=>W*cos(F(a))/3;Y=a=>W*sin(F(a))/3;
setup=_=>{createCanvas(W=360,W);noFill();H=W/2;}
draw=_=>{clear();translate(H,H);for(i=0;i<l;++i){circle(x=X(i),y=Y(i),20);for(j=0;j<l;++j)unchar(L[i])&1<<j&&line(x,y,X(j),Y(j));}}