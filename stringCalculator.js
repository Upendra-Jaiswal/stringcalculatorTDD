function add(numbers) {
  if (numbers === "") return 0;
  const numArray = numbers.split(/,|\n/); // Regex to split by comma or newline
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
