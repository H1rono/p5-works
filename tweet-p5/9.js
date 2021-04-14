S=10;
h=S*8/2;
L=["ļłƩƁǃžĤĢ","ļłƕƁǃžĤń"]
W=t=!"#つぶやきProcessing"

function setup(){
createCanvas(W=360,W);
}

function draw(){
background(0);
s=L[++t/9%2|0];
P=f=>f(t/60)*100+W/2-h;
for(i=0;i<8;i++){
for(j=0;j<8;j++){
s.charCodeAt(i)&1<<j&&rect(P(cos)+j*S,P(sin)+i*S,S);
}
}
}