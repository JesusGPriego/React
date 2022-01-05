import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("testing 08-imp-exp.js", () => {
  test("getHeroById() should returns hero by id", () => {
    const id = 3;
    const hero = getHeroeById(id);
    const heroData = heroes.find((heroe) => heroe.id === id);
    expect(hero).toEqual(heroData);
  });
  test("getHeroById() should returns undefined", () => {
    const id = 45;
    const hero = getHeroeById(id);
    const heroData = heroes.find((heroe) => heroe.id === id);
    expect(hero).toBe(undefined);
  });
  test("getHeroesByOwner() should returns DC heroes", () => {
    const owner = "DC";
    const dcHeroes = getHeroesByOwner(owner);
    const matches = heroes.filter((hero) => hero.owner === owner);
    expect(dcHeroes).toEqual(matches);
  });
  test("getHeroesByOwner() should returns Marvel heroes array size", () => {
    const owner = "Marvel";
    const marvelHeroes = getHeroesByOwner(owner);
    const matches = heroes.filter((hero) => hero.owner === owner);
    expect(marvelHeroes.length).toBe(2);
  });
});
