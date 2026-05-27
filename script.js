async function buscarCachorro() {
    const elementoImagem = document.getElementById('fotoCachorro');

    try {
        const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
        const dados = await resposta.json();
        const linkDaImagem = dados.message;

        elementoImagem.src = linkDaImagem;
        elementoImagem.style.display = "block";
    } catch (erro) {
        alert("Ops, não consseguimos buscar o doguinho!");
        console.error(erro);
    }
}