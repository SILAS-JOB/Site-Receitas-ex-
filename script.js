/*
Javascript puro feito com a intenção de adicionar a interagibilidade do site, adicionei a explicação. 
*/ 

const pratos = [
    { id: 'food1', texto: 'Lombo de Porco Assado' },
    { id: 'food2', texto: 'Arroz Cozido Soltinho' },
    { id: 'food3', texto: 'Sardinha solitária' },
    { id: 'food4', texto: 'Pudim suculento diabético' },
    { id: 'food5', texto: 'Frango assado na brasa' },
    { id: 'food6', texto: 'Suflê de queijo' }
];

function textoExplicativoToggle(elemento, descricao) {
    if (elemento.dataset.estado === 'texto') {
        const imagem = document.createElement('img');
        imagem.src = elemento.dataset.srcOriginal;
        imagem.className = 'food';
        imagem.id = elemento.id;
        imagem.dataset.estado = 'imagem';
        imagem.onclick = () => textoExplicativoToggle(imagem, descricao);
        elemento.replaceWith(imagem);
    } else {
        elemento.dataset.srcOriginal = elemento.src;
        elemento.dataset.estado = 'texto';

        const textoDiv = document.createElement('div');
        textoDiv.className = 'food-box';
        textoDiv.textContent = descricao;
        textoDiv.id = elemento.id;
        textoDiv.dataset.srcOriginal = elemento.src;
        textoDiv.dataset.estado = 'texto';
        textoDiv.onclick = () => textoExplicativoToggle(textoDiv, descricao);

        elemento.replaceWith(textoDiv);
    }
}

window.onload = () => {
    pratos.forEach(prato => {
        const el = document.getElementById(prato.id);
        if (el) {
            el.dataset.estado = 'imagem'; // Inicializa estado
            el.onclick = () => textoExplicativoToggle(el, prato.texto);
        }
    });
};

alert("Seja bem vindo ao meu Site! \n Aproveita e me segue no linkedin  \n www.linkedin.com/in/luiseduardoti/")