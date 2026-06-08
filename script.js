// --- SISTEMA DE NAVEGAÇÃO POR ABAS ---
function mudarAba(abaNome) {
    document.getElementById('conteudo-simulador').classList.remove('ativo');
    document.getElementById('conteudo-puzzle').classList.remove('ativo');
    
    document.getElementById('btn-tab1').classList.remove('ativa');
    document.getElementById('btn-tab2').classList.remove('ativa');

    if (abaNome === 'simulador') {
        document.getElementById('conteudo-simulador').classList.add('ativo');
        document.getElementById('btn-tab1').classList.add('ativa');
    } else if (abaNome === 'puzzle') {
        document.getElementById('conteudo-puzzle').classList.add('ativo');
        document.getElementById('btn-tab2').classList.add('ativa');
    }
}

// --- LÓGICA DA ABA 1: SIMULADOR & ANIMAÇÃO DO MILHO ---
function selecionarManejo(tipo) {
    const cardConv = document.getElementById('card-convencional');
    const cardSust = document.getElementById('card-sustentavel');
    const boxRes = document.getElementById('resultado-simulador');
    const milho = document.getElementById('milho-virtual');

    cardConv.className = 'card';
    cardSust.className = 'card';
    boxRes.classList.remove('hidden');

    const tit = document.getElementById('titulo-res');
    const solo = document.getElementById('txt-solo');
    const bio = document.getElementById('txt-bio');

    if (tipo === 'sustentavel') {
        cardSust.classList.add('ativo-verde');
        boxRes.style.borderLeftColor = "#27ae60";
        
        tit.innerHTML = "🏆 Manejo Sustentável";
        tit.style.color = "#27ae60";
        solo.innerHTML = "🌱 <strong>Solo:</strong> A palhada protege a terra, mantendo a água e gerando adubo natural.";
        bio.innerHTML = "🐝 <strong>Biodiversidade:</strong> O controle biológico elimina as lagartas sem ferir polinizadores.";
        
        milho.innerHTML = "🌽";
        milho.classList.add('milho-grande');
        
    } else {
        cardConv.classList.add('ativo-vermelho');
        boxRes.style.borderLeftColor = "#e74c3c";
        
        tit.innerHTML = "⚠️ Manejo Convencional";
        tit.style.color = "#c0392b";
        solo.innerHTML = "🏜️ <strong>Solo:</strong> Desprotegido e revirado, sofrendo forte erosão com o sol e chuva.";
        bio.innerHTML = "🚫 <strong>Biodiversidade:</strong> Agroquímicos em excesso reduzem a vida benéfica da terra.";
        
        milho.innerHTML = "🥀";
        milho.classList.remove('milho-grande');
    }
}

// --- LÓGICA DA ABA 2: MINI PUZZLE ---
let acertosTotais = 0;

function verificarPuzzle(id, ehVerdade) {
    const peca = document.getElementById(`peca${id}`);
    const erroMsg = document.getElementById('msg-erro');
    const painelFim = document.getElementById('resultado-puzzle');

    erroMsg.classList.add('hidden');

    if (ehVerdade) {
        if (!peca.classList.contains('correta')) {
            peca.classList.add('correta');
            acertosTotais++;

            if (acertosTotais === 3) {
                painelFim.classList.remove('hidden');
                // Rola suavemente para revelar a mensagem motivadora com os confetes
                painelFim.scrollIntoView({ behavior: 'smooth' });
            }
        }
    } else {
        erroMsg.classList.remove('hidden');
        peca.classList.add('errada');
        setTimeout(() => { peca.classList.remove('errada'); }, 800);
    }
}