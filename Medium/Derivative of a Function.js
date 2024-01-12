function derivative(b, m) {
  // d/dx x^n => n.x^n-1
  return b * Math.pow(m, b - 1);
}
