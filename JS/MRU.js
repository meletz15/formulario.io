//MRU - Fórmula 1
function calcularMRUFormula1() {
    const velocidad = parseFloat(document.getElementById("mru-velocidad-1").value);
    const tiempo = parseFloat(document.getElementById("mru-tiempo-1").value);

    if (isNaN(velocidad) || isNaN(tiempo)) {
        alert("Ingresa valores numéricos válidos.");
        return;
    }
    const distancia = velocidad * tiempo;

    const resultadoMRU = document.getElementById("resultado-mru-1");
    resultadoMRU.textContent = `La distancia recorrida en MRU es ${distancia.toFixed(2)} metros.`;
}

function limpiarCamposMRUFormula1() {
    document.getElementById("mru-velocidad-1").value = "";
    document.getElementById("mru-tiempo-1").value = "";
    document.getElementById("resultado-mru-1").textContent = "";
}

// MRU - Fórmula 2
function calcularMRUFormula2() {
    const velocidad = parseFloat(document.getElementById("mru-velocidad-2").value);
    const tiempo = parseFloat(document.getElementById("mru-tiempo-2").value);

    if (isNaN(velocidad) || isNaN(tiempo)) {
        alert("Ingresa valores numéricos válidos.");
        return;
    }

    const distancia = 2 * velocidad * tiempo;

    const resultadoMRU = document.getElementById("resultado-mru-2");
    resultadoMRU.textContent = `La distancia recorrida en MRU es ${distancia.toFixed(2)} metros.`;
}

function limpiarCamposMRUFormula2() {
    document.getElementById("mru-velocidad-2").value = "";
    document.getElementById("mru-tiempo-2").value = "";
    document.getElementById("resultado-mru-2").textContent = "";
}

//MRU - Fórmula 3
function calcularMRUFormula3() {
    const velocidad = parseFloat(document.getElementById("mru-velocidad-3").value);
    const distancia = parseFloat(document.getElementById("mru-distancia-3").value);

    if (isNaN(velocidad) || isNaN(distancia)) {
        alert("Ingresa valores numéricos válidos.");
        return;
    }

    const tiempo = distancia / velocidad;

    const resultadoMRU = document.getElementById("resultado-mru-3");
    resultadoMRU.textContent = `El tiempo en MRU es ${tiempo.toFixed(2)} segundos.`;
}

//MRU - Fórmula 3
function limpiarCamposMRUFormula3() {
    document.getElementById("mru-velocidad-3").value = "";
    document.getElementById("mru-distancia-3").value = "";
    document.getElementById("resultado-mru-3").textContent = "";
}


