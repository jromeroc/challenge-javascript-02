const fibonacci = (n) => {
  const sequence = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    let numCalc = 0;
    numCalc = sequence[i] + sequence[i + 1];
    sequence.push(numCalc);
  }
  sequence.shift();
  return sequence;
}


module.exports = fibonacci;