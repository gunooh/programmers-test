/**
 * 무작위로 K개의 수 뽑기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181858
 *
 * 랜덤으로 서로 다른 k개의 수를 저장한 배열을 만드려고 합니다. 적절한 방법이 떠오르지 않기 때문에 일정한 범위 내에서 무작위로 수를 뽑은 후, 지금까지 나온적이 없는 수이면 배열 맨 뒤에 추가하는 방식으로 만들기로 합니다.
 * 이미 어떤 수가 무작위로 주어질지 알고 있다고 가정하고, 실제 만들어질 길이 k의 배열을 예상해봅시다.
 * 정수 배열 arr가 주어집니다. 문제에서의 무작위의 수는 arr에 저장된 순서대로 주어질 예정이라고 했을 때, 완성될 배열을 return 하는 solution 함수를 완성해 주세요.
 * 단, 완성될 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채워서 return 합니다.
 */

// 내 풀이
// const solution = (arr, k) => {
//   const result = [...new Set(arr)].slice(0, k);

//   if (result.length < k) {
//     while (result.length < k) {
//       result.push(-1);
//     }
//   }

//   return result;
// };

// 다른 풀이
const solution = (arr, k) => {
  const set = [...new Set(arr)];

  return set.length < k ? [...set, ...Array.from({ length: k - set.length }, () => -1)] : set.slice(0, k);
};

// 다른 풀이 2
// const solution = (arr, k) => {
//   const set = new Set(arr);

//   return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
// };

// const arr = [0, 1, 1, 2, 2, 3];
// const k = 3;
const arr = [0, 1, 1, 1, 1];
const k = 4;
console.log(solution(arr, k));
