// Variável para contar quantos acertos o usuário já teve
let acertos = 0;

function selecionarPeca(id, ehCorreta) {
    const peca = document.getElementById(`peca${id}`);
    const mensagemErro = document.getElementById('mensagem-erro');
    const resultadoFinal = document.getElementById('resultado-puzzle');

    // Esconde a mensagem de erro sempre que o usuário clica em algo novo
    mensagemErro.classList.add('hidden');

    if (ehCorreta) {
        // Se já não estiver selecionada, marca como certa e soma 1 nos acertos
        if (!peca.classList.contains('correta-selecionada')) {
            peca.classList.add('correta-selecionada');
            acertos++;

            // Verifica se o usuário já encontrou as 3 corretas
            if (acertos === 3) {
                resultadoFinal.classList.remove('hidden');
            }
        }
    } else {
        // Se a opção for falsa (armadilha), mostra a mensagem de erro
        mensagemErro.classList.remove('hidden');
        
        // Efeito visual de erro tremendo a peça (Feedback visual rápido)
        peca.style.backgroundColor = "#fadbd8";
        peca.style.borderColor = "#e74c3c";
        setTimeout(() => {
            peca.style.backgroundColor = "#fdfefe";
            peca.style.borderColor = "#bdc3c7";
        }, 1000); // Volta ao normal depois de 1 segundo
    }
}