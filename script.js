function selecionarManejo(tipo) {
    // 1. Remover a seleção (borda verde) de todos os cards
    document.getElementById('card-convencional').classList.remove('ativo');
    document.getElementById('card-sustentavel').classList.remove('ativo');

    // 2. Adicionar a borda verde no card que foi clicado
    document.getElementById(`card-${tipo}`).classList.add('ativo');

    // 3. Mostrar a caixa de resultados
    const caixaResultado = document.getElementById('resultado');
    caixaResultado.classList.remove('hidden');

    // 4. Pegar os elementos de texto
    const metricaSolo = document.getElementById('metrica-solo');
    const metricaBiodiversidade = document.getElementById('metrica-biodiversidade');
    const veredito = document.getElementById('veredito');

    // 5. Preencher os dados dependendo da imagem escolhida
    if (tipo === 'sustentavel') {
        caixaResultado.style.borderLeft = "6px solid #27ae60"; // Borda verde
        
        metricaSolo.innerHTML = "🌱 <strong>Saúde do Solo:</strong> Alta retenção de água e nutrientes, graças à palha do Plantio Direto que protege a terra do sol e da chuva forte.";
        metricaBiodiversidade.innerHTML = "🐝 <strong>Biodiversidade:</strong> Alta. O Controle Biológico (como as vespinhas) elimina a lagarta-do-cartucho sem matar os insetos polinizadores.";
        
        veredito.style.color = "#27ae60";
        veredito.innerHTML = "🏆 <strong>Equilíbrio Perfeito!</strong> Você garantiu uma alta produção de milho respeitando o meio ambiente. O solo fica rico para as próximas gerações e o custo com química diminui!";
        
    } else if (tipo === 'convencional') {
        caixaResultado.style.borderLeft = "6px solid #e74c3c"; // Borda vermelha
        
        metricaSolo.innerHTML = "🏜️ <strong>Saúde do Solo:</strong> Baixa retenção de água. Ao arar a terra, o solo fica exposto à erosão e perde umidade rapidamente.";
        metricaBiodiversidade.innerHTML = "⚠️ <strong>Biodiversidade:</strong> Baixa. O excesso de agrotóxicos elimina tanto as pragas quanto os insetos benéficos.";
        
        veredito.style.color = "#c0392b";
        veredito.innerHTML = "📉 <strong>Alerta Ambiental:</strong> A produção acontece, mas a longo prazo o solo se esgota. É preciso aplicar cada vez mais fertilizantes químicos para manter a mesma quantidade de milho.";
    }
}