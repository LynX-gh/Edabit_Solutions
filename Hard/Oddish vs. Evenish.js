function sumOfDig(num) {
  let res = 0;
  while (num > 0) {
    res += num % 10;
    num = ~~(num / 10);
  }
  return res;
}

function oddishOrEvenish(num) {
  return sumOfDig(num) % 2 ? "Oddish" : "Evenish";
}
