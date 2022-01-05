import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("testing 02-template-string", () => {
  test("getSaludo(). Should returns Hola Jesús ", () => {
    const mName = "Jesús";
    const saludo = getSaludo(mName);
    expect(saludo).toBe("Hola " + mName);
  });

  test("getSaludo() should returns Hola Juan", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Juan");
  });
});
