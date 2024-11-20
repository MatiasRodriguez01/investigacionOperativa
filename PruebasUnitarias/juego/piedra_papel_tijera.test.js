const piedra_papel_tijera = require('./piedra_papel_tijera');

// Test 1: Jugada 1 gana
test('Tijera vence a papel - Jugador 1 gana', () => {
    const resultado = piedra_papel_tijera('tijera', 'papel');
    expect(resultado).toBe('Gana la jugada 1');
});

// Test 2: Jugada 2 gana
test('Piedra vence a tijera - Jugador 2 gana', () => {
    const resultado = piedra_papel_tijera('tijera', 'piedra');
    expect(resultado).toBe('Gana la jugada 2');
});

// Test 3: Empate
test('Papel contra papel - Empate', () => {
    const resultado = piedra_papel_tijera('papel', 'papel');
    expect(resultado).toBe('Empate');
});

// Test 4: Entrada inválida
test('Entrada inválida para Jugador 1', () => {
    const resultado = piedra_papel_tijera('fuego', 'papel');
    expect(resultado).toBe('Uno de los valores es incorrecto');
});

// Test 5: Insensibilidad a mayúsculas y minúsculas
test('Insensibilidad a mayúsculas (PAPEL y Tijera)', () => {
    const resultado = piedra_papel_tijera('PAPEL', 'Tijera');
    expect(resultado).toBe('Gana la jugada 2');
});
