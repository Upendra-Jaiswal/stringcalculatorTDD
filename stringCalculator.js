function add(numbers) {
    if (numbers === "") {
      return 0; // Handle empty string
    }
    
    if (numbers.startsWith("//")) {
      const delimiter = numbers[2];
      numbers = numbers.substring(4);
      return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num), 0);
    }
    
    const numArray = numbers.split(/,|\n/);
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
  

module.exports = add;
