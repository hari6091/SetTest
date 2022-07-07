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

let differenceSet = new MySet();
differenceSet.add(1);
differenceSet.add(3);
differenceSet.add("a");

let subSet = new MySet();
subSet.add(9);
subSet.add(3);

test("Return all the numbers of the set", () => {
  expect(set.values()).toContain(3);
  expect(set.values()).toContain(1);
  expect(set.values()).toContain(9);
}); //modificado

test("Should return the set size", () => {
  expect(set.size()).toBe(3);
});

test("If set has the number should return true, if not, it should return false", () => {
  expect(set.has(3)).toBe(true);
  expect(set.has(999)).toBe(false);
});

test("Should return true if the number is added to the set, if the number exists in set returns false", () => {
  expect(set.add(5)).toBe(true);
  expect(set.add(5)).toBe(false);
  set.remove(5);
}); //modificado

test("Should return true if the number is removed of the set. If the number already removed or does not exist, returns false", () => {
  set.remove(3);
  expect(set.values()).toEqual(expect.not.arrayContaining([3]));
  expect(set.values()).toHaveLength(2);
  expect(set.remove(999)).toBe(false);
  set.add(3);
}); //modificado

test("Return the union of the sets", () => {
  //set = {1, 3, 9} otherSet = {1, 2, 4, "a", 3}
  expect(set.union(otherSet).values()).toContain(1);
  expect(set.union(otherSet).values()).toContain(3);
  expect(set.union(otherSet).values()).toContain(9);
  expect(set.union(otherSet).values()).toContain(2);
  expect(set.union(otherSet).values()).toContain(3);
  expect(set.union(otherSet).values()).toContain("a");
}); //modificado

test("Return the intersection of the sets", () => {
  //set = {1, 3, 9} otherSet = {1, 2, 4, "a", 3}
  expect(set.intersection(otherSet).values()).toContain(3);
  expect(set.intersection(otherSet).values()).toContain(1);
}); //modificado (unico caso que passa é se colocar um valor da lista que existe nos sets dentro do IF do intersection)

test("Return the difference between the sets", () => {
  //set = {1, 3, 9} differenceSet = {1, 3,"a"}
  expect(set.difference(differenceSet).values()).toEqual(
    expect.arrayContaining([9])
  );
  expect(differenceSet.difference(set).values()).toEqual(
    expect.arrayContaining(["a"])
  );
}); //código possívelmente quebrado, não compara se os dois arrays são iguais, mas sim quais valores de um array existe no outro.

test("Return if the array is a subset of the set", () => {
  //set = {1, 3, 9} subSet = {3, 9}
  expect(subSet.subset(set)).toEqual(true);
}); //(unico caso que passa é se colocar um valor da lista que existe nos sets dentro do return do subset)
