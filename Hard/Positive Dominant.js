function isPositiveDominant(a) {
  const pve = new Set(a.filter((elem) => elem > 0));
  const nve = new Set(a.filter((elem) => elem < 0));
  return pve.size > nve.size;
}
