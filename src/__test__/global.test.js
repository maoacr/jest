const text = "Hola Mundo";
const fruits = ["apple", "cherry", "banana"];

test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

// Probando texto

test("Tenemos una banana ? ", () => {
  expect(fruits).toContain("banana");
});

// Probando numeros

test("Mayor que", () => {
  expect(10).toBeGreaterThan(8);
});

// Probando Booleanos

test("Verdadero", () => {
  expect(true).toBeTruthy();
});

// Probando un calback

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

// Probando promesas

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Probar una promesa", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});

// Probando Async / Await

test("Probar async y await", async () => {
  const string = await reverseString2("hola");
  expect(string).toBe("aloh");
});

// Funciones que se ejecutan antes y despues de cada prueba

// afterEach(() => console.log("Despues de cada prueba"));
// afterAll(() => console.log("Despues de todas las pruebas"));
// beforeEach(() => console.log("Antes de cada prueba"));
// beforeAll(() => console.log("Antes de todas las pruebas"));
