const MySet = require("./index");

let set = new MySet();
set.add(3);
set.add(1);
set.add(9);

let otherSet = new MySet();
otherSet.add(1);
otherSet.add(2);
otherSet.add(4);
otherSet.add("a");
otherSet.add(3);

test("Should return true if the number is added to the set, if the number exists in set returns false", () => {
  expect(set.add(5)).toBe(true);
  expect(set.add(5)).toBe(false);
});

test("Should return the set size", () => {
  expect(set.size()).toBe(4);
});

test("If set has the number should return true, if not, it should return false", () => {
  expect(set.has(5)).toBe(true);
  expect(set.has(999)).toBe(false);
});

test("Return all the numbers of the set", () => {
  expect(set.values()).toEqual(expect.arrayContaining([5, 3, 1, 9]));
});

test("Should return true if the number is removed of the set. If the number already removed or does not exist, returns false", () => {
  expect(set.remove(5)).toBe(true);
  expect(set.remove(5)).toBe(false);
});

test("Return the union of the sets", () => {
  expect(set.union(otherSet).values()).toEqual([3, 1, 9, 2, 4, "a"]);
});

test("Return the intersection of the sets", () => {
  expect(set.intersection(otherSet).values()).toEqual([3, 1]);
});

// test("Return the intersection of the sets", () => {
//     for(let i = 0 ; i < set.length; i++) {
//         expect(set.intersection(otherSet).values()).toEqual(
//             expect.arrayContaining(otherSet.values[i])
//           );
//     }

// });

test("Return the difference between the sets", () => {
  let differenceSet = new MySet();
  differenceSet.add(1);
  differenceSet.add(3);
  differenceSet.add("a");
  //   expect(set.difference(differenceSet).values()).toEqual(
  //     expect.arrayContaining(["a", 9])
  //   );
  expect(differenceSet.difference(set).values()).toEqual(
    expect.arrayContaining(["a"])
  );
});

test("Return if the array is a subset of the set", () => {
  let subSet = new MySet();
  subSet.add(9);
  subSet.add(3);
  expect(subSet.subset(set)).toEqual(true);
});
