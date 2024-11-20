const validar_pin = require("./pin");

test("pin de 6 dígitos válido", () => {
  expect(validar_pin(123456)).toBe(true);
  expect(validar_pin(999999)).toBe(true);
  expect(validar_pin(789012)).toBe(true);
});

test("pin de 4 dígitos válido", () => {
    expect(validar_pin(1234)).toBe(true);
    expect(validar_pin(5678)).toBe(true);
});

test("pin de mayor 6 digitos", () => {
    expect(validar_pin(1234567)).toBe(false);             
    expect(validar_pin(12345678)).toBe(false);
    expect(validar_pin(123456789)).toBe(false);
  });

test("pin de menor 4 digitos", () => {
  expect(validar_pin(123)).toBe(false);
  expect(validar_pin(12)).toBe(false);
  expect(validar_pin(1)).toBe(false);
});

test("pin con cadena de texto", () => {
    expect(validar_pin("1234567")).toBe(false);
    expect(validar_pin("1238")).toBe(false);
    expect(validar_pin("123456")).toBe(false);
  });