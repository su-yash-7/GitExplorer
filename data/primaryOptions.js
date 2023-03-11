const options = [
  { value: "one", label: "one" },
  { value: "two", label: "two" },
  { value: "three", label: "three" },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
