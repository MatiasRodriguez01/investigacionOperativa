function paseo(hora){
    if (Number.isFinite(hora)){
        return Math.floor(hora * 0.5)
    }
    return "No ingreso un numero"
}

module.exports = paseo;