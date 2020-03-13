let posicaoRainhaLinha = 2;
let posicaoRainhaColuna = 2;

let posicaoPecaLinha = 2;
let posicaoPecaColuna = 2;

let ataqueFeito = false;

if (posicaoRainhaLinha === posicaoPecaLinha) {
    console.log("Ataque feito na mesma linha");
    ataqueFeito = true;
}

if (posicaoRainhaColuna === posicaoPecaColuna) {
    console.log("Ataque feito na mesma coluna");
    ataqueFeito = true;
}

// Diagonal inferior esquerda

for (let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna - i;

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        console.log("Ataque foi feitona diagonal inferior esquerda");
        ataqueFeito = true;
        break;
        
    }

}

// Diagonal superior direita

for (let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna + i;
    
    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        console.log("Ataque foi feito na diagonal inferior esquerda");
        ataqueFeito = true;
        break;
        
    }

}

// Diagonal superior esquerda

for (let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna - i;
    
    if (linhaRainha > 8 || colunaRainha <= 0) {
        break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        console.log("Ataque foi feito na diagonal inferior esquerda");
        ataqueFeito = true;
        break;
        
    }

}

// Diagonal inferior direita

for (let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna + i;
    
    if (linhaRainha <= 0 || colunaRainha > 8) {
        break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        console.log("Ataque foi feito na diagonal inferior direita");
        ataqueFeito = true;
        break;
        
    }

}

if(!ataqueFeito) {
    console.log("Não houve ataque!")
}
