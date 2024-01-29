// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a, b, c, w, h) {
  let brick = [a, b, c].sort();
  let hole = [w, h].sort();
  if (brick[0] <= hole[0] && brick[1] <= hole[1]) {
    return true;
  }
  return false;
}
