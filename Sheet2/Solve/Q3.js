function generateFibonacciSequence(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

const n = 10;
const fibonacciSequence = generateFibonacciSequence(n);
console.log(fibonacciSequence);