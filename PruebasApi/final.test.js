// Importamos la librería 'supertest' para hacer peticiones HTTP a la API
const request = require("supertest");

// Definimos la URL base de la API donde realizaremos las pruebas
const app = "https://goldfish-app-pyi2v.ondigitalocean.app";

describe("Realizando el testing de la API del parcial: ", () => {
  // Prueba del endpoint POST '/api/v1/student'
  it("Haciendo prueba del POST", async () => {
    // Realizamos la solicitud POST enviando un objeto con el campo 'legajo'
    const response = await request(app).post("/api/v1/student").send({
      legajo: 51636,
    });

    // Verificamos que el código de estado sea 201 (creación exitosa)
    expect(response.status).toBe(201);

    // Comprobamos que la respuesta contiene el campo 'message'
    expect(response.body).toHaveProperty("message");

    // Validamos que el mensaje de la respuesta contenga la cadena "Your username is",
    // lo que indica que la API ha creado correctamente el usuario y nos ha proporcionado el nombre de usuario
    expect(response.body.message).toContain("Your username is");

    // Verificamos que el mensaje no esté vacío, para asegurar que se haya enviado una respuesta válida
    expect(response.body.message).not.toBe("");

    // Comprobamos que la respuesta no contenga un campo 'error', lo que garantizaría que la solicitud fue exitosa
    expect(response.body).not.toHaveProperty("error");
  });

  // Prueba del endpoint GET '/api/v1/users/1'
  it("Haciendo prueba del GET", async () => {
    // Realizamos la solicitud GET para obtener los datos del usuario con ID 1
    const response = await request(app).get("/api/v1/users/1");

    // Verificamos que el código de estado sea 200 (respuesta exitosa)
    expect(response.status).toBe(200);

    // Comprobamos que la respuesta contiene un campo 'id' con valor 1, lo que asegura que estamos obteniendo
    // los datos del usuario con ID 1 correctamente.
    expect(response.body).toHaveProperty("id", 1);

    // Verificamos que el campo 'name' esté presente en la respuesta, lo que indica que la información del usuario
    // fue recuperada correctamente.
    expect(response.body).toHaveProperty("name");

    // Comprobamos que el campo 'name' no esté vacío, para asegurar que el nombre del usuario fue recuperado correctamente.
    expect(response.body.name).not.toBe("");

    // Verificamos que el campo 'id' sea un número, como es esperado en la respuesta de la API.
    expect(typeof response.body.id).toBe("number");

    // Opcional: Si la respuesta contiene un campo 'email', verificamos que sea una cadena de texto,
    // lo que es común para los correos electrónicos.
    if (response.body.email) {
      expect(typeof response.body.email).toBe("string");
    }
  });

  it("haciendo pruebas unitarias ", () => {
    // funcion de frigorias de un aire acondicionado
    function calcularFrigorias(alto, ancho, profundidad) {
      // si uno de los valores es 0, retornara un mensaje
      if (alto <= 0 || ancho <= 0 || profundidad <= 0) {
        return "Las dimensiones deben ser mayores a cero.";
      }
      // calculamos el volumen
      const volumen = alto * ancho * profundidad;
      // y el resultado lo multiplicamos por 50
      return volumen * 50; // 50 frigorías por m3
    }
    
    // Pruebas unitarias de la funcion
    // "Debe calcular correctamente las frigorías para una habitación de 3x4x5 m"
    expect(calcularFrigorias(3, 4, 5)).toBe(3000);

    // "Debe manejar dimensiones no enteras correctamente (2.5x3.2x4.8 m)"
    expect(calcularFrigorias(2.5, 3.2, 4.8)).toBe(1920); // Aproximado

    // "Debe lanzar un error si alguna dimensión es cero"
    expect(calcularFrigorias(0, 4, 5)).toBe(
      "Las dimensiones deben ser mayores a cero."
    );

    //"Debe lanzar un error si alguna dimensión es negativa"
    expect(calcularFrigorias(3, -4, 5)).toBe(
      "Las dimensiones deben ser mayores a cero."
    );

    // "Debe calcular correctamente frigorías para una habitación pequeña (1x1x1 m)"
    expect(calcularFrigorias(1, 1, 1)).toBe(50);
  });
});
