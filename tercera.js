function calcularFuerzas(objetoX, objetoY, fuerzaAp, friccion, gravedad) {

    let fuerzaX = friccion * objetoX * gravedad;
    let fuerzaY = friccion * objetoY * gravedad;
    let aplicarfuerzaNX = fuerzaAp - fuerzaX;
    let aplicarfuerzaNY = fuerzaAp - fuerzaY; 

    return {
        fuerzaX: fuerzaX.toFixed(1),
        fuerzaY: fuerzaY.toFixed(1),
        aplicarfuerzaNX: aplicarfuerzaNX.toFixed(1),
        aplicarfuerzaNY: aplicarfuerzaNY.toFixed(1)
    };

    //console.log(`La fuerza de fricción que actúa sobre el objeto X es : ${fuerzaX.toFixed(1)} N`);
    //console.log(`La fuerza de fricción que actúa sobre el objeto Y es : ${fuerzaY.toFixed(1)} N`);
    //console.log(`La fuerza neta sobre X es de : ${aplicarfuerzaNX.toFixed(1)} N`);
    //console.log(`La fuerza neta sobre Y es de : ${aplicarfuerzaNY.toFixed(1)} N`);
}

if (typeof module !== 'undefined' && typeof moodule.exports !== 'undefined') {
    module.exports = {
        calcularFuerzas
    };
}