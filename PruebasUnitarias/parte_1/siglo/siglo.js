function siglo(anio) {
    if (!Number.isFinite(anio)) return 'No ingreso un numero'
    if (anio < 0) return 'Año no valido'

    const numeroSiglo =  Math.ceil(anio/100);
    return anio % 100 === 0 ? (numeroSiglo + 1) : (numeroSiglo);
}

module.exports = siglo;