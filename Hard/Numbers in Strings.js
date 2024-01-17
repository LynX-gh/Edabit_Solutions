function numInStr(arr) {
  return arr.filter((elem) => (elem.search(/\d/) == -1 ? false : true));
}
