function media(){

    let nota1 = parseFloat(prompt("Nota1"));
    let nota2 = parseFloat(prompt("Nota2"));
    let nota3 = parseFloat(prompt("Nota3"));

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        alert("digite numero valido")
    }else{
        let resultado = (nota1 + nota2 + nota3)/3
        alert(`o resultado da média é ${resultado.toFixed(2)}`)
    }


}

function maior(){

    let numeros = [];
    numeros = prompt("coloca a lista de numero separados por ,");
    let sort = numeros.split(",");
    let max = Math.max(...sort);
    let min = Math.min(...sort);
    alert(`O maior numero da lista é ${max} e o menor é ${min}`)
    
}

function ordem(){
    let numeros = [];
    numeros = prompt("coloca a lista de numero separados por ,");
    let sorte = numeros.split(",");
    let resultado = sorte.sort((a, b) => a - b)
    alert(`o resultado dos numeros em ordem crescente é ${resultado}`);

}

function primo() {
    let numeros = prompt("Digite a lista de números separados por vírgula:");
    let primos = [];
    let naoPrimos = [];

    let lista = numeros.split(",").map(Number);

    for (let i = 0; i < lista.length; i++) {
        let num = lista[i];
        let isPrimo = true;

        if (num <= 1) {
            isPrimo = false;
        } else {
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrimo = false;
                    break;
                }
            }
        }

        if (isPrimo) {
            primos.push(num);
        } else {
            naoPrimos.push(num);
        }
    }

function palavras(){
    let texto = prompt("digite o texto separado por 1 de espaço");
    let palavras = texto.split(" ");
    alert(`a quantidade de palavras são: ${palavras.length}`)
}

function fatorial() {
    let numero = prompt("Digite o número para o fatorial");
    numero = parseInt(numero); 
    let resultado = 1;

    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }

    alert("O fatorial de " + numero + " é: " + resultado);
}

function preco(){
    let preco1 = parseFloat(prompt("digite o preço"))
    let preco2 = parseFloat(prompt("digite o preço"))
    let preco3 = parseFloat(prompt("digite o preço"))

    let soma = preco1 + preco2 + preco3;
    alert(`o valor das compras compra é: R$${soma}`)

}

function bli(){
    let atraso = parseInt(prompt("digite o numero de atraso"))
    let total = 0.50 * atraso;
    alert(`multa total é R$${total}`);
}
function game() {
    alert("Para atacar, aperte o botão do desafio.");
    let vida = 100;
    alert(`Sua vida: ${vida}`);

    
    for (let i = 0; i < 3; i++) {
        
        let ataque = Math.random() * 100;

      
        if (vida > 0) {
            if (ataque > 80) {
                alert("Ataque crítico!");
                vida -= ataque; 
            } else if (ataque > 20) {
                alert("Ataque normal.");
                vida -= ataque; 
            } else {
                alert("Ataque falhou!");
            }
        } else {
            alert("Você está sem vida! Game Over!");
            break; 
        }

    
        alert(`Sua vida restante: ${vida}`);
    }
}

function contaletra() {
    let frase = prompt("Digite a frase:");
    let maiuscula = 0;
    let minuscula = 0;

   
    for (let i = 0; i < frase.length; i++) {

        if (frase[i] >= "A" && frase[i] <= "Z") {
            maiuscula++;
        }
    
        else if (frase[i] >= "a" && frase[i] <= "z") {
            minuscula++;
        }
    }

  
    alert(`A quantidade de letras maiúsculas é: ${maiuscula} e minúsculas é: ${minuscula}`);
}

function idade() {
        let data = prompt("Digite sua data de nascimento no formato yyyy-MM-dd");
        let dados = data.split('-');
        
      
        let ano = parseInt(dados[0]);
        let mes = parseInt(dados[1]);
        let dia = parseInt(dados[2]);
    
        
        let dataAtual = new Date();

        let anoAtual = dataAtual.getFullYear();
        let mesAtual = dataAtual.getMonth() + 1;
        let diaAtual = dataAtual.getDate();
    
        
        let idade = anoAtual - ano;
    
       
        if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
            idade--;
        }
    
        alert("A idade da pessoa é: " + idade + " anos");
    }
    
  


