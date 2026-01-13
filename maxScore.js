function maxScoreWithOneReset(nums) {
  let total = 0; // Accumulator

  nums.forEach((number) => {
    if (number >= 0) {
      total += number;
    } else if (number < 0 && total + number >= 0) {
      total += number;
    } else if (number < 0 && total + number < 0) {
      total = 0;
    }
  });

  if (total <= 0) {
    return 0;
  } else {
    return total;
  }
}

// console.log(maxScoreWithOneReset([2, -1, 2, -5, 2, 2]));
// console.log(maxScoreWithOneReset([4, -10, 3, 2, -1, 6]));
console.log(maxScoreWithOneReset([-50, -2, -3]));
