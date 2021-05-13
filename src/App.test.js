import sumy from "./test1";

test("sumy is not error", () => {
  expect(sumy("1", "2")).not.toBe("Error");
});

test("no input", () => {
  expect(sumy("1", "")).toBe("Error");
});

test("input string", () => {
  expect(sumy("12", "xxxx")).toBe("Error");
});
