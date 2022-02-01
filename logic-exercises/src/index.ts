29

const findMissingNumber = (arr: number[]): number => {
  const expectedSum = 465; // soma de todos os números do array a baixo 30 + 1 * 30 / 3 
  let sum = 0

  for(const num of arr) {
    sum += num;
  }

  return expectedSum - sum;
}

const arraySum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30]
console.log(findMissingNumber(arraySum)) // numero  18 está faltando
