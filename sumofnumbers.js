const input = [1, 2, 3];

function sumFor(array) {
  let total = 0;
  for (const num of array) {
    total += num;
  }
  return total;
}
console.log(sumFor(input));

function sumWhile(array) {
  let total = 0;
  let i = 0;
  while (i < array.length) {
    total += array[i];
    i++;
  }
  return total;
}
console.log(sumWhile(input));

function sumRecursion(array) {
  if (array.length === 1) {
    return array[0];
  } return array[0] + sumRecursion(array.slice(1));
}
console.log(sumRecursion(input));

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) {
    return memo + num;
  });
}
console.log(sumTheSimpleWay(input));
