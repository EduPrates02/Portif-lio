alert("Domingo [1], Segunda [2], Terça [3], Quarta [4], Quinta [5], Sexta [6], Sábado [7]");
//Mensagem simples
var Carlos= prompt('Qual o dia da semana?');
//Variável criada

switch (Carlos) {
    case '1':
        alert('DOMINGO');
        break;
    case '2':
        alert('SEGUNDA');
        break;
    case '3':
        alert('TERÇA');
        break;
    case '4':
        alert('QUARTA');
        break;
    case '5':
        alert('QUINTA');
        break; 
    case '6':
        alert('SEXTA');
        break;
    case '7':
        alert('SÁBADO');
        break;
    default:
        alert('Erro');
        break;
} //Casos de escolha, basicamente, esse bloco logico simplesmente pega a resposta do usuario e compara com o que existe, então se for igual, ele executa o correspondente :).