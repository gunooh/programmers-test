const solution = (arr) => {
  const list = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    list.push(arr[i]);
  }

  return list;
};

const arr = [1, 2, 3, 4, 5];
console.log(solution(arr));
