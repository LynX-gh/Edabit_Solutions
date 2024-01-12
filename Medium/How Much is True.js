function countTrue(arr) {
  return arr.reduce((res, elem) => (elem ? res + 1 : res), 0);
}
