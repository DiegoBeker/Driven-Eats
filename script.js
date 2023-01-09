let contadorPrato = 0;
let contadorBebida = 0;
let contadorSobremesa = 0;
let valorPrato = 0;
let valorBebida = 0;
let valorDoce = 0;
let nomePrato,nomeBebida,nomeDoce,aux,pedido;

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
            break;
        case '.bebidas':
            contadorBebida = 1;
            nomeBebida = nome.textContent;
            aux = valor.textContent.split(' ');
            valorBebida = Number(aux[1].replace(',','.'));
            break;
        case '.doces':
            contadorSobremesa = 1;
            nomeDoce = nome.textContent;
            aux = valor.textContent.split(' ');
            valorDoce = Number(aux[1].replace(',','.'));
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
    const janela = document.querySelector('.janela');
    janela.classList.remove('hide');
    janela.querySelector('.ver-prato p').innerHTML = nomePrato;
    janela.querySelector('.ver-prato span').innerHTML = valorPrato.toFixed(2).replace('.',',');
    janela.querySelector('.ver-bebida p').innerHTML = nomeBebida;
    janela.querySelector('.ver-bebida span').innerHTML = valorBebida.toFixed(2).replace('.',',');
    janela.querySelector('.ver-doce p').innerHTML = nomeDoce;
    janela.querySelector('.ver-doce span').innerHTML = valorDoce.toFixed(2).replace('.',',');
    let total = valorPrato + valorBebida + valorDoce;
    total = total.toFixed(2);
    janela.querySelector('.total span').innerHTML = total.replace('.',',');
    const nome = prompt('Nome');
    const endereco = prompt('Endereço')
    pedido = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeDoce}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`;
}

function enviarPedido(){
    let url = `https://wa.me/5519999999999?text=${encodeURIComponent(pedido)}`;
    window.open(url);
}

function cancelar(){
    const janela = document.querySelector('.janela');
    if(janela!==null)
        janela.classList.add('hide');
}