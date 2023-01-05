let contadorPrato = 0;
let contadorBebida = 0;
let contadorSobremesa = 0;

function selecionarProduto(secao,item){
    const secaoSelecionada = document.querySelector(secao);

    const produtoSelecionadoAnterior = secaoSelecionada.querySelector('.selecionado');
    

    if(produtoSelecionadoAnterior !== null){
        const iconeAnterior = produtoSelecionadoAnterior.querySelector('.icone');
        produtoSelecionadoAnterior.classList.remove('selecionado');
        iconeAnterior.classList.remove('check');
    }
    
    const produtoSelecionado = secaoSelecionada.querySelector(item);
    const icone = produtoSelecionado.querySelector('.icone');
    
    produtoSelecionado.classList.add('selecionado');
    icone.classList.add('check');

    switch(secao){
        case '.pratos':
            contadorPrato = 1;
            console.log(contadorPrato);
            break;
        case '.bebidas':
            contadorBebida = 1;
            console.log(contadorBebida);
            break;
        case '.doces':
            contadorSobremesa = 1;
            console.log(contadorSobremesa);
            break;
    }
    atualizarCarrinho();
}

function atualizarCarrinho(){
    if(contadorPrato===1 && contadorBebida===1 && contadorSobremesa===1){
        const botao = document.querySelector('.botao');
        const texto = botao.querySelector('p');
        botao.classList.add('liberado');
        botao.attributes.removeNamedItem('disabled');
        texto.innerHTML = "Fechar pedido";
    }
}