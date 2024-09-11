const A = [20,3,14,5,64];
//Criei uma variável com vetor cheio.
var b = [];
//Criei uma variável com vetor vazio.
var number = parseInt(prompt("Digite um número:"));
//Resposta do usuário.
for(var x = 0;x<=4;x++){
    //Laço de repetição
    if(A[x]>number){
        b[x]=A[x];
        //Se A na posição de vetor x for maior que number, então joga a posição de x no A na posição de x em b
    }
}

b.forEach((x)=>{
    alert(x);
});
//Aqui é um for resumido que repete o x o quanto for necessário.