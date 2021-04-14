n=t=!"#つぶやきProcessing"
L=["ļłƩƁǃžĤĢ","ļłƕƁǃžĤń"]
setup=_=>{createCanvas(W=360,W);noStroke();H=W/2;d=W/9;}
draw=_=>{s=tan(t*PI/W);n^=t++%W==0;background(0);for(i=8;i--;)for(j=8;j--;circle(x+H,y+H,10)){[x,y]=[d+d*i-H,d+d*j-H];if(!(unchar(L[n][j])>>i&1)){[x,y]=[x+y*s,x*s+y];}}}