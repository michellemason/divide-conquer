function countZeroes(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      count++;
    } 
  }
  return count;
}

module.exports = countZeroes;