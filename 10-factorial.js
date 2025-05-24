function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = Number(process.argv[2]);
const n = Number.isInteger(arg) ? arg : NaN;

console.log(factorial(isNaN(n) ? 0 : n));
