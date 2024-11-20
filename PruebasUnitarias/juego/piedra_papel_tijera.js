function piedra_papel_tijera(jugada1, jugada2){
    const lista = ['papel', 'piedra', 'tijera']
    jugada1 = jugada1.toLowerCase()
    jugada2 = jugada2.toLowerCase()

    if (!lista.includes(jugada1) || !lista.includes(jugada2)) return "Uno de los valores es incorrecto"

    const regla = {
        tijera: "papel",
        papel: 'piedra',
        piedra: 'tijera'
    }

    if (jugada1 == jugada2) return 'Empate'
    if (regla[jugada1] == jugada2) return 'Gana la jugada 1'

    return 'Gana la jugada 2'
}

module.exports = piedra_papel_tijera;