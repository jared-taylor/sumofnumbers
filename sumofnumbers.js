const nums = [1, 2, 3, 4, 5];

function sumFor(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }

  return sum;
}

function sumWhile(input) {
  let i = 0;
  let sum = 0;
  while (i < input.length) {
    sum += input[i];
    i++;
  }

  return sum;
}

function sumRecursion(input) {
  if (input.length === 0) {
    return 0;
  }
  return input[0] + sumRecursion(input.slice(1, input.length));
}

function sumTheEasyWay(input) {
  let sum = 0;
  _.map(input, function (item) { sum += item; });
  return sum;
}

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheEasyWay(nums));
