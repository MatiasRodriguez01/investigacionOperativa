// Test Cases
const validarDireccion = require('./direcciones')

test('Dirección válida - Todos los campos correctos', () => {
    const direccion = {
        street: "Salta",
        number: 359,
        floor_apartment: "D3",
        zip_code: 5500,
        town: "",
        city: "Mendoza",
        province: "Mendoza"
    };
    
    const resultado = validarDireccion(direccion);
    expect(resultado).toBe(true);
});

test('Número incorrecto - El campo "number" es un string', () => {
    const direccion = {
        street: "Salta",
        number: "359", // El número debería ser un tipo "number", no "string"
        zip_code: 5500,
        city: "Mendoza",
        province: "Mendoza"
    };
    
    const resultado = validarDireccion(direccion);
    expect(resultado).toBe(false);
});

test('Campo faltante - Falta el campo "zip_code"', () => {
    const direccion = {
        street: "Salta",
        number: 359,
        // Falta el campo zip_code
        city: "Mendoza",
        province: "Mendoza"
    };

    const resultado = validarDireccion(direccion);
    expect(resultado).toBe(false);
});

test('Dirección nula - La dirección es nula', () => {
    const resultado = validarDireccion(null);
    expect(resultado).toBe(false);
});

test('Campo "street" incorrecto - El campo "street" es un número en lugar de una cadena', () => {
    const direccion = {
        street: 123, // "street" debe ser una cadena, no un número
        number: 359,
        zip_code: 5500,
        city: "Mendoza",
        province: "Mendoza"
    };

    const resultado = validarDireccion(direccion);
    expect(resultado).toBe(false);
});