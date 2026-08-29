// =========================
// PRODUTOS
// =========================

const produtos = [

    {
        id: 1,
        nome: "Necessaire Bolsinha de Mão Amarela De tudo um pouco 14x20cm – Floriê",
        descricao: "Necessaire Bolsinha de Mão Amarela De tudo um pouco 14x20cm – Floriê",
        preco: 26.99,
        categoria: "acessorios",
        imagem: "img/bolsinha de mao amarela.jpeg"
    },

    {
        id: 2,
        nome: "Porta Coisinhas Rosa Cesta de Flores – Floriê",
        descricao: "Porta Coisinhas Rosa Cesta de Flores – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha rosa cesta de flores.jpeg"
    },

    {
        id: 3,
        nome: "Porta Coisinhas Pink Incrível – Floriê",
        descricao: "Porta Coisinhas Pink Incrível – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha pink.jpeg"
    },

    {
        id: 4,
        nome: "Porta Coisinhas Roxo Lindo – Floriê",
        descricao: "Porta Coisinhas Roxo Lindo – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha roxa.jpeg"
    },

    {
        id: 5,
        nome: "Porta Coisinhas Azul Coisinhas Felizes – Floriê",
        descricao: "Porta Coisinhas Azul Coisinhas Felizes – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha coisas felizes.jpeg"
    },

     {
        id: 6,
        nome: "Porta Coisinhas Bege Floresça – Floriê",
        descricao: "Porta Coisinhas Bege Floresça – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha floresça onde estiver.jpeg"
    },

      {
        id: 7,
        nome: "Porta Coisinhas Verde Flor Listras – Floriê",
        descricao: "Porta Coisinhas Verde Flor Listras – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha flor listras.jpeg"
    },

     {
        id: 8,
        nome: "Bolsinha de Mão Listrada Rosa Laço – Floriê",
        descricao: "Bolsinha de Mão Listrada Rosa Laço – Floriê",
        preco: 29.99,
        categoria: "acessorios",
        imagem: "img/bolsinha listrada rosa laço.jpeg"
    },

     {
        id: 9,
        nome: "Necessaire Telada Roxa Com Zíper – Floriê",
        descricao: "Necessaire Telada Roxa Com Zíper – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha lilas telada.jpeg"
    },

     {
        id: 10,
        nome: "Necessaire G Campestre Xadrez Bege Flores – Floriê",
        descricao: "Necessaire G Campestre Xadrez Bege Flores – Floriê",
        preco: 53.99,
        categoria: "acessorios",
        imagem: "img/Necessaire G Campestre Xadrez Bege Flores.jpeg"
    },

     {
        id: 11,
        nome: "Necessaire P Campestre Xadrez Bege Flores – Floriê",
        descricao: "Necessaire P Campestre Xadrez Bege Flores – Floriê",
        preco: 43.99,
        categoria: "acessorios",
        imagem: "img/Necessaire P Campestre Xadrez Bege Flores.jpeg"
    },

     {
        id: 12,
        nome: "Mini Bolsa Transversal Flor Pastel – Uniso (Uni.)",
        descricao: "Mini Bolsa Transversal Flor Pastel – Uniso",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Mini Bolsa Transversal Flor Pastel.jpeg"
    },

];


// =========================
// CARRINHO
// =========================

let carrinho = [];


// =========================
// MOSTRAR PRODUTOS
// =========================

function mostrarProdutos(lista = produtos) {

    const areaProdutos = document.getElementById("produtos");

    areaProdutos.innerHTML = "";


    lista.forEach(produto => {

        areaProdutos.innerHTML += `

            <div class="card">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <div class="card-conteudo">

                    <h3>
                        ${produto.nome}
                    </h3>

                    <p class="descricao">
                        ${produto.descricao}
                    </p>

                    <p class="preco">
                        R$ ${produto.preco.toFixed(2).replace(".", ",")}
                    </p>

                    <button
                        class="adicionar"
                        onclick="adicionarCarrinho(${produto.id})"
                    >
                        Adicionar
                    </button>

                </div>

            </div>

        `;

    });

}


// =========================
// ADICIONAR AO CARRINHO
// =========================

function adicionarCarrinho(id) {

    const produto = produtos.find(
        produto => produto.id === id
    );


    const produtoCarrinho = carrinho.find(
        item => item.id === id
    );


    if (produtoCarrinho) {

        produtoCarrinho.quantidade++;

    } else {

        carrinho.push({

            ...produto,

            quantidade: 1

        });

    }


    atualizarCarrinho();

}


// =========================
// ATUALIZAR CARRINHO
// =========================

function atualizarCarrinho() {

    const lista = document.getElementById("listaCarrinho");

    const contador = document.getElementById("contador");

    const totalElemento = document.getElementById("total");


    lista.innerHTML = "";


    if (carrinho.length === 0) {

        lista.innerHTML = `
            <p class="carrinho-vazio">
                Seu carrinho está vazio.
            </p>
        `;

    }


    let total = 0;

    let quantidadeTotal = 0;


    carrinho.forEach(item => {

        total += item.preco * item.quantidade;

        quantidadeTotal += item.quantidade;


        lista.innerHTML += `

            <div class="item-carrinho">

                <div>

                    <strong>
                        ${item.nome}
                    </strong>

                    <p>
                        R$ ${(item.preco * item.quantidade)
                            .toFixed(2)
                            .replace(".", ",")}
                    </p>

                </div>


                <div class="quantidade">

                    <button
                        onclick="diminuirQuantidade(${item.id})"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantidade}
                    </span>

                    <button
                        onclick="adicionarCarrinho(${item.id})"
                    >
                        +
                    </button>

                </div>

            </div>

        `;

    });


    contador.textContent = quantidadeTotal;


    totalElemento.textContent =
        `R$ ${total.toFixed(2).replace(".", ",")}`;

}


// =========================
// DIMINUIR QUANTIDADE
// =========================

function diminuirQuantidade(id) {

    const produto = carrinho.find(
        item => item.id === id
    );


    if (!produto) return;


    produto.quantidade--;


    if (produto.quantidade <= 0) {

        carrinho = carrinho.filter(
            item => item.id !== id
        );

    }


    atualizarCarrinho();

}


// =========================
// FILTRAR PRODUTOS
// =========================

function filtrarProdutos(categoria) {

    if (categoria === "todos") {

        mostrarProdutos();

        return;

    }


    const filtrados = produtos.filter(
        produto => produto.categoria === categoria
    );


    mostrarProdutos(filtrados);

}


// =========================
// ABRIR CARRINHO
// =========================

function abrirCarrinho() {

    document
        .getElementById("carrinho")
        .classList.add("aberto");


    document
        .getElementById("fundo")
        .classList.add("aberto");

}


// =========================
// FECHAR CARRINHO
// =========================

function fecharCarrinho() {

    document
        .getElementById("carrinho")
        .classList.remove("aberto");


    document
        .getElementById("fundo")
        .classList.remove("aberto");

}


// =========================
// FINALIZAR PEDIDO
// =========================

function finalizarPedido() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;

    }


    alert(
        "Aqui vamos colocar o WhatsApp da Entre Duas depois! 💗"
    );

}


// =========================
// INICIAR
// =========================

mostrarProdutos();
atualizarCarrinho();
