const ran= Math.round(Math.random()*10);
//Criamos uma variavel chamada 'ran' e ela vai ser uma variavel que recebe um numero aleatorio de 0 à 10.
let res;
//res é a variavel resposta do usuario.
while(res !== ran){
 res=parseInt(prompt("Tente adivinhar um numero de 1 a 10"));
 //Res recebe resposta
    if(res==ran) {
        alert("Parabéns!Está correto!"+ random);
        //se res for igual ao ran, então exibe essa opção
    }else{
        alert("Está errado, tente novamente.");
        //enquanto res não for igual a ran, então ele exibe essa mensagem e repete o laço
    }
}
