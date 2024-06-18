document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const homeSection = document.querySelector('.home');
    const alturaHome = homeSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHome) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader ()
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAabas();
            aba.classList.add('filmes__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('filmes__tabs__button--is-active');
        })
    }
})

    function ocultaElementosDoHeader () {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }
    
    function exibeElementosDoHeader () {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

    function removeBotaoAtivo () {
        const buttons = document.querySelectorAll('[data-tab-button]');
    
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('filmes__tabs__button--is-active');
        }
    }

    function escondeTodasAabas () {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('filmes__list--is-active');
        }
    }