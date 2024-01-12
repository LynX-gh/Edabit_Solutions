function num_of_digits(num) {
  if (num == 0) return 1;
  let res = 1,
    n = Math.abs(num);
  while ((num = ~~(num / 10))) res++;
  return res;
}

// Or

function num_of_digits(num) {
  if (num == 0) return 1;
  let res = ~~Math.log10(Math.abs(num));
  return res + 1;
}
