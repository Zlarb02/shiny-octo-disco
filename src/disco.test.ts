import { draw } from "./disco";

test("disco devrait avoir définis draw", (done) => {
  expect.assertions(1);

  expect(draw).toBeDefined();
  done();
});
