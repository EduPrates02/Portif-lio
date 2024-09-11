function encontrarMedia (num) {
 let soma = 0;
    for (let Cont = 0; Cont < num.length; Cont++) {
    soma += num[Cont];
    }
    return soma / num.length;
}
//Tudo isso é uma função, e a função faz a media dos numeros que o ususario escolhe. 
function calculo() {
    const quantidade = parseInt(prompt("Quantos números você deseja informar? "));
    const vet = [];

    for (let i = 0; i < quantidade; i++) {
        const numero = parseFloat(prompt("Digite um número: "));
        vet.push(numero);
    }

const media = encontrarMedia(vet);
alert('A média de todos os numeros é: '+ media);
}
calculo();

