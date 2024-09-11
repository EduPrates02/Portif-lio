var quadrado = parseFloat(prompt('Digite sua idade'));
//Variável criada, vamos trabalhar!
if(quadrado>= 0 && quadrado<=12){
    alert('Children');
    //Opção 1
}else if(quadrado>=13 && quadrado<=17){
    alert('Adolescent');
    //Opção 2
}else if(quadrado>=18 && quadrado<=64){
    alert('Adult');
    //Opção 3
}else if(quadrado>=65 && quadrado<=100){
    alert('Elderly');
    //Opção 4
}else{
    alert('Você não está vivo');
    //Nenhuma das anteriores
}; 
