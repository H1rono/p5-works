L="ļłƩƁǃžĤĢ";
W=360;s=5;
R=(f,i=0)=>i<W&&(f(i),R(f,i+s));
P=p=>p/W*8|0;
D=t=>R(x=>R(y=>(v=>fill(unchar(L[P(y)])>>P(x)&1?255-v:v).rect(x,y,s))(1/abs(noise(x/W,y/W-t,t)-.5))));
setup=_=>noStroke().createCanvas(W,W);
draw=(c=>_=>D(c+=.01))(0);
//#つぶやきProcessing