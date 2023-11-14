function mostrarSignificado() {
    const nome = document.getElementById('nomeInput').value.toUpperCase();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    for (let letra of nome) {
        const significado = obterSignificado(letra);
        const paragrafo = document.createElement('p');
        paragrafo.textContent = `${letra}: ${significado}`;
        resultadoDiv.appendChild(paragrafo);
    }
}

function obterSignificado(letra) {
    // Adicione aqui os significados desejados para cada letra
    const significados = {
        'A': 'Amoroso(a)',
        'B': 'Benevolente',
        'C': 'Compassivo(a)',
        'D': 'Dedicado(a)',
        'E': 'Energético(a)',
        'F': 'Firme',
        'G': 'Generoso(a)',
        'H': 'Honesto(a)',
        'I': 'Inovador(a)',
        'J': 'Justo(a)',
        'K': 'Confiável',
        'L': 'Leal',
        'M': 'Motivado(a)',
        'N': 'Nobre',
        'O': 'Otimista',
        'P': 'Persistente',
        'Q': 'Qualificado(a)',
        'R': 'Resiliente',
        'S': 'Sábio(a)',
        'T': 'Trabalhador(a)',
        'U': 'Único(a)',
        'V': 'Vibrante',
        'W': 'Witty (Espirituoso)(a)',
        'X': 'X-factor (Fator X)',
        'Y': 'Yummy (Delicioso)(a)',
        'Z': 'Zeloso(a)',
    };

    // Verifica se a letra já foi utilizada e remove do objeto de significados
    if (significados.hasOwnProperty(letra)) {
        const significado = significados[letra];
        delete significados[letra];
        return significado;
    } else {
        return `Significado não encontrado para ${letra}`;
    }
}
