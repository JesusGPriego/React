import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("testing 09-promesas.test", () => {
  test("should return an hero async", () => {
    const id = 3;

    return getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[2]);
    });
  });
  test("should return 'No se pudo encontrar el héroe'", () => {
    const id = 23;
    return getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
    });
  });
});
