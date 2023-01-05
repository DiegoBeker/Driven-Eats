let contadorPrato = 0;
let contadorBebida = 0;
let contadorSobremesa = 0;
let valorPrato = 0;
let valorBebida = 0;
let valorDoce = 0;
let nomePrato,nomeBebida,nomeDoce,aux;

function selecionarProduto(secao,item){
    const secaoSelecionada = document.querySelector(secao);

    const produtoSelecionadoAnterior = secaoSelecionada.querySelector('.selecionado');
    

    if(produtoSelecionadoAnterior !== null){
        const iconeAnterior = produtoSelecionadoAnterior.querySelector('.icone');
        produtoSelecionadoAnterior.classList.remove('selecionado');
        iconeAnterior.classList.remove('check');
    }
    
    const produtoSelecionado = secaoSelecionada.querySelector(item);
    const nome = produtoSelecionado.querySelector('h4')
    const valor = produtoSelecionado.querySelector('span');
    const icone = produtoSelecionado.querySelector('.icone');
    
    produtoSelecionado.classList.add('selecionado');
    icone.classList.add('check');

    switch(secao){
        case '.pratos':
            contadorPrato = 1;
            nomePrato = nome.textContent;
            aux = valor.textContent.split(' ');
            valorPrato = Number(aux[1].replace(',','.'));
            console.log(valorPrato);
            break;
        case '.bebidas':
            contadorBebida = 1;
            nomeBebida = nome.textContent;
            aux = valor.textContent.split(' ');
            valorBebida = Number(aux[1].replace(',','.'));
            console.log(valorBebida);
            break;
        case '.doces':
            contadorSobremesa = 1;
            nomeDoce = nome.textContent;
            aux = valor.textContent.split(' ');
            valorDoce = Number(aux[1].replace(',','.'));
            console.log(valorDoce);
            break;
    }
    atualizarCarrinho();
}

function atualizarCarrinho(){
    if(contadorPrato===1 && contadorBebida===1 && contadorSobremesa===1){
        const botao = document.querySelector('.botao');
        const texto = botao.querySelector('p');
        botao.classList.add('liberado');
        if(botao.attributes.getNamedItem('disabled'))
            botao.attributes.removeNamedItem('disabled');
        texto.innerHTML = "Fechar pedido";
    }
}

function fecharPedido(){
    let total = valorPrato + valorBebida + valorDoce;
    let pedido = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeDoce}\nTotal: ${total.toFixed(2)}`;
    let url = `https://wa.me/5535997462569?text=${encodeURIComponent(pedido)}`;
    window.open(url);
}