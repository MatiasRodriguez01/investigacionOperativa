const paseo = require('./paseo')

test('3 horas ', () => {
    expect(paseo(3)).toBe(1);
})

test('6.7 horas ', () => {
    expect(paseo(6.7)).toBe(3);
})

test('hora negativa', () => {
    expect(paseo(-5)).toBe(-3);
});

test('ingresamos letras ', () => {
    expect(paseo('hola')).toBe('No ingreso un numero')
})

test('entrada nada', () => {
    expect(paseo(NaN)).toBe("No ingreso un numero");
});
