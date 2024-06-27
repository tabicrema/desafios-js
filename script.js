// Boas vindas
document.getElementById('boas-vindas').innerText = 'Boas vindas';

// Mostrar saudação
function mostrarSaudacao() {
    let saudacao = 'Usuário(a)!';
    alert(`Olá, ${saudacao}!`);
    document.getElementById('saudacao').innerText = `Olá, ${saudacao}!`;
}

// Solicitar a linguagem de programação preferida
function solicitarLinguagemPreferida() {
    let linguagemPreferida = prompt('Qual é a linguagem de programação que você mais gosta?');
    if (linguagemPreferida) {
        console.log(linguagemPreferida);
        document.getElementById('linguagem-preferida').innerText = `Sua linguagem de programação preferida é: ${linguagemPreferida}`;
    } else {
        document.getElementById('linguagem-preferida').innerText = 'Você não respondeu a pergunta.';
    }
}

// Calcular a diferença entre dois valores
function calcularDiferenca() {
    let valor1 = 10;
    let valor2 = 8;
    let resultado = valor1 - valor2;
    console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
    document.getElementById('diferenca').innerText = `A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`;
}

// Verificar a idade do usuário
function verificarIdade() {
    let idade = prompt('Digite a sua idade:');
    if (idade > 17) {
        console.log('Você é maior de idade.');
        document.getElementById('idade').innerText = 'Você é maior de idade.';
    } else {
        console.log('Você é menor de idade.');
        document.getElementById('idade').innerText = 'Você é menor de idade.';
    }
}

// Verificar se o número é positivo, negativo ou zero
function verificarNumero() {
    let numeroUsuario = parseFloat(prompt("Digite um número:"));
    if (numeroUsuario > 0) {
        console.log("O número é positivo.");
        document.getElementById('numero').innerText = "O número é positivo.";
    } else if (numeroUsuario < 0) {
        console.log("O número é negativo.");
        document.getElementById('numero').innerText = "O número é negativo.";
    } else {
        console.log("O número é zero.");
        document.getElementById('numero').innerText = "O número é zero.";
    }
}

// Contagem de 1 a 10
function contarAteDez() {
    let contagem = "";
    for (let contador = 1; contador <= 10; contador++) {
        contagem += contador + " ";
    }
    console.log(contagem);
    document.getElementById('contagem').innerText = contagem;
}

// Verificar se a nota é suficiente para aprovação
function verificarNota() {
    let nota = 8; // Substitua pelo valor da nota que deseja testar
    if (nota >= 7) {
        console.log("Aprovado");
        document.getElementById('nota').innerText = "Aprovado";
    } else {
        console.log("Reprovado");
        document.getElementById('nota').innerText = "Reprovado";
    }
}

// Gerar e exibir um número aleatório entre 0 e 1
function gerarNumeroAleatorio() {
    let numeroAleatorio = Math.random();
    console.log(numeroAleatorio);
    document.getElementById('numero-aleatorio').innerText = numeroAleatorio;
}

// Gerar e exibir um número inteiro aleatório entre 1 e 10
function gerarNumeroInteiroAleatorio1() {
    let numeroInteiroAleatorio1 = parseInt(Math.random() * 10) + 1;
    console.log(numeroInteiroAleatorio1);
    document.getElementById('numero-inteiro-aleatorio1').innerText = numeroInteiroAleatorio1;
}

// Gerar e exibir um número inteiro aleatório entre 1 e 1000
function gerarNumeroInteiroAleatorio2() {
    let numeroInteiroAleatorio2 = parseInt(Math.random() * 1000) + 1;
    console.log(numeroInteiroAleatorio2);
    document.getElementById('numero-inteiro-aleatorio2').innerText = numeroInteiroAleatorio2;
}

