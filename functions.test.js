import { functions } from "./functions";

// tobe
test("adds 1 + 2 to equal 3", () => {
  expect(functions.sum(1, 2)).toBe(3);
});

// not tobe
test("adds 1 + 2 to Not equal 4", () => {
  expect(functions.sum(1, 2)).not.toBe(4);
});

// null
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// falsy
test("should be falsy", () => {
  expect(functions.checkValue()).toBeFalsy();
});

// object
test("User should be Brad Pitt object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Pitt",
  });
});

// Less than and greater than
test("Shold be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
  // expect(load1 + load2).toBeGreaterThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  const usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

// Promise
test("user fetched name should be Leane Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("user fetched name should be Leane Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
