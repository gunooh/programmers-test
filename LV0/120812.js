/**
 * 최빈값 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120812
 *
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
 */

// 내 풀이
// const solution = (array) => {
//   const map = new Map();

//   for (const item of array) {
//     map.set(item, (map.get(item) || 0) + 1);
//   }

//   const max = Math.max(...map.values());
//   const modeArr = [];

//   for (const item of map) {
//     if (item[1] === max) {
//       modeArr.push(item[0]);
//     }
//   }

//   return modeArr.length === 1 ? modeArr[0] : -1;
// };

// 다른 풀이
const solution = (array) => {
  const map = new Map();

  for (const item of array) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  const arr = [...map].sort((a, b) => b[1] - a[1]);

  return arr.length === 1 || arr[0][1] > arr[1][1] ? arr[0][0] : -1;
};

const arr = [1, 2, 2, 3, 3, 3, 3, 4];
console.log(solution(arr));
