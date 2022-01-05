describe("demo.test tests:", () => {
  test("String should be equal ", () => {
    //init:
    const mensaje = "Hola mundo";

    //estimulo:
    const mensaje2 = `Hola mundo`;

    //check behaviour

    expect(mensaje).toBe(mensaje2);
  });
});
