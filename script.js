let acertos = 0; 

function verificarClique(id, ehVerdadeiro) {
    const peca = document.getElementById(`peca${id}`);
    const msgErro = document.getElementById('mensagem-erro');
    const resultado = document.getElementById('resultado-puzzle');

    // Esconde o erro antes de testar a nova jogada
    msgErro.classList.add('hidden');

    if (ehVerdadeiro) {
        if (!peca.classList.contains('correta-selecionada')) {
            peca.classList.add('correta-selecionada');
            acertos++; 

            if (acertos === 3) {
                resultado.classList.remove('hidden');
            }
        }
    } else {
        msgErro.classList.remove('hidden');
        peca.classList.add('erro');
        
        // Remove o efeito vermelho após 1 segundo
        setTimeout(() => {
            peca.classList.remove('erro');
        }, 1000);
    }
}