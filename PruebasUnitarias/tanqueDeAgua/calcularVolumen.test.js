const calcularVolumen = require("./calcularVolumen");

test("calcular volumen en metros", () => {
  expect(calcularVolumen(2, 5, "m")).toBe(15708);
});
test("calcular volumen en centímetros", () => {
  expect(calcularVolumen(200, 500, "cm")).toBe(15708);
});
test("unidad no soportada", () => {
  expect(calcularVolumen(2, 5, "km")).toBe("Unidad No Soportada");
});
test("diámetro y altura iguales", () => {
  expect(calcularVolumen(4, 4, "ls")).toBe("Unidad No Soportada");
});
test("valores pequeños", () => {
  expect(calcularVolumen(0.1, 0.5, "m")).toBe(3.9);
});
