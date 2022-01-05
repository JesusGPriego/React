import { getImagen } from "../../base/11-async-await";

describe("testing 11-async-await.js", () => {
  test("should imgs url", async () => {
    const url = await getImagen();
    // console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
