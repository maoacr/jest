const randomStrings = require("../index");
const randomString = require("../index");

test("Probar fiuncionalidad", () => {
  expect(typeof randomString()).toBe("string");
});

describe("Probar funcionalidades de nuestra funcion randomStrings", () => {
  test("Probar fiuncionalidad", () => {
    expect(typeof randomString()).toBe("string");
  });
  test("Comprobar que no existe una ciudad", () => {
    expect(randomStrings()).not.toMatch(/Chile/);
  });
});
