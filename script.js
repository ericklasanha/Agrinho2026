function selecionarManejo(tipo) {
    // Desmarca ambos os cards
    document.getElementById('card-convencional').classList.remove('ativo');
    document.getElementById('card-sustentavel').classList.remove('ativo');

    // Destaca o card selecionado
    document.getElementById(`card-${tipo}`).classList.add('ativo');

    // Revela a caixa de resultados
    const caixaResultado = document.getElementById('resultado');
    caixaResultado.classList.remove('hidden');

    const campoSolo = document.getElementById('metrica-solo');
    const campoBiodiversidade = document.getElementById('metrica-biodiversidade');
    const campoVeredito = document.getElementById('veredito');

    if (tipo === 'sustentavel') {
        caixaResultado.style.borderLeft = "6px solid #27ae60";
        campoSolo.innerHTML = "🌱 <strong>Solo:</strong> Protegido por palhada, conservando umidade e evitando processos erosivos.";
        campoBiodiversidade.innerHTML = "🐝 <strong>Biodiversidade:</strong> Equilibrada. Insetos úteis continuam atuando na polinização da lavoura.";
        campoVeredito.style.color = "#27ae60";
        campoVeredito.innerHTML = "🏆 <strong>Equilíbrio Alcançado!</strong> O plantio direto reduz custos operacionais e preserva a capacidade produtiva do ecossistema.";
    } else {
        caixaResultado.style.borderLeft = "6px solid #e74c3c";
        campoSolo.innerHTML = "🏜️ <strong>Solo:</strong> Revolvido e desprotegido, suscetível à degradação por chuvas intensas e calor.";
        campoBiodiversidade.innerHTML = "⚠️ <strong>Biodiversidade:</strong> Reduzida devido à aplicação massiva de insumos químicos sem critério ecológico.";
        campoVeredito.style.color = "#c0392b";
        campoVeredito.innerHTML = "📉 <strong>Alerta de Desgaste:</strong> Embora produza a curto prazo, compromete a sustentabilidade financeira e ambiental futura.";
    }
}let acertos = 0; 

function verificarClique(id, ehVerdadeiro) {
    const peca = document.getElementById(`peca${id}`);
    const msgErro = document.getElementById('mensagem-erro');
    const resultado = document.getElementById('resultado-puzzle');

    msgErro.classList.add('hidden');

    if (ehVerdadeiro) {
        if (!peca.classList.contains('correta-selecionada')) {
            peca.classList.add('correta-selecionada');
            acertos++; 

            if (acertos === 3) {
                resultado.classList.remove('hidden');
                // Rola a página suavemente até o resultado final
                resultado.scrollIntoView({ behavior: 'smooth' });
            }
        }
    } else {
        msgErro.classList.remove('hidden');
        peca.classList.add('erro');
        
        setTimeout(() => {
            peca.classList.remove('erro');
        }, 1000);
    }
}