import { merge } from "../src/merge";

test("merges two sorted arrays", () => {
  expect(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(merge([1, 2, 3, 4, 5], [])).toEqual([1, 2, 3, 4, 5]);
  expect(merge([], [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(merge([5, 5, 5, 5], [6, 6, 6, 6])).toEqual([5, 5, 5, 5, 6, 6, 6, 6]);
  expect(merge([], [])).toEqual([]);
});
