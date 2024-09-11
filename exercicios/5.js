var a =Array();
//Aqui criei uma variavel e disse que eal é um vetor vazio.
var count;
//Aqui é uma variavel que ainda não faz nada.
var i = 0;
//Aqui é uma variavel que tem valor 0
while (count!==0){
    a.push(parseFloat(prompt('digite um numero')))
    count = parseInt(prompt('Deseja continuar? ([1] sim, [0] não'));
} //Esse bloco faz o seguinte, ele fica repetindo tudo que tem dentro dele por conta do while, e ele sempre vai adicionar +1 resposta do usuario no fim do vetor por conta do ".push" que desempenha essa função.
a.forEach((elemento)=>{
    i += elemento
    //o "element" representa um parametro do que a função ('()=>') deve fazer
}); //O forEach tem a função de criar uma function que executa uma opeperação pra cada coisa do Array
alert ("A soma é "+ i);
//Aqui exibe a soma