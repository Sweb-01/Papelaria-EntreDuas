// =========================
// PRODUTOS
// =========================

const produtos = [

    {
        id: 1,
        nome: "Chaveiro",
        descricao: "Chaveiro fofo",
        preco: 19.50,
        categoria: "acessorios",
        imagem: "img/produto1.jpg"
    },

    {
        id: 2,
        nome: "Caneta diversas Cores",
        descricao: "Caneta colorida com 6 cores",
        preco: 12.50,
        categoria: "canetas",
        imagem: "img/produto2.jpg"
    },

    {
        id: 3,
        nome: "kit de Lapiseiras lindas",
        descricao: "Conjunto de lapiseiras 0.5 mm",
        preco: 18.00,
        categoria: "lapiseiras",
        imagem: "img/produto3.jpg"
    },

    {
        id: 4,
        nome: "Caneta bic",
        descricao: "Caneta esferográfica preta",
        preco: 7.00,
        categoria: "canetas",
        imagem: "img/produto4.jpg"
    }

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