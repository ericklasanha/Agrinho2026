function calcularProducao() {
    const hectares = parseFloat(document.getElementById('hectares').value);
    const manejo = document.getElementById('manejo').value;
    
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira um número válido de hectares.");
        return;
    }

    // Dados fictícios baseados em médias de consumo e emissão por ciclo de cultivo
    const aguaPorHectareTradicional = 10000000; // 10 milhões de litros por ciclo/ha
    const metanoPorHectareTradicional = 120;    // 120 kg de CH4 por ciclo/ha

    let aguaGasta = 0;
    let metanoEmitido = 0;
    let economiaAgua = 0;
    let reducaoMetano = 0;

    if (manejo === 'inundacao') {
        aguaGasta = hectares * aguaPorHectareTradicional;
        metanoEmitido = hectares * metanoPorHectareTradicional;
    } else {
        // Manejo Intermitente economiza cerca de 30% de água e reduz 50% de metano
        aguaGasta = hectares * aguaPorHectareTradicional * 0.7;
        metanoEmitido = hectares * metanoPorHectareTradicional * 0.5;
        
        economiaAgua = (hectares * aguaPorHectareTradicional) - aguaGasta;
        reducaoMetano = (hectares * metanoPorHectareTradicional) - metanoEmitido;
    }

    // Exibir o painel de resultados
    const caixaResultado = document.getElementById('resultado');
    caixaResultado.classList.remove('hidden');

    // Atualizar textos na interface
    document.getElementById('infoAgua').innerHTML = `💧 <strong>Consumo de Água:</strong> ${aguaGasta.toLocaleString('pt-BR')} litros por safra.`;
    document.getElementById('infoGases').innerHTML = `☁️ <strong>Emissão de Metano (CH₄):</strong> ${metanoEmitido.toLocaleString('pt-BR')} kg de gases.`;

    const vereditoElemento = document.getElementById('veredito');

    if (manejo === 'intermitente') {
        caixaResultado.style.borderLeft = "6px solid #2e7d32";
        vereditoElemento.style.color = "#2e7d32";
        vereditoElemento.innerHTML = `🚀 <strong>Alta Performance Sustentável!</strong> Ao escolher o manejo intermitente, você evitou o desperdício de <strong>${economiaAgua.toLocaleString('pt-BR')} litros</strong> de água e reduziu a pegada de carbono em <strong>${reducaoMetano.toLocaleString('pt-BR')} kg de CH₄</strong>. Isso é equilíbrio real!`;
    } else {
        caixaResultado.style.borderLeft = "6px solid #e74c3c";
        vereditoElemento.style.color = "#c0392b";
        vereditoElemento.innerHTML = `⚠️ <strong>Alerta de Sustentabilidade:</strong> O método de inundação contínua mantém a produção, mas sobrecarrega o meio ambiente. Adotando a irrigação intermitente, sua fazenda pouparia <strong>${(hectares * aguaPorHectareTradicional * 0.3).toLocaleString('pt-BR')} litros</strong> de água sem perder produtividade.`;
    }
}