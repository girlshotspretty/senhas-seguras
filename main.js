const numerosenha = document.querySelector('.parametro-senha__texto');
let tamanhosenha = 12;
numerosenha.textContent= tamanhosenha;

const botoes= document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;

function diminuitamanho(){
    if(tamanhosenha >1 ){
      //  tamanhosenha = tamanhosenha-1;
        tamanhosenha--;
    }
numerosenha.textContent= tamanhosenha;
}
function aumentatamanho(){
    if(tamanhosenha <20 ){
       // tamanhosenha = tamanhosenha+1;
        tamanhosenha++;
    }
numerosenha.textContent = tamanhosenha;
}

console.log(botoes);
