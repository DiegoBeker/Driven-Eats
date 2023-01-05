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

}
