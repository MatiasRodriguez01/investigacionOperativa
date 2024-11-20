function calcularVolumen(diametro, altura, unidad) {
    if (unidad !== 'm' && unidad !== 'cm') {
        return ("Unidad No Soportada")
    }
    
    if (unidad === 'cm') {
        diametro /= 100;
        altura /= 100
    }
    
    const radio = diametro / 2;
    const resultado = Math.PI * Math.pow(radio, 2) * altura
    
    const resultado_litro = resultado * 1000;
    
    return parseFloat(resultado_litro.toFixed(1));
}

console.log(calcularVolumen(0.1, 0.5, "m"))

module.exports = calcularVolumen ;