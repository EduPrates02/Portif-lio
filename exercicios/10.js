var a = Array();
var res ="y";
var count = 0;
while(res==="y") {
    let word = prompt('Digite uma palavra');
    a[count] = word;
    res = prompt("Você deseja continuar? y se sim.").toLowerCase();
    count++; 
} 
alert('Essas são suas palavras: '+a);
var pal = prompt('Qual palavra você deseja adicionar?');
adic();
function adic() {
    a.forEach((palavra)=>{
        if(palavra == pal){
            a[length-1] = pal;
        }
    });
} 

a.forEach((count)=>{
    let qtd = 0;
    if(count==pal){
        qtd++;
    }
});

alert(qtd);