import { getUser, getUsuarioActivo } from "../../base/05-funciones";

getUser;
describe("05-funciones.test.js tests:", () => {
  test("getUser() should resturns an object.", () => {
    const expectedObject = { uid: "ABC123", username: "imCalones" };
    const returnedObect = getUser();
    expect(expectedObject).toEqual(returnedObect);
  });
  test("getUsuarioActivo should return an object", () => {
    const expectedObject = { uid: "ABC567", username: "Jesús" };
    const returnedObect = getUsuarioActivo("Jesús");
    expect(expectedObject).toEqual(returnedObect);
  });
});
