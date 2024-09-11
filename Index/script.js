document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona o botão pelo seu ID
    const botao = document.getElementById('burger');
    var div = document.getElementById('barra-topo');
    var flag = true;
    var div2 = document.getElementById("links");

    // Adiciona um evento de clique ao botão
    botao.addEventListener('click', () => {
        
        if (flag) {
            div.style.height = '160px';
            div.style.transition = 'height 1s'; /* Ajuste a transição para altura */
            div2.style.display = 'flex'; /* Alterado para flex */
            flag = false;
        } else {
            div.style.height = '100px';
            div.style.transition = 'height 1s'; /* Ajuste a transição para altura */
            flag = true;
            div2.style.display = 'none';
        }
        

        
    });
});