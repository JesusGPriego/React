import heroes, { owners } from "../data/heroes";

//console.log(owners);

/* const getHeroById = (id) => {
  return heroes.find((heroes) => heroes.id === id);
}; */

const getHeroById = (id) => heroes.find((heroes) => heroes.id === id);
///¡console.log(getHeroById(2));

const getHeroByOwner = (owner) =>
  heroes.filter((heroes) => heroes.owner === owner);
//console.log(getHeroByOwner("DC"));

export { getHeroByOwner, getHeroById };
