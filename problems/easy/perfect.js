function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum == num) {
    return "Perfect";
  } else if (sum > num) {
    return "Abundant";
  } else {
    return "Deficient";
  }
}
