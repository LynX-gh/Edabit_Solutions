function getLength(arr) {
  return arr.flat(10).length;
}

// OR

function getLength(arr) {
  if (arr.length == 0) return 0;
  let res = 0;
  for (const elem of arr) {
    if (Array.isArray(elem)) res += getLength(elem);
    else res++;
  }
  return res;
}
