import { getHeroById, getHeroByOwner } from "./bases/09-import-export";

/* //Promises
const mPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hero = getHeroById(1);
    if (hero) {
      resolve(hero);
    } else {
      reject("Hero not found");
    }
  }, 2000);
});

mPromise
  .then((hero) => {
    console.log(hero);
  })
  .catch((error) => console.warn(error));
 */

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("Hero not found");
      }
    }, 2000);
  });
};

/* getHeroByIdAsync(3)
  .then((hero) => console.log(hero))
  .catch((error) => console.warn(error));
 */

//Simplyinfing what's above:
getHeroByIdAsync(31).then(console.log).catch(console.warn);
