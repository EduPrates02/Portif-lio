let strange = Array();
//Criei uma variavel de array vazio
for (let index = 0; index < 5; index++) {
 strange[index] = prompt('Adicione um número');
} //Criei um laço de repetição para receber em até 5 vezes os numeros descritos pelo ususario.
strange.sort((menor,maior)=>{
    return menor-maior;
}); //A função aqui tem a segunte execução: Ela ordena as respostas no vetor em ordem crescente e depois ela retorna a menor menos a maior

alert('Este é o numero menor: '+strange[0]);
//Este código puxa a posição inicial do vetor pra exibir.
alert('Este é o numero maior: '+strange[4]);
//E este puxa a posição final do vetor para exibir.
