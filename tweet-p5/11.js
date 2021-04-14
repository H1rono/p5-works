L={red:"ǠăǰğĀĀĀĀĀĀĀĀĀĀŀĀŀĂǀăƠąǠćǰďŰĎĀĀĀĀ",green:"ĀĀĀĀŰĂĨĂŨĄĘĞĀĀưăƸĝļļĐĈĀĀĀĀĀĀĸĜļļ",wheat:"ĀĀĀĀƀąǐĝƐĻǠāǠďĀĀĀĀĀĀŌĲĜĸČİĀĀĀĀĀĀ"}
setup=_=>{createCanvas(W=720,W);S=45;for(k in L){fill(k);for(r=16;r--;)for(c=16;c--;)L[k].charCodeAt(r*2+c/8)&1<<c%8&&rect(c*S,r*S,S)}}
#つぶやきProcessing