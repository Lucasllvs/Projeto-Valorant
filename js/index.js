
// OBJETIVO 1 - passo 1 - pegar os botoes no JS para poder verificar quando o usuário clicar em cima de uma deles
const botoes = document.querySelectorAll(".botao");
//OBJETIVO 2 - passo 1 - pegar os personagens no JS pra pider mostar ou  esconder eles
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        //passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado")

        //passso 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");

        //OBJETIVO 2 - passo 3 - verificar se já existe um personagem selecioando, se sim, devemos remover a seleçao dele
        const personagemSelecionado = document.querySelector(".personagem.selecionado");

        personagemSelecionado.classList.remove("selecionado");
        
        
        // OBJETIVO 2 - passo 2 - adicionar a classe "selecioando" no personagem que o usuário selcionou
        personagens[indice].classList.add("selecionado");
    })  
});


