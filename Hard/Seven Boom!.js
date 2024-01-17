function sevenBoom(arr) {
  const arr7 = arr.filter((elem) => `${elem}`.includes("7"));
  if (arr7.len) return "Boom!";
  return "there is no 7 in the array";
}

// OR

function sevenBoom(arr) {
  return arr.join().includes(7) ? "Boom!" : "there is no 7 in the array";
}
