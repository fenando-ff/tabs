// Selecione todos os botões de abas
const tabs = document.querySelectorAll('.tab-btn');

// Função para manipular os clique na aba
function tabClicked(tab) {
    // Remove a classe 'active' de todas as abas
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Adiciona a classe 'active' na aba clicada
    tab.classList.add('active');

    // Seleciona todos os conteúdos
    const contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('show');
    });

    // Obtém o id do conteúdo a ser mostrado combases na aba clicada
    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    // Mostra o conteúde correspondente
    content.classList.add('show');
}

// Adiciona o evento de clique para cada aba
tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        tabClicked(tab);
    });
})

// Seleciona a aba ativa inicialmente, caso exista, e ativa-a
const currentActiveTab = document.querySelector('.tab-btn.active');
if (currentActiveTab) {
    tabClicked(currentActiveTab);
}