function countBoomerangs(arr) {
  let fptr = 0,
    mptr = 1,
    eptr = 2,
    res = 0;
  while (eptr < arr.length) {
    if (arr[fptr] == arr[eptr] && arr[fptr] != arr[mptr]) res += 1;
    fptr++, mptr++, eptr++;
  }
  return res;
}
