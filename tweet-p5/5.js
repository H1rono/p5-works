W=100;L=Array(W).fill(0);M='map'
D=a=>0<=a&a<W
setup=_=>{createCanvas(W,W);L=L[M](_=>L[M](_=>random([0,1])))}
draw=_=>{clear();L=L[M]((l,r)=>l[M]((k,c)=>[k&&point(c,r),a=-k,[r-1,r,r+1][M](i=>[c-1,c,c+1][M](j=>a+=D(i)&D(j)&&L[i][j])),a==3||a==2&k][3]))}
#つぶやきProcessing