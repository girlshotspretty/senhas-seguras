// Seleciona o elemento que mostra o número do tamanho na tela
const numerosenha = document.querySelector('.parametro-senha__texto');
let tamanhosenha = 5; // Começa com tamanho 5, você pode mudar para 12 se preferir
numerosenha.textContent = tamanhosenha;

// Seleciona os botões de + e -
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

// Seleciona o campo onde a senha gerada será exibida
const campoSenha = document.querySelector('#campo-senha');

// Seleciona cada um dos checkboxes pelo ID do HTML
const checkboxLetrasMaiusculas = document.querySelector('#maiusculo');
const checkboxLetrasMinusculas = document.querySelector('#minusculo');
const checkboxNumeros = document.querySelector('#numero');
const checkboxSimbolos = document.querySelector('#simbolo');

// Seleciona todos os checkboxes juntos para monitorar os cliques neles
const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => checkbox.onclick = geraSenha);

// Definição dos grupos de caracteres possíveis
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Chama a função pela primeira vez para já exibir uma senha na tela ao carregar a página
geraSenha();

function geraSenha() {
    let alfabeto = '';

    // Verifica quais caixas estão marcadas (checked) e junta as opções no alfabeto
    if (checkboxLetrasMaiusculas.checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkboxLetrasMinusculas.checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkboxNumeros.checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkboxSimbolos.checked) {
        alfabeto = alfabeto + simbolos;
    }

    // Se o usuário desmarcar todos os checkboxes, avisa na tela e para a função
    if (alfabeto === '') {
        campoSenha.value = 'Selecione uma opção';
        return; 
    }

    let senha = '';
    // Sorteia os caracteres com base no tamanho escolhido e no alfabeto gerado
    for (let i = 0; i < tamanhosenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio); 
        senha = senha + alfabeto[numeroAleatorio];
    }
    
    // Coloca a senha final dentro do input do HTML
    campoSenha.value = senha;
}