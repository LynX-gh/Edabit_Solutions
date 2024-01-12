function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}

// OR

function addName(obj, name, value) {
  return { ...obj, [name]: value };
}
