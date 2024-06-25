


const produtos = [
    { nome: "Produto 1", descricao: "Descrição do Produto 1", preco: 10.99, imagem: "caminho_para_imagem_do_produto1" },
    { nome: "Produto 2", descricao: "Descrição do Produto 2", preco: 19.99, imagem: "caminho_para_imagem_do_produto2" },
    
];

const containerProdutos = document.querySelector('.container_produtos');

produtos.forEach(produto => {
    const produtoHTML = `
        <div class="produto">
            <img src="img/${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p>R$ ${produto.preco}</p>
        </div>
    `;
    
    containerProdutos.innerHTML += produtoHTML;
});
