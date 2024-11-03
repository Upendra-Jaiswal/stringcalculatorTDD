function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  const delimiter = numbers.startsWith("//") ? numbers[2] : /,|\n/;

  const numArray = (
    numbers.startsWith("//") ? numbers.slice(4) : numbers
  ).split(delimiter);

  const negatives = numArray.filter((num) => parseInt(num) < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
