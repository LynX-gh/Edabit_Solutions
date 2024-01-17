function combinations(...items) {
  return items.reduce((res, elem) => (elem ? res * elem : res), 1);
}
