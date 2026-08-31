// =========================
// PRODUTOS
// =========================

const produtos = [


     {
        id: 1,
        nome: "Kit Presilhas e Lacinhos Para Cabelo Clean Girl 8 Peças",
        descricao: "Kit Presilhas e Lacinhos Para Cabelo Clean Girl 8 Peças",
        preco: 9.99,
        categoria: "acessorios",
        imagem: "img/Kit Presilhas e Lacinhos Para Cabelo Clean Girl 8 Peças.jpeg"
    },

     {
        id: 2,
        nome: "Kit Mini Piranhas Cereja 6 Peças – Uniso",
        descricao: "Kit Mini Piranhas Cereja 6 Peças – Uniso",
        preco: 9.99,
        categoria: "acessorios",
        imagem: "img/Kit Mini Piranhas Cereja 6 Peças.jpeg"
    },

     {
        id: 3,
        nome: "Corrente Para Celular Cereja – Uniso",
        descricao: "Corrente Para Celular Cereja – Uniso",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/Corrente Para Celular Cereja.jpeg"
    },

     {
        id: 4,
        nome: "Trio de Brinco Folheado a Ouro 18k e Prata Gota Cristal - Ouro",
        descricao: "Trio de Brinco Folheado a Ouro 18k e Prata Gota Cristal - Ouro",
        preco: 24.99,
        categoria: "acessorios",
        imagem: "img/Trio de Brinco Folheado a Ouro 18k e Prata Gota Cristal.jpeg"
    },

     {
        id: 5,
        nome: "Kit Brinco Folheado a Ouro 18k e Prata Pérola, Coração- Prata",
        descricao: "Kit Brinco Folheado a Ouro 18k e Prata Pérola, Coração- Prata",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Kit Brinco Folheado a Ouro 18k e Prata Pérola, Coração.jpeg"
    },

     {
        id: 6,
        nome: "Brinco Folheado a Ouro 18k e Prata Fé-Prata",
        descricao: "Brinco Folheado a Ouro 18k e Prata Fé-Prata",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Brinco Folheado a Ouro 18k e Prata Fé.jpeg"
    },

     {
        id: 7,
        nome: "Kit Brinco Folheado a Ouro 18k Esfera, Cruz - Ouro",
        descricao: "Kit Brinco Folheado a Ouro 18k Esfera, Cruz - Ouro",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Kit Brinco Folheado a Ouro 18k Esfera, Cruz.jpeg"
    },

     {
        id: 8,
        nome: "Brinco Folheado a Ouro 18k Círculo Texturizado-Ouro",
        descricao: "Brinco Folheado a Ouro 18k Círculo Texturizado-Ouro",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Brinco Folheado a Ouro 18k Círculo Texturizado.jpeg"
    },

     {
        id: 9,
        nome: "Trio de Brinco Folheado a Ouro 18k Esferas Com Gota Cristal, e Cruz Cravejado- Ouro",
        descricao: "Trio de Brinco Folheado a Ouro 18k Esferas Com Gota Cristal, e Cruz Cravejado- Ouro",
        preco: 24.99,
        categoria: "acessorios",
        imagem: "img/Trio de Brinco Folheado a Ouro 18k Esferas Com Gota Cristal, e Cruz Cravejado.jpeg"
    },


     {
        id: 10,
        nome: "Kit Brinco Folheado a Ouro 18k e Prata Coração Cristal, Esfera - Ouro",
        descricao: "Kit Brinco Folheado a Ouro 18k e Prata Coração Cristal, Esfera - Ouro",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Kit Brinco Folheado a Ouro 18k e Prata Coração Cristal, Esfera.jpeg"
    },

     {
        id: 11,
        nome: "Brinco Folheado a Ouro 18k e Prata Árvore da Vida-Ouro",
        descricao: "Brinco Folheado a Ouro 18k e Prata Árvore da Vida-Ouro",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Brinco Folheado a Ouro 18k e Prata Árvore da Vida.jpeg"
    },

     {
        id: 12,
        nome: "Conjunto Colar e Brinco Folheado a Ouro 18k Ponto de Luz",
        descricao: "Conjunto Colar e Brinco Folheado a Ouro 18k Ponto de Luz",
        preco: 29.90,
        categoria: "acessorios",
        imagem: "img/Conjunto Colar e Brinco Folheado a Ouro 18k Ponto de Luz.jpeg"
    },

     {
        id: 13,
        nome: "Conjunto Colar e Brinco Folheado a Prata 925 Pérola Flor",
        descricao: "Conjunto Colar e Brinco Folheado a Prata 925 Pérola Flor",
        preco: 29.99,
        categoria: "acessorios",
        imagem: "img/Conjunto Colar e Brinco Folheado a Prata 925 Pérola Flor.jpeg"
    },

     {
        id: 14,
        nome: "Pulseira Folheada a Prata 925 Pingente Espírito Santo",
        descricao: "Pulseira Folheada a Prata 925 Pingente Espírito Santo",
        preco: 24.99,
        categoria: "acessorios",
        imagem: "img/Pulseira Folheada a Prata 925 Pingente Espírito Santo.jpeg"
    },

     {
        id: 15,
        nome: "Pulseira Folheada a Prata 925 Pingente Cruz Com Zircônia",
        descricao: "Pulseira Folheada a Prata 925 Pingente Cruz Com Zircônia",
        preco: 11,
        categoria: "acessorios",
        imagem: "img/Pulseira Folheada a Prata 925 Pingente Cruz Com Zircônia.jpeg"
    },


    {
        id: 16,
        nome: "Necessaire Bolsinha de Mão Amarela De tudo um pouco 14x20cm – Floriê",
        descricao: "Necessaire Bolsinha de Mão Amarela De tudo um pouco 14x20cm – Floriê",
        preco: 26.99,
        categoria: "acessorios",
        imagem: "img/bolsinha de mao amarela.jpeg"
    },

    {
        id: 17,
        nome: "Porta Coisinhas Rosa Cesta de Flores – Floriê",
        descricao: "Porta Coisinhas Rosa Cesta de Flores – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha rosa cesta de flores.jpeg"
    },

    {
        id: 18,
        nome: "Porta Coisinhas Pink Incrível – Floriê",
        descricao: "Porta Coisinhas Pink Incrível – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha pink.jpeg"
    },

    {
        id: 19,
        nome: "Porta Coisinhas Roxo Lindo – Floriê",
        descricao: "Porta Coisinhas Roxo Lindo – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha roxa.jpeg"
    },

    {
        id: 20,
        nome: "Porta Coisinhas Azul Coisinhas Felizes – Floriê",
        descricao: "Porta Coisinhas Azul Coisinhas Felizes – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha coisas felizes.jpeg"
    },

     {
        id: 21,
        nome: "Porta Coisinhas Bege Floresça – Floriê",
        descricao: "Porta Coisinhas Bege Floresça – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha floresça onde estiver.jpeg"
    },

      {
        id: 22,
        nome: "Porta Coisinhas Verde Flor Listras – Floriê",
        descricao: "Porta Coisinhas Verde Flor Listras – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha flor listras.jpeg"
    },

     {
        id: 23,
        nome: "Bolsinha de Mão Listrada Rosa Laço – Floriê",
        descricao: "Bolsinha de Mão Listrada Rosa Laço – Floriê",
        preco: 29.99,
        categoria: "acessorios",
        imagem: "img/bolsinha listrada rosa laço.jpeg"
    },

     {
        id: 24,
        nome: "Necessaire Telada Roxa Com Zíper – Floriê",
        descricao: "Necessaire Telada Roxa Com Zíper – Floriê",
        preco: 19.99,
        categoria: "acessorios",
        imagem: "img/bolsinha lilas telada.jpeg"
    },

     {
        id: 25,
        nome: "Necessaire G Campestre Xadrez Bege Flores – Floriê",
        descricao: "Necessaire G Campestre Xadrez Bege Flores – Floriê",
        preco: 53.99,
        categoria: "acessorios",
        imagem: "img/Necessaire G Campestre Xadrez Bege Flores.jpeg"
    },

     {
        id: 26,
        nome: "Necessaire P Campestre Xadrez Bege Flores – Floriê",
        descricao: "Necessaire P Campestre Xadrez Bege Flores – Floriê",
        preco: 43.99,
        categoria: "acessorios",
        imagem: "img/Necessaire P Campestre Xadrez Bege Flores.jpeg"
    },

     {
        id: 27,
        nome: "Mini Bolsa Transversal Flor Pastel – Uniso (Und.)",
        descricao: "Mini Bolsa Transversal Flor Pastel – Uniso (Und)",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Mini Bolsa Transversal Flor Pastel.jpeg"
    },

    {
        id: 28,
        nome: "Porta Moeda Retangular Flores Xadrez Hello – Uniso",
        descricao: "Porta Moeda Retangular Flores Xadrez Hello – Uniso",
        preco: 11.90,
        categoria: "acessorios",
        imagem: "img/Porta Moeda Retangular Flores Xadrez Hello.jpeg"
    },

    {
        id: 29,
        nome: "Caneta Esferográfica Luxo Pop Litras – Floriê (Und.)",
        descricao: "Caneta Esferográfica Luxo Pop Litras – Floriê (Und)",
        preco:  14.99,
        categoria: "escrita",
        imagem: "img/Caneta Esferográfica Luxo Pop Litras.jpeg"
    },

    {
        id: 30,
        nome: "Canetas Fofas em Gel",
        descricao: "Canetas Fofas em Gel",
        preco: 4.99,
        categoria: "escrita",
        imagem: "img/Canetas Fofas em Gel.jpeg"
    },

    {
        id: 31,
        nome: "Marca-Texto Masterprint com Cores, Neon e Tons Pastel, de Ponta Chanfrada (Und)",
        descricao: "Marca-Texto Masterprint com Cores, Neon e Tons Pastel, de Ponta Chanfrada (Und)",
        preco: 4.99,
        categoria: "escrita",
        imagem: "img/Marca-Texto Masterprint com Cores, Neon e Tons Pastel, de Ponta Chanfrada.jpeg"
    },

    {
        id: 32,
        nome: "Caneta Esferográfica Two Go 0.7mm – BRW (Und)",
        descricao: "Caneta Esferográfica Two Go 0.7mm – BRW (Und)",
        preco: 3.99,
        categoria: "escrita",
        imagem: "img/Caneta Esferográfica Two Go 0.7mm.jpeg"
    },

    {
        id: 33,
        nome: "Marca-Texto Gel Patinha Troca Ponta",
        descricao: "Marca-Texto Gel Patinha Troca Ponta",
        preco: 14.99,
        categoria: "escrita",
        imagem: "img/Marca-Texto Gel Patinha Troca Ponta.jpeg"
    },

    {
        id: 34,
        nome: "Caneta Esferográfica Love My Cherry 1.0mm – moLin",
        descricao: "Caneta Esferográfica Love My Cherry 1.0mm – moLin",
        preco: 7.99,
        categoria: "escrita",
        imagem: "img/Caneta Esferográfica Love My Cherry 1.0mm.jpeg"
    },

    {
        id: 35,
        nome: "Kit Lapis Hb Fini 2 Lapis/Apontador/Borracha Blister – Leonora",
        descricao: "Kit Lapis Hb Fini 2 Lapis/Apontador/Borracha Blister – Leonora",
        preco: 14.99,
        categoria: "escrita",
        imagem: "img/Kit Lapis Hb Fini 2 Lapis.jpeg"
    },

    {
        id: 36,
        nome: "Hidrocor De Encaixe 6 Cores Sonic – LeoeLeo",
        descricao: "Hidrocor De Encaixe 6 Cores Sonic – LeoeLeo",
        preco: 19.90,
        categoria: "escrita",
        imagem: "img/Hidrocor De Encaixe 6 Cores Sonic.jpeg"
    },

    {
        id: 37,
        nome: "Kit Lápis Fundo Do Mar Estrela 2 Lápis HB/Apontador/Borracha LeoeLeo",
        descricao: "Kit Lápis Fundo Do Mar Estrela 2 Lápis HB/Apontador/Borracha LeoeLeo",
        preco: 14.99,
        categoria: "escrita",
        imagem: "img/Kit Lápis Fundo Do Mar Estrela 2 Lápis HB.jpeg"
    },

    {
        id: 38,
        nome: "Lapiseira Metallic 2.0 Jocar Office",
        descricao: "Lapiseira Metallic 2.0 Jocar Office",
        preco: 12.90,
        categoria: "escrita",
        imagem: "img/Lapiseira Metallic 2.0 Jocar Offic.jpeg"
    },

     {
        id: 39,
        nome: "Lapiseira Classic Triangular 0.7mm Jocar Office Leonora",
        descricao: "Lapiseira Classic Triangular 0.7mm Jocar Office Leonora",
        preco: 12.99,
        categoria: "escrita",
        imagem: "img/Lapiseira Classic Triangular 0.7mm Jocar Office.jpeg"
    },

     {
        id: 40,
        nome: "Kit Lápis Player 2 Lápis Hb/Apontador/Borracha LeoeLeo",
        descricao: "Kit Lápis Player 2 Lápis Hb/Apontador/Borracha LeoeLeo",
        preco: 14.99,
        categoria: "escrita",
        imagem: "img/Kit Lápis Player 2 Lápis Hb.jpeg"
    },

    {
        id: 41,
        nome: "Caneta Marca Texto Dashligth Amarelo Fluorescente",
        descricao: "Caneta Marca Texto Dashligth Amarelo Fluorescente",
        preco: 2.99,
        categoria: "escrita",
        imagem: "img/Caneta Marca Texto Dashligth Amarelo Fluorescente.jpeg"
    },

    {
        id: 42,
        nome: "CIS Petra Slim Caneta Esferográfica Retrátil - 0.7mm - Corpo Decorado - Escrita Suave - Azul, Preta, Vermelha, Rosa e Violeta (Und)",
        descricao: "CIS Petra Slim Caneta Esferográfica Retrátil - 0.7mm - Corpo Decorado - Escrita Suave - Azul, Preta, Vermelha, Rosa e Violeta (Und)",
        preco: 4.99,
        categoria: "escrita",
        imagem: "img/CIS Petra Slim Caneta Esferográfica Retrátil.jpeg"
    },

    {
        id: 43,
        nome: "CIS TIK Squeeze Caneta Esferografica - 0.7 mm - cores Sortidas (Und)",
        descricao: "CIS TIK Squeeze Caneta Esferografica - 0.7 mm - cores Sortidas (Und)",
        preco: 3.99,
        categoria: "escrita",
        imagem: "img/CIS TIK Squeeze Caneta Esferografica.jpeg"
    },

    {
        id: 44,
        nome: "Marca-Texto Apagável Lumini Ex CiS (Und)",
        descricao: "Marca-Texto Apagável Lumini Ex CiS (Und)",
        preco: 9.99,
        categoria: "escrita",
        imagem: "img/Marca-Texto Apagável.jpeg"
    },

    {
        id: 45,
        nome: "Caderno Espiral Pequeno Cesto de Flores – Floriê",
        descricao: "Caderno Espiral Pequeno Cesto de Flores – Floriê",
        preco: 27.99,
        categoria: "cadernos",
        imagem: "img/Caderno Espiral Pequeno Cesto de Flores.jpeg"
    },

    {
        id: 46,
        nome: "Caderno Espiral Pequeno Tulipa Rosa – Floriê",
        descricao: "Caderno Espiral Pequeno Tulipa Rosa – Floriê",
        preco: 27.99,
        categoria: "cadernos",
        imagem: "img/Caderno Espiral Pequeno Tulipa Rosa.jpeg"
    },

    {
        id: 47,
        nome: "Caderno Espiral Pequeno Flor Branca – Floriê",
        descricao: "Caderno Espiral Pequeno Flor Branca – Floriê",
        preco: 27.99,
        categoria: "cadernos",
        imagem: "img/Caderno Espiral Pequeno Flor Branca.jpeg"
    },

    {
        id: 48,
        nome: "Planner 2027 Grampeado West Village 178x254mm – Tilibra (Und)",
        descricao: "Planner 2027 Grampeado West Village 178x254mm – Tilibra (Und)",
        preco: 29.90,
        categoria: "cadernos",
        imagem: "img/Planner 2027 Grampeado West Village 178x254mm.jpeg"
    },

    {
        id: 49,
        nome: "Mini Caderneta Grampeada Soho Stay Lovely 90x130mm 32 Folhas – Tilibra (Und)",
        descricao: "Mini Caderneta Grampeada Soho Stay Lovely 90x130mm 32 Folhas – Tilibra (Und)",
        preco: 12.99,
        categoria: "cadernos",
        imagem: "img/Mini Caderneta Grampeada Soho Stay Lovely 90x130mm 32 Folhas.jpeg"
    },

    {
        id: 50,
        nome: "Caderneta A6 Smile Amarela com 80 folhas pautadas",
        descricao: "Caderneta A6 Smile Amarela com 80 folhas pautadas",
        preco: 9.99,
        categoria: "cadernos",
        imagem: "img/Caderneta A6 Smile Amarela com 80 folhas pautadas.jpeg"
    },

      {
        id: 51,
        nome: "Caderneta A6 flexível Smile Lilás com 80 folhas pautadas",
        descricao: "Caderneta A6 flexível Smile Lilás com 80 folhas pautadas",
        preco: 9.99,
        categoria: "cadernos",
        imagem: "img/Caderneta A6 flexível Smile Lilás com 80 folhas pautada.jpeg"
    },

    {
        id: 52,
        nome: "Livro 365 Atividades Para Meninas | Educativo, Criativo e Divertido",
        descricao: "Livro 365 Atividades Para Meninas | Educativo, Criativo e Divertido",
        preco:  29.99,
        categoria: "livros",
        imagem: "img/Livro 365 Atividades Para Meninas Educativo, Criativo e Divertido.jpeg"
    },

    {
        id: 53,
        nome: "Devocional Pão Diário - Feminino",
        descricao: "Devocional Pão Diário - Feminino",
        preco: 14.99,
        categoria: "livros",
        imagem: "img/Devocional Pão Diário - Feminino.jpeg"
    },

    {
        id: 54,
        nome: "Café Com Deus Pai Teens de Junior Rostirola Editorial Vida",
        descricao: "Café Com Deus Pai Teens de Junior Rostirola Editorial Vida",
        preco: 34.99,
        categoria: "livros",
        imagem: "img/Café Com Deus Pais Teens.jpeg"
    },

    {
        id: 55,
        nome: "Café Com Deus Pai Kids Editora Vida",
        descricao: "Café Com Deus Pai Kids Editora Vida",
        preco: 26.99,
        categoria: "livros",
        imagem: "img/Café Com Deus Pai Kids.jpeg"
    },

    {
        id: 56,
        nome: "Como Orar Por Seus Filhos",
        descricao: "Como Orar Por Seus Filhos",
        preco: 19.99,
        categoria: "livros",
        imagem: "img/Como Orar Por Seus Filhos.jpeg"
    },

    {
        id: 57,
        nome: "Livro Infantil 365 Historias Biblicas Para Colorir Desenhos",
        descricao: "Livro Infantil 365 Historias Biblicas Para Colorir Desenhos",
        preco: 29.99,
        categoria: "livros",
        imagem: "img/Livro Infantil 365 Historias Biblicas Para Colorir Desenhos.jpeg"
    },

    {
        id: 58,
        nome: "Livro 365 Histórias Bíblicas Para Colorir Infantil Crianças",
        descricao: "Livro 365 Histórias Bíblicas Para Colorir Infantil Crianças",
        preco: 29.99,
        categoria: "livros",
        imagem: "img/Livro 365 Histórias Bíblicas Para Colorir Infantil Crianças.jpeg"
    },

    {
        id: 59,
        nome: "Kit Livro Bloco de anotações -Bíblia Sagrada Flor/ letra Normal / capa dura/NVI",
        descricao: "Kit Livro Bloco de anotações -Bíblia Sagrada Flor/ letra Normal / capa dura/NVI",
        preco: 44.99,
        categoria: "livros",
        imagem: "img/Kit Livro Bloco de anotações -Bíblia Sagrada Flor letra Normal capa dura NVI.jpeg"
    },

    {
        id: 60,
        nome: "Estojo Mini Marca-Texto Picolé com 6 LeoeLeo",
        descricao:"Estojo Mini Marca-Texto Picolé com 6 LeoeLeo",
        preco: 14.99,
        categoria: "escrita",
        imagem: "img/Estojo Mini Marca-Texto Picolé com 6.jpeg"
    },

     {
        id: 61,
        nome: "Caneta em gel unicórnio (Und)",
        descricao:"Caneta em gel unicórnio (Und)",
        preco: 11.99,
        categoria: "escrita",
        imagem: "img/Caneta em gel unicórnio.jpeg"
    },

    {
        id: 62,
        nome: "Kit Escolar Stitch",
        descricao:"Kit Escolar Stitch",
        preco: 21.90,
        categoria: "escrita",
        imagem: "img/Kit Escolar Stitch.jpeg"
    },

    {
        id: 63,
        nome: "Borracha Pet Formas LeoeLeo – Leonora (Und)",
        descricao:"Borracha Pet Formas LeoeLeo – Leonora (Und)",
        preco: 2.50,
        categoria: "escrita",
        imagem: "img/Borracha Pet Formas LeoeLeo.jpeg"
    },

    {
        id: 64,
        nome: "Lápis de Cor Resina Garden Flores 12 Cores (topo em formato de flor - fácil de apontar) – Tilibra",
        descricao:"Lápis de Cor Resina Garden Flores 12 Cores – Tilibra",
        preco: 32,
        categoria: "arte",
        imagem: "img/Lápis de Cor Resina Garden Flores 12 Cores.jpeg"
    },

     {
        id: 65,
        nome: "Lapis Cor Bazze Wave Sextavado Reciclado 12 Cores",
        descricao:"Lapis Cor Bazze Wave Sextavado Reciclado 12 Cores",
        preco: 4.99,
        categoria: "arte",
        imagem: "img/Lapis Cor Bazze Wave Sextavado Reciclado 12 Cores.jpeg"
    },

     {
        id: 66,
        nome: "Lápis de Cor Madeira Naturalis 12 Cores – Tilibra",
        descricao:"Lápis de Cor Madeira Naturalis 12 Cores – Tilibra",
        preco: 29.90,
        categoria: "arte",
        imagem: "img/Lápis de Cor Madeira Naturalis 12 Cores.jpeg"
    },

     {
        id: 67,
        nome: "Cartela de Tatuagem Stitch",
        descricao:"Cartela de Tatuagem Stitch",
        preco: 9.90,
        categoria: "arte",
        imagem: "img/Cartela de Tatuagem Stitch.jpeg"
    },

     {
        id: 68,
        nome: "Card Surpresa para Colorir Bobbie Goods c/4 desenhos",
        descricao:"Card Surpresa para Colorir Bobbie Goods c/4 desenhos",
        preco: 3.99,
        categoria: "arte",
        imagem: "img/Card Surpresa para Colorir Bobbie Goods c/4 desenhos.jpeg"
    },

     {
        id: 69,
        nome: "Blister Carimbo Stamp Candy 4 und CiS",
        descricao:"Blister Carimbo Stamp Candy 4 und CiS",
        preco: 19.99,
        categoria: "arte",
        imagem: "img/Blister Carimbo Stamp Candy 4 und CiS.jpeg"
    },

     {
        id: 70,
        nome: "Blister Kit Massa De Modelar Galáxia LeoeLeo",
        descricao:"Blister Kit Massa De Modelar Galáxia LeoeLeo",
        preco: 14.99,
        categoria: "arte",
        imagem: "img/Blister Kit Massa De Modelar Galáxia.jpeg"
    },

     {
        id: 71,
        nome: "Kit Massa De Modelar Foguete Galáxia LeoeLeo",
        descricao:"Kit Massa De Modelar Foguete Galáxia LeoeLeo",
        preco: 9.90,
        categoria: "arte",
        imagem: "img/Kit Massa De Modelar Foguete Galáxia.jpeg"
    },

     {
        id: 72,
        nome: "Cola Bastão Ursinhos Carinhosos 15g – Lyke",
        descricao:"Cola Bastão Ursinhos Carinhosos 15g – Lyke",
        preco: 12.99,
        categoria: "arte",
        imagem: "img/Cola Bastão Ursinhos Carinhosos 15g.jpeg"
    },

     {
        id: 73,
        nome: "Cola Bastão Stick Slim Tris",
        descricao:"Cola Bastão Stick Slim Tris",
        preco: 8.90,
        categoria: "arte",
        imagem: "img/Cola Bastão Stick Slim Tris.jpeg"
    },

     {
        id: 74,
        nome: "Tilibra - Tesoura Escolar 131mm Panda",
        descricao:"Tilibra - Tesoura Escolar 131mm Panda",
        preco: 11.90,
        categoria: "arte",
        imagem: "img/Tilibra - Tesoura Escolar 131mm Panda.jpeg"
    },

     {
        id: 75,
        nome: "Tilibra - Adesivo Decorado Duplo G Princesas",
        descricao:"Tilibra - Adesivo Decorado Duplo G Princesas",
        preco: 8.99,
        categoria: "arte",
        imagem: "img/Tilibra - Adesivo Decorado Duplo G Princesas.jpeg"
    },

     {
        id: 76,
        nome: "Pasta Zip Bag Multiuso Laço 22×13 B6 – Uniso (Und)",
        descricao:"Pasta Zip Bag Multiuso Laço 22×13 B6 – Uniso (Und)",
        preco: 9.90,
        categoria: "acessorios",
        imagem: "img/Pasta Zip Bag Multiuso Laço 22×13 B6.jpeg"
    },

    {
        id: 77,
        nome: "Pasta Malote Butterfly Com Botão A4 – DAC",
        descricao: "Pasta Malote Butterfly Com Botão A4 – DAC",
        preco: 11.99,
        categoria: "acessorios",
        imagem: "img/Pasta Malote Butterfly Com Botão A4.jpeg"
    },

    {
        id: 78,
        nome: "Pasta Zip Documento Laços A4 – Floriê",
        descricao: "Pasta Zip Documento Laços A4 – Floriê",
        preco: 14.99,
        categoria: "acessorios",
        imagem: "img/Pasta Zip Documento Laços A4.jpeg"
    },

    {
        id: 79,
        nome: "Marcador de página CristãoTipo clipPeixe símbolo da Fé (Und)",
        descricao: "Marcador de página CristãoTipo clipPeixe símbolo da Fé (Und)",
        preco: 1.99,
        categoria: "diversos",
        imagem: "img/Marcador de página Cristão Tipo clip Peixe símbolo da Fé.jpeg"
    },

    {
        id: 80,
        nome: "Marcador de Página Magnético Doce Amiguinhos 4 Peças – Uniso",
        descricao: "Marcador de Página Magnético Doce Amiguinhos 4 Peças – Uniso",
        preco: 9.90,
        categoria: "diversos",
        imagem: "img/Marcador de Página Magnético Doce Amiguinhos 4 Peças.jpeg"
    },

    {
        id: 81,
        nome: "Marcador de Página Magnético Gatinho Fofo – Uniso",
        descricao: "Marcador de Página Magnético Gatinho Fofo – Uniso",
        preco: 9.90,
        categoria: "diversos",
        imagem: "img/Marcador de Página Magnético Gatinho Fofo.jpeg"
    },

     {
        id: 82,
        nome: "Mini Quebra-Cabeça Lilo & Stitch – Pais e Filhos (Brasilflex)",
        descricao: "Mini Quebra-Cabeça Lilo & Stitch – Pais e Filhos (Brasilflex)",
        preco: 9.90,
        categoria: "diversos",
        imagem: "img/Mini Quebra-Cabeça Lilo & Stitch – Pais e Filhos.jpeg"
    },

     {
        id: 83,
        nome: "Bloco Adesivo Pink Vibes Transparente Coração 72Mmx72Mm 50F LeoArte",
        descricao: "Bloco Adesivo Pink Vibes Transparente Coracao 72Mmx72Mm 50F LeoArte",
        preco: 9.90,
        categoria: "diversos",
        imagem: "img/Bloco Adesivo Pink Vibes Transparente Coracao 72Mmx72Mm 50F LeoArte.jpeg"
    },

     {
        id: 84,
        nome: "Bloco Adesivo Pink Vibes Transparente Estrela 72Mmx72Mm 50F LeoArte",
        descricao: "Bloco Adesivo Pink Vibes Transparente Estrela 72Mmx72Mm 50F LeoArte",
        preco: 9.90,
        categoria: "diversos",
        imagem: "img/Bloco Adesivo Pink Vibes Transparente Estrela 72Mmx72Mm 50F LeoArte.jpeg"
    },

     {
        id: 85,
        nome: "Kit Bloco de Anotações Mickey – DAC",
        descricao: "Kit Bloco de Anotações Mickey – DAC",
        preco: 19.90,
        categoria: "diversos",
        imagem: "img/Kit Bloco de Anotações Mickey – DAC.jpeg"
    },

     {
        id: 86,
        nome: "Tag de Mala Gato – Uniso",
        descricao: "Tag de Mala Gato – Uniso",
        preco: 14.99,
        categoria: "diversos",
        imagem: "img/Tag de Mala Gato – Uniso.jpeg"
    },

     {
        id: 87,
        nome: "Kit 6 Papéis de Carta + 3 Envelopes Puppy – Uniso",
        descricao: "Kit 6 Papéis de Carta + 3 Envelopes Puppy – Uniso",
        preco: 13.99,
        categoria: "diversos",
        imagem: "img/Kit 6 Papéis de Carta + 3 Envelopes Puppy – Uniso.jpeg"
    },

     {
        id: 88,
        nome: "Rolo de Notas Adesivas Animais Fofos – Uniso",
        descricao: "Rolo de Notas Adesivas Animais Fofos – Uniso",
        preco: 14.90,
        categoria: "diversos",
        imagem: "img/Rolo de Notas Adesivas Animais Fofos.jpeg"
    },

    {
        id: 89,
        nome: "Chaveiro Seringa Quebra Ampola",
        descricao: "Chaveiro Seringa Quebra Ampola",
        preco: 19.99,
        categoria: "diversos",
        imagem: "img/Chaveiro Seringa Quebra Ampola.jpeg"
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

    const numeroWhatsApp = "5581995675934";

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "🛍️ *NOVO PEDIDO - ENTRE DUAS* 🛍️\n\n";

    mensagem += "*Produtos escolhidos:*\n";

    let total = 0;

    carrinho.forEach(item => {

        const subtotal = item.preco * item.quantidade;

        total += subtotal;

        mensagem += `• ${item.quantidade}x ${item.nome} - R$ ${subtotal.toFixed(2).replace(".", ",")}\n`;

    });

    mensagem += `\n💰 *Total: R$ ${total.toFixed(2).replace(".", ",")}*`;

    mensagem += "\n\nOlá! Gostaria de finalizar esse pedido. 💜";

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");

}



// =========================
// INICIAR
// =========================

mostrarProdutos();
atualizarCarrinho();
