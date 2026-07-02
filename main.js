const numerosenha = document.querySelector('.parametro-senha__texto');
let tamanhosenha = 5;
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
geraSenha();
}
function aumentatamanho(){
    if(tamanhosenha <20 ){
       // tamanhosenha = tamanhosenha+1;
        tamanhosenha++;
    }
numerosenha.textContent = tamanhosenha;
geraSenha();
}

 const campoSenha = document.querySelector('#campo-senha');

 const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 geraSenha();

 function geraSenha(){
let senha = '';
    for (let i = 0; i < tamanhosenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio); 
        let = senha + letrasMaiusculas[numeroAleatorio];
         }
         campoSenha.value = senha;

    }

