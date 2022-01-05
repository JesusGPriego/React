import { retornaArreglo } from "../../base/07-deses-arr";

describe("testing 07-deses-arr.js", () => {
  test("retornaArreglo() should returns an string and a number", () => {
    const [letras, numeros] = retornaArreglo();
    // console.log(letras, numeros);
    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");
  });
});
