const siglo = require("./siglo");

test("Año 2023 debería retornar 21", () => {
  expect(siglo(2023)).toBe(21);
});

test("Año 1500 debería retornar 16", () => {
  expect(siglo(1500)).toBe(16);
});

test("Año 100 debería retornar 1", () => {
  expect(siglo(100)).toBe(2); 
});

test("Año 1 debería retornar 1", () => {
  expect(siglo(1)).toBe(1);
});

test("Año 101 debería retornar 2", () => {
  expect(siglo(101)).toBe(2);
});

test('Año 2100 debería retornar 22', () => {
  expect(siglo(2100)).toBe(22); 
});

test('Año -500 debería retornar "Año no valido"', () => {
  expect(siglo(-500)).toBe("Año no valido"); // Año negativo
});

test('Entrada no numérica debería retornar "No ingreso un numero"', () => {
  expect(siglo("texto")).toBe("No ingreso un numero"); // Entrada no numérica
});

test('Valor NaN debería retornar "No ingreso un numero"', () => {
  expect(siglo(NaN)).toBe("No ingreso un numero"); // Entrada NaN
});

test("Año 2000 debería retornar 21", () => {
  expect(siglo(2000)).toBe(21); // Año límite de siglo
});
