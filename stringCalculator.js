function add(numbers) {
  // Handle empty string case
  if (numbers === "") {
    return 0;
  }

  // Determine delimiter
  const delimiter = numbers.startsWith("//") ? numbers[2] : /,|\n/;

  // Prepare number array
  const numArray = (
    numbers.startsWith("//") ? numbers.slice(4) : numbers
  ).split(delimiter);

  // Check for negative numbers
  const negatives = numArray.filter((num) => parseInt(num) < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  // Calculate the sum
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
