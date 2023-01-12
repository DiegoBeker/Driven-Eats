<header style="display:flex;margin-bottom:20px;">
    <img alt="🍔" aria-label="🍔" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f354.svg" style="width: 50px;margin:10px;">
    <h1 style="margin: auto 0px;">Projeto3-driveneats</h1>
</header>

<main>
    <h2>Descrição</h2>
        <ul>
            <li>Seu projeto usando JavaScript será a implementação do site (apenas a versão mobile) do DrivenEats, um restaurante especial que entrega seu pedido em 6 minutos!</li>
            <li>Para isso, o restaurante só trabalha com um tipo específico de pedido: o combo de Prato + Bebida + Sobremesa.</li>
            <li>O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante.</li>
        </ul>
    <h2>Requisitos</h2>
        <ul>
            <li>Versionamento do código
                <ol>
                    <li>Versionamento usando Git é obrigatório, crie um repositório público no seu perfil do GitHub.</li>
                    <li>Faça commits a cada funcionalidade implementada.</li>
                </ol>
            </li>
            <li>Layout
                <ol>
                    <li>Aplicar layout para mobile, seguindo o Figma fornecido (não é necessário implementar um layout para desktop).</li>
                    <li>O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem.</li>
                    <li>Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria.</li>
                    <li>As fontes utilizadas são: Righteous (nome do restaurante e títulos das categorias) e Roboto (demais textos).</li>
                    <li>Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do layout.</li>
                    <li>Para fazer os produtos rolarem horizontalmente, utilize overflow-x: scroll. No modo desktop um scroll é exibido, mas no modo celular não.</li>
                </ol>
            </li>
            <li>Seleção de itens
                <ol>
                    <li>Ao clicar sobre um item, ele deve ser marcado como selecionado.</li>
                    <li>Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado.</li>
                    <li>Ao clicar em um item já marcado, não é necessário desmarcá-lo.</li>
                </ol>
            </li>
            <li>Botão de finalizar pedido
                <ol>
                    <li>-Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.<br>
                    - Além de alterar o estilo, use o atributo **disabled** no HTML da tag button.</li>
                    <li>Quando o usuário tiver selecionado os itens das três categorias, o botão deve mudar para o estado de habilitado.</li>
                </ol>
            </li>
            <li>Envio do pedido
                <ol>
                    <li>
                    Ao finalizar o pedido, o usuário deverá ser encaminhado para o WhatsApp Web, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida.</li>
                    <li>Essa mensagem deverá seguir este formato, o padrão abaixo:<br><br> 
                    Olá, gostaria de fazer o pedido:<br>
                    - Prato: Frango Yin Yang<br>
                    - Bebida: Coquinha Gelada<br>
                    - Sobremesa: Pudim<br>
                    Total: R$ 27,70
                    </li>
                </ol>
            </li>
        </ul>
        <h2>Bônus</h2>
        <ul>
            <li>Peça o nome e endereço
                <ol>
                    <li>Ao clicar em "Fechar pedido", lance dois prompt para o usuário solicitando seu nome e endereço. Essas informações devem então serem adicionadas na mensagem final que é enviada por WhatsApp nesse formato (igualzinho, sem nenhum caractere a mais):<br><br>
                    Olá, gostaria de fazer o pedido:<br>
                    - Prato: Frango Yin Yang<br>
                    - Bebida: Coquinha Gelada<br>
                    - Sobremesa: Pudim<br>
                    Total: R$ 27,70<br><br>
                    Nome: Fulano<br>
                    Endereço: Rua...
                    </li>
                </ol>
            </li>
            <li>Confirme os dados antes de finalizar o pedido
                <ol>
                    <li>Ao clicar em "Fechar pedido", em vez de ir para o WhatsApp direto, primeiro revise a compra seguindo a tela bônus.</li>
                </ol>
            </li>
        </ul>
    <h3>Autor</h3>

Diego Beker

[![Linkedin Badge](https://img.shields.io/badge/-Diego-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/diego-beker/)](https://www.linkedin.com/in/diego-beker/)
[![Gmail Badge](https://img.shields.io/badge/-diegobecker99@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:diegobecker99@gmail.com)](mailto:diegobecker99@gmail.com)    
</main>




