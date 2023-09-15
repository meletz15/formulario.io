//MRUV - Fórmula 1
function calcularMRUVFormula1() {
    const velocidadInicial = parseFloat(document.getElementById("mruv-velocidad-inicial-1").value);
    const aceleracion = parseFloat(document.getElementById("mruv-aceleracion-1").value);
    const tiempo = parseFloat(document.getElementById("mruv-tiempo-1").value);

    if (isNaN(velocidadInicial) || isNaN(aceleracion) || isNaN(tiempo)) {
        alert("Ingresa valores numéricos válidos.");
        return;
    }

    const velocidadFinal = velocidadInicial + aceleracion * tiempo;

    const distancia = velocidadInicial * tiempo + 0.5 * aceleracion * tiempo ** 2;

    const resultadoVelocidad = document.getElementById("resultado-velocidad-1");
    resultadoVelocidad.textContent = `La velocidad final en MRUV es ${velocidadFinal.toFixed(2)} m/s.`;

    const resultadoDistancia = document.getElementById("resultado-distancia-1");
    resultadoDistancia.textContent = `La distancia recorrida en MRUV es ${distancia.toFixed(2)} metros.`;
}

function limpiarCamposMRUVFormula1() {
    document.getElementById("mruv-velocidad-inicial-1").value = "";
    document.getElementById("mruv-aceleracion-1").value = "";
    document.getElementById("mruv-tiempo-1").value = "";
    document.getElementById("resultado-velocidad-1").textContent = "";
    document.getElementById("resultado-distancia-1").textContent = "";
}

function calcularMRUVFormula2() {
    const velocidadInicial = parseFloat(document.getElementById("mruv-velocidad-inicial-2").value);
    const velocidadFinal = parseFloat(document.getElementById("mruv-velocidad-final-2").value);
    const tiempo = parseFloat(document.getElementById("mruv-tiempo-2").value);

    if (isNaN(velocidadInicial) || isNaN(velocidadFinal) || isNaN(tiempo)) {
        alert("Ingresa valores numéricos válidos.");
        return;
    }

    const distancia = velocidadInicial * tiempo + 0.5 * ((velocidadFinal - velocidadInicial) / tiempo) * tiempo ** 2;

    const aceleracion = (velocidadFinal - velocidadInicial) / tiempo;

    const resultadoDistancia = document.getElementById("resultado-distancia-2");
    resultadoDistancia.textContent = `La distancia recorrida en MRUV es ${distancia.toFixed(2)} metros.`;

    const resultadoAceleracion = document.getElementById("resultado-aceleracion-2");
    resultadoAceleracion.textContent = `La aceleración en MRUV es ${aceleracion.toFixed(2)} m/s².`;
}

//MRUV - Fórmula 2
function limpiarCamposMRUVFormula2() {
    document.getElementById("mruv-velocidad-inicial-2").value = "";
    document.getElementById("mruv-velocidad-final-2").value = "";
    document.getElementById("mruv-tiempo-2").value = "";
    document.getElementById("resultado-distancia-2").textContent = "";
    document.getElementById("resultado-aceleracion-2").textContent = "";
}

//MRUV - Fórmula 3
function calcularMRUVFormula3() {
    const velocidadInicial = parseFloat(document.getElementById("mruv-velocidad-inicial-3").value);
    const velocidadFinal = parseFloat(document.getElementById("mruv-velocidad-final-3").value);
    const distancia = parseFloat(document.getElementById("mruv-distancia-3").value);

    if (isNaN(velocidadInicial) || isNaN(velocidadFinal) || isNaN(distancia)) {
        alert("Ingresa valores numéricos válidos.");
        return;
    }

    const tiempo = (velocidadFinal - velocidadInicial) / ((velocidadFinal - velocidadInicial) / distancia);

    const aceleracion = (velocidadFinal - velocidadInicial) / tiempo;

    const resultadoTiempo = document.getElementById("resultado-tiempo-3");
    resultadoTiempo.textContent = `El tiempo en MRUV es ${tiempo.toFixed(2)} segundos.`;

    const resultadoAceleracion = document.getElementById("resultado-aceleracion-3");
    resultadoAceleracion.textContent = `La aceleración en MRUV es ${aceleracion.toFixed(2)} m/s².`;
}

function limpiarCamposMRUVFormula3() {
    document.getElementById("mruv-velocidad-inicial-3").value = "";
    document.getElementById("mruv-velocidad-final-3").value = "";
    document.getElementById("mruv-distancia-3").value = "";
    document.getElementById("resultado-tiempo-3").textContent = "";
    document.getElementById("resultado-aceleracion-3").textContent = "";
}
