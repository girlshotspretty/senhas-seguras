const numerosenha = document.querySelector('.parametro-senha__texto');
let tamanhosenha = 5;
numerosenha.textContent = tamanhosenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;

function diminuitamanho() {
    if (tamanhosenha > 1) {
        tamanhosenha--;
    }
    numerosenha.textContent = tamanhosenha;
    geraSenha();
}

function aumentatamanho() {
    if (tamanhosenha < 20) {
        tamanhosenha++;
    }
    numerosenha.textContent = tamanhosenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Chama a função pela primeira vez para já começar com uma senha na tela
geraSenha();

function geraSenha() {
    let senha = '';
    for (let i = 0; i < tamanhosenha; i++) {
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio); 
        
        // CORREÇÃO AQUI: Atualizando a variável senha corretamente
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
