var t = !"#つぶやきProcessing";
const d = 5, W = 360;
function setup() {
    createCanvas(W, W);
    noStroke();
}
function draw() {
    t+=0.01;
    for(let x = 0; x<W; x+=d) for(let y = 0; y<W; y+=d) {
        fill(1/abs(.5-noise(x/W, y/W-t, t)));
        rect(x, y, d);
    }
}