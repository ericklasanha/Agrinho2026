function calcularImpacto() {
    // 1. Pegar os valores digitados no HTML
    const hectares = parseFloat(document.getElementById('hectares').value);
    const metodo = document.getElementById('metodo').value;
    
    // Validação simples: se o usuário não digitar nada ou número menor que 1
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira uma quantidade válida de hectares.");
        return;
    }

    // 2. Definir o consumo de água fictício por hectare (em litros por dia)
    // Aspersão gasta muito mais água por conta da evaporação
    const gastoAspersaoPorHectare = 5000; 
    const gastoGotejamentoPorHectare = 2500; // Economiza 50% de água

    let consumoTotal = 0;
    let economia = 0;

    // 3. Fazer o cálculo baseado na escolha do usuário
    if (metodo === 'tradicional') {
        consumoTotal = hectares * gastoAspersaoPorHectare;
    } else {
        consumoTotal = hectares * gastoGotejamentoPorHectare;
        // Calcula quanto ele economizou em comparação ao método tradicional
        economia = (hectares * gastoAspersaoPorHectare) - consumoTotal;
    }

    // 4. Mostrar a caixa de resultado que estava escondida (.hidden)
    const caixaResultado = document.getElementById('resultado');
    caixaResultado.classList.remove('hidden');

    // 5. Inserir os textos com os resultados na tela
    document.getElementById('consumoAgua').innerHTML = `Consumo estimado: <strong>${consumoTotal.toLocaleString()} litros</strong> de água por dia.`;

    const mensagemElemento = document.getElementById('mensagemSustentavel');
    
    if (metodo === 'gotejamento') {
        mensagemElemento.style.color = '#1b5e20'; // Texto verde escuro
        mensagemElemento.innerHTML = `🌱 <strong>Excelente escolha!</strong> Ao usar o gotejamento, você economizou <strong>${economia.toLocaleString()} litros</strong> de água hoje, mantendo a alta produção e protegendo o lençol freático!`;
    } else {
        mensagemElemento.style.color = '#b71c1c'; // Texto vermelho de alerta
        mensagemElemento.innerHTML = `⚠️ <strong>Atenção:</strong> O método tradicional gera desperdício por evaporação. Se mudasse para o gotejamento, você economizaria <strong>${(hectares * 2500).toLocaleString()} litros</strong> por dia!`;
    }
}