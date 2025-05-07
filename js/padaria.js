// Função para voltar à página principal
function voltarPaginaPrincipal() {
  window.location.href = "../index.html";  // Redireciona para o arquivo index.html (página principal)
}

// Aguarda o carregamento completo da página (DOM)
document.addEventListener("DOMContentLoaded", () => {

// Seleciona todos os elementos com a classe 'produto' (os produtos da seção)
const produtos = document.querySelectorAll(".produto");

// Seleciona o modal e os elementos dentro dele (onde vamos exibir título e descrição)
const modal = document.getElementById("modal");
const titulo = document.getElementById("modal-titulo");
const descricao = document.getElementById("modal-descricao");

// Seleciona o botão de fechar dentro do modal
const fechar = document.getElementById("fechar-modal");

// Para cada produto na lista de produtos
produtos.forEach(produto => {
  // Adiciona um ouvinte de evento de clique para cada produto
  produto.addEventListener("click", () => {
    // Obtém o nome e a descrição do produto através dos atributos 'data-nome' e 'data-desc'
    const nome = produto.getAttribute("data-nome");
    const desc = produto.getAttribute("data-desc");

    // Define o título e a descrição do modal com as informações do produto
    titulo.textContent = nome;  // Define o nome do produto como título no modal
    descricao.textContent = desc;  // Define a descrição do produto no modal

    // Exibe o modal (altera o estilo para mostrar)
    modal.style.display = "flex";
  });
});

// Adiciona um ouvinte de evento para o botão de fechar o modal
fechar.addEventListener("click", () => {
  // Esconde o modal quando o botão de fechar é clicado
  modal.style.display = "none";
});

});
