/**
 * 가까운 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120890
 *
 * 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
 */

// 내 풀이
// const solution = (array, n) => {
//   let closeIdx = 0;
//   let close = Math.abs(n - array[0]);

//   array.sort((a, b) => b - a).forEach((item, idx) => {
//     if (Math.abs(n - item) <= close) {
//       close = Math.abs(n - item);
//       closeIdx = idx;
//     }
//   });

//   return array[closeIdx];
// };

// 다른 풀이 1
// const solution = (array, n) => array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0];

// 다른 풀이 2
const solution = (array, n) => {
  const close = Math.min(...array.map((item) => Math.abs(n - item)));
  return array.sort().find((item) => Math.abs(n - item) === close);
};

const array = [45, 26, 27, 29, 30];
const n = 28;
console.log(solution(array, n));
